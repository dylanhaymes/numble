/* =====================================================================
   Numble — game engine
   Vanilla JS, no build step. Renders screens into #screen and runs the
   full-screen lesson player. State persists to localStorage.
   ===================================================================== */
(function () {
  'use strict';

  /* ---------- storage (localStorage with in-memory fallback) ---------- */
  var SAVE_KEY = 'numble.save.v3';
  var mem = {};
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return mem[k] || null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { mem[k] = v; } }
  };

  var HEART_MAX = 5;
  var HEART_REGEN_MS = 20 * 60 * 1000; // one heart every 20 minutes

  var DEFAULTS = {
    v: 3,
    xp: 0,
    hearts: HEART_MAX,
    heartsRegenAt: 0,
    gems: 0,
    streak: 0,
    lastDay: null,
    completed: {},          // lessonId -> { stars, bestPct }
    jumpUnlocks: {},        // lessonId -> true (worlds the user jumped ahead to)
    mistakes: [],           // recent missed problems [{lessonId, problemId}]
    stats: { answered: 0, correct: 0 },
    settings: { voice: true, voiceName: null, rate: 1.0, pitch: 1.06, sfx: true, motion: true },
    onboarded: false
  };

  var state = load();

  function load() {
    try {
      var raw = store.get(SAVE_KEY);
      if (raw) return Object.assign({}, DEFAULTS, JSON.parse(raw));
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULTS));
  }
  function save() { store.set(SAVE_KEY, JSON.stringify(state)); }

  /* ---------- date / leveling helpers ---------- */
  function dayStr(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function today() { return dayStr(); }
  function yesterday() { var d = new Date(); d.setDate(d.getDate() - 1); return dayStr(d); }

  function levelInfo(xp) {
    var lvl = 1, need = 100, floor = 0;
    while (xp >= floor + need) { floor += need; lvl++; need = Math.round(need * 1.25); }
    return { level: lvl, into: xp - floor, span: need };
  }

  function refreshHearts() {
    if (state.hearts >= HEART_MAX) { state.heartsRegenAt = 0; return; }
    if (!state.heartsRegenAt) return;
    var now = Date.now();
    while (state.hearts < HEART_MAX && now >= state.heartsRegenAt) {
      state.hearts++;
      state.heartsRegenAt += HEART_REGEN_MS;
    }
    if (state.hearts >= HEART_MAX) state.heartsRegenAt = 0;
  }
  function loseHeart() {
    if (state.hearts > 0) {
      if (state.hearts === HEART_MAX) state.heartsRegenAt = Date.now() + HEART_REGEN_MS;
      state.hearts--;
    }
  }
  function refillHearts() { state.hearts = HEART_MAX; state.heartsRegenAt = 0; }

  function bumpStreak() {
    var t = today();
    if (state.lastDay === t) return;
    state.streak = (state.lastDay === yesterday()) ? state.streak + 1 : 1;
    state.lastDay = t;
  }

  /* ---------- curriculum access ---------- */
  var CURR = window.NUMBLE_CURRICULUM || [];
  var FLAT = [];        // ordered lessons across all worlds
  var LESSON_BY_ID = {};
  var PROBLEM_BY_ID = {};
  (function indexCurriculum() {
    var order = 0;
    CURR.forEach(function (world) {
      (world.units || []).forEach(function (unit) {
        (unit.lessons || []).forEach(function (lesson) {
          var ref = { world: world, unit: unit, lesson: lesson, order: order++ };
          FLAT.push(ref);
          LESSON_BY_ID[lesson.id] = ref;
          (lesson.problems || []).forEach(function (p) { PROBLEM_BY_ID[p.id] = { problem: p, lesson: lesson }; });
        });
      });
    });
  })();

  function isCompleted(id) { return !!state.completed[id]; }
  function isUnlocked(ref) {
    if (ref.order === 0) return true;
    if (state.jumpUnlocks[ref.lesson.id]) return true;
    var prev = FLAT[ref.order - 1];
    return prev && isCompleted(prev.lesson.id);
  }
  function currentRef() {
    for (var i = 0; i < FLAT.length; i++) {
      if (isUnlocked(FLAT[i]) && !isCompleted(FLAT[i].lesson.id)) return FLAT[i];
    }
    return FLAT[FLAT.length - 1] || null;
  }
  function worldProgress(world) {
    var total = 0, done = 0;
    (world.units || []).forEach(function (u) {
      (u.lessons || []).forEach(function (l) { total++; if (isCompleted(l.id)) done++; });
    });
    return { total: total, done: done, pct: total ? Math.round(100 * done / total) : 0 };
  }

  /* ---------- text helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // Render plain-text math nicely as HTML.
  function pretty(s) {
    var h = esc(s);
    h = h.replace(/\^\(([^)]*)\)/g, '<sup>$1</sup>');
    h = h.replace(/\^(-?[0-9a-zA-Z]+)/g, '<sup>$1</sup>');
    h = h.replace(/\bsqrt\(([^)]*)\)/gi, '&radic;<span class="rad">$1</span>');
    h = h.replace(/(\w)\s*\*\s*(\w)/g, '$1 &times; $2');
    h = h.replace(/\*/g, '&times;');
    h = h.replace(/&lt;=|<=/g, '&le;').replace(/&gt;=|>=/g, '&ge;').replace(/!=/g, '&ne;');
    h = h.replace(/->/g, '&rarr;');
    h = h.replace(/\bpi\b/g, '&pi;');
    h = h.replace(/(\d)\s*\/\s*(\d)/g, '<span class="frac"><span>$1</span><span>$2</span></span>');
    h = h.replace(/\n/g, '<br>');
    return h;
  }

  function norm(s) { return String(s).trim().toLowerCase().replace(/\s+/g, '').replace(/^=+/, ''); }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  var PRAISE = ['Nice one!', 'You got it!', 'Boom — correct!', 'Sharp thinking!', "That's it!", 'Love it!', 'Exactly right!', 'On fire!'];
  var NUDGE = ['Not quite — let me show you.', 'Close! Here\'s the idea.', 'Good try. Let\'s look again.', 'Almost — check this out.'];

  /* ---------- DOM helpers ---------- */
  var $screen = document.getElementById('screen');
  var $hud = document.getElementById('hud');
  var $tabbar = document.getElementById('tabbar');
  var $lesson = document.getElementById('lesson');
  var $modal = document.getElementById('modal');
  var $toast = document.getElementById('toast');

  function setHTML(node, html) { node.innerHTML = html; }
  function applyMotion() { document.body.classList.toggle('no-motion', !state.settings.motion); }

  /* ---------- routing / shell ---------- */
  var route = 'home';
  var pickerExpanded = null;

  function renderShell() {
    var lv = levelInfo(state.xp);
    refreshHearts();
    $hud.hidden = false;
    $tabbar.hidden = false;
    setHTML($hud,
      '<div class="hud-item hud-streak" title="Day streak">🔥 <b>' + state.streak + '</b></div>' +
      '<div class="hud-item hud-gems" title="Gems">💎 <b>' + state.gems + '</b></div>' +
      '<div class="hud-item hud-hearts" data-action="hearts" title="Hearts">❤️ <b>' + state.hearts + '</b></div>' +
      '<div class="hud-item hud-level" title="Level ' + lv.level + '">' +
        '<span class="level-pill">Lv ' + lv.level + '</span>' +
        '<span class="xpbar"><span class="xpbar-fill" style="width:' + Math.round(100 * lv.into / lv.span) + '%"></span></span>' +
      '</div>' +
      '<button class="icon-btn" data-action="settings" title="Settings">⚙️</button>'
    );
    setHTML($tabbar,
      tab('home', '🗺️', 'Learn') + tab('practice', '🎯', 'Practice') + tab('profile', '🧑‍🚀', 'Profile')
    );
  }
  function tab(id, ico, label) {
    return '<button class="tab' + (route === id ? ' active' : '') + '" data-action="route" data-route="' + id + '">' +
      '<span class="tab-ico">' + ico + '</span><span class="tab-label">' + label + '</span></button>';
  }

  function render() {
    renderShell();
    if (route === 'home') renderHome();
    else if (route === 'practice') renderPractice();
    else renderProfile();
    save();
  }

  /* ---------- HOME / learning path ---------- */
  var OFFSETS = [0, 42, 66, 42, 0, -42, -66, -42];

  function renderHome() {
    if (!FLAT.length) { setHTML($screen, '<div class="empty">Loading your curriculum…</div>'); return; }
    var cur = currentRef();
    var html = '';

    // hero greeter
    html += '<section class="hero">' +
      '<div class="hero-pip">' + Mascot.svg('wave', { size: 86 }) + '</div>' +
      '<div class="hero-text">' +
        '<div class="hero-title">' + (state.xp ? 'Welcome back!' : 'Hi, I\'m Pip!') + '</div>' +
        '<div class="hero-sub">' + (cur ? 'Up next: <b>' + esc(cur.lesson.title) + '</b> · ' + esc(cur.world.title) : 'You finished everything — legend!') + '</div>' +
        '<div class="hero-actions">' +
          (cur ? '<button class="btn btn-primary btn-3d" data-action="start" data-lesson="' + cur.lesson.id + '">Continue ▶</button>' : '') +
          '<button class="btn btn-ghost hero-jump" data-action="open-picker">🧭 Pick a topic</button>' +
        '</div>' +
      '</div>' +
    '</section>';

    // worlds + winding path
    CURR.forEach(function (world) {
      var wp = worldProgress(world);
      var firstLesson = (world.units[0] && world.units[0].lessons[0]) ? world.units[0].lessons[0] : null;
      var firstRef = firstLesson ? LESSON_BY_ID[firstLesson.id] : null;
      var worldLocked = firstRef && !isUnlocked(firstRef);
      html += '<section class="world" style="--world:' + world.color + '">' +
        '<div class="world-head">' +
          '<div class="world-emoji">' + world.icon + '</div>' +
          '<div class="world-meta">' +
            '<div class="world-name">' + esc(world.title) + '</div>' +
            '<div class="world-sub">' + esc(world.subtitle) + ' · ' + wp.done + '/' + wp.total + '</div>' +
          '</div>' +
          (worldLocked && firstLesson ? '<button class="jump-link" data-action="jump" data-lesson="' + firstLesson.id + '">Jump here</button>' : '') +
        '</div>' +
        '<div class="world-blurb">' + esc(world.blurb || '') + '</div>';

      var idx = 0;
      (world.units || []).forEach(function (unit) {
        html += '<div class="unit-label">' + esc(unit.title) + '</div><div class="path">';
        (unit.lessons || []).forEach(function (lesson) {
          var ref = LESSON_BY_ID[lesson.id];
          var off = OFFSETS[idx % OFFSETS.length];
          idx++;
          var done = isCompleted(lesson.id);
          var unlocked = isUnlocked(ref);
          var isCur = cur && cur.lesson.id === lesson.id;
          var cls = 'node' + (done ? ' completed' : unlocked ? ' open' : ' locked') + (isCur ? ' current' : '');
          var inner = done ? '✓' : unlocked ? lesson.icon : '🔒';
          var stars = done ? starRow(state.completed[lesson.id].stars) : '';
          html += '<div class="node-row" style="transform:translateX(' + off + 'px)">' +
            (isCur ? '<div class="start-bubble">' + (done ? 'REVIEW' : 'START') + '</div>' : '') +
            '<button class="' + cls + '" ' + (unlocked ? 'data-action="start" data-lesson="' + lesson.id + '"' : 'disabled') + ' title="' + esc(lesson.title) + '">' +
              '<span class="node-ico">' + inner + '</span>' +
            '</button>' +
            stars +
          '</div>';
        });
        html += '</div>';
      });
      html += '</section>';
    });

    setHTML($screen, html);
    // keep current node in view-ish on first paint
  }

  function starRow(n) {
    var s = '';
    for (var i = 0; i < 3; i++) s += '<span class="' + (i < n ? 'on' : '') + '">★</span>';
    return '<div class="node-stars">' + s + '</div>';
  }

  /* ---------- PRACTICE ---------- */
  function renderPractice() {
    var cur = currentRef();
    var unlockedProblems = [];
    FLAT.forEach(function (ref) {
      if (isUnlocked(ref)) (ref.lesson.problems || []).forEach(function (p) { unlockedProblems.push({ p: p, l: ref.lesson }); });
    });
    var haveMistakes = state.mistakes.length > 0;

    var html = '<div class="practice">' +
      '<h2 class="screen-title">Practice 🎯</h2>' +
      card('🗓️', 'Daily Challenge', 'A fresh mix of ' + Math.min(8, unlockedProblems.length) + ' questions from what you\'ve unlocked.',
        unlockedProblems.length ? '<button class="btn btn-primary btn-3d" data-action="daily">Start</button>' : '<span class="muted">Unlock a lesson first</span>') +
      card('🩹', 'Fix your tricky ones', haveMistakes ? 'Re-practice the ' + Math.min(10, state.mistakes.length) + ' questions you missed recently.' : 'No mistakes saved — nice work!',
        haveMistakes ? '<button class="btn btn-3d" data-action="review">Review</button>' : '') +
      (cur ? card(cur.world.icon, 'Keep climbing', 'Jump back into <b>' + esc(cur.lesson.title) + '</b>.',
        '<button class="btn btn-3d" data-action="start" data-lesson="' + cur.lesson.id + '">Go</button>') : '') +
    '</div>';
    setHTML($screen, html);
  }
  function card(ico, title, body, action) {
    return '<div class="pcard"><div class="pcard-ico">' + ico + '</div><div class="pcard-body">' +
      '<div class="pcard-title">' + title + '</div><div class="pcard-text">' + body + '</div></div>' +
      '<div class="pcard-action">' + (action || '') + '</div></div>';
  }

  /* ---------- PROFILE ---------- */
  function renderProfile() {
    var lv = levelInfo(state.xp);
    var done = Object.keys(state.completed).length;
    var crowns = 0; Object.keys(state.completed).forEach(function (k) { crowns += state.completed[k].stars; });
    var acc = state.stats.answered ? Math.round(100 * state.stats.correct / state.stats.answered) : 0;

    var html = '<div class="profile">' +
      '<div class="profile-top">' +
        '<div class="ring" style="--p:' + Math.round(100 * lv.into / lv.span) + '">' + Mascot.svg('happy', { size: 84 }) +
          '<div class="ring-lvl">Lv ' + lv.level + '</div></div>' +
        '<div class="profile-name">Math Explorer</div>' +
        '<div class="profile-sub">' + state.xp + ' XP · ' + lv.into + '/' + lv.span + ' to level ' + (lv.level + 1) + '</div>' +
      '</div>' +
      '<div class="stat-grid">' +
        stat('🔥', state.streak, 'Day streak') +
        stat('⭐', crowns, 'Stars earned') +
        stat('✅', done, 'Lessons done') +
        stat('🎯', acc + '%', 'Accuracy') +
        stat('💎', state.gems, 'Gems') +
        stat('❤️', state.hearts, 'Hearts') +
      '</div>' +
      '<h3 class="screen-title">Your journey</h3>';

    CURR.forEach(function (world) {
      var wp = worldProgress(world);
      html += '<div class="wp-row"><span class="wp-ico">' + world.icon + '</span>' +
        '<div class="wp-main"><div class="wp-name">' + esc(world.title) + ' <span class="muted">' + wp.done + '/' + wp.total + '</span></div>' +
        '<div class="progress"><div class="progress-fill" style="width:' + wp.pct + '%;background:' + world.color + '"></div></div></div></div>';
    });

    html += '<div class="profile-actions">' +
      '<button class="btn btn-3d" data-action="settings">⚙️ Settings</button>' +
      '<button class="btn btn-ghost danger" data-action="reset">Reset progress</button></div>' +
    '</div>';
    setHTML($screen, html);
  }
  function stat(ico, num, label) {
    return '<div class="stat"><div class="stat-ico">' + ico + '</div><div class="stat-num">' + num + '</div><div class="stat-label">' + label + '</div></div>';
  }

  /* ===================================================================
     LESSON PLAYER
     =================================================================== */
  var session = null;

  function buildProblemList(ref) { return shuffle(ref.lesson.problems || []); }

  function startLesson(lessonId) {
    var ref = LESSON_BY_ID[lessonId];
    if (!ref) return;
    Sfx.unlock();
    var problems = buildProblemList(ref);
    session = sessionFor(problems, { lessonRef: ref, title: ref.lesson.title, intro: ref.lesson.intro });
    openPlayer();
    renderProblem();
    speakAndShow(ref.lesson.intro || 'Let\'s get started!', 'wave');
  }

  function startSynthetic(problems, opts) {
    if (!problems.length) { toast('Nothing to practice yet!'); return; }
    Sfx.unlock();
    session = sessionFor(shuffle(problems), opts);
    openPlayer();
    renderProblem();
    speakAndShow(opts.intro || 'Let\'s practice!', 'wave');
  }

  function sessionFor(problems, opts) {
    return {
      lessonRef: opts.lessonRef || null,
      title: opts.title || 'Practice',
      isPractice: !opts.lessonRef,
      queue: problems.slice(),
      total: problems.length,
      cleared: {},
      seen: {},
      firstTry: {},
      current: null,
      selected: null,
      hintTier: -1,
      phase: 'answer',
      xpEarned: 0,
      heartsLost: 0
    };
  }

  function openPlayer() { $lesson.hidden = false; document.body.classList.add('in-lesson'); }
  function closePlayer() {
    $lesson.hidden = true; document.body.classList.remove('in-lesson');
    Voice.stop(); session = null;
  }

  function clearedCount() { return Object.keys(session.cleared).length; }

  function renderProblem() {
    if (!session.queue.length) { finishLesson(); return; }
    session.current = session.queue[0];
    session.selected = null;
    session.hintTier = -1;
    session.phase = 'answer';
    var p = session.current;
    var prog = Math.round(100 * clearedCount() / session.total);

    var answers = '';
    if (p.type === 'mc') {
      answers = '<div class="answers">' + shuffle(p.choices || []).map(function (c) {
        return '<button class="choice" data-action="choose" data-val="' + esc(c) + '">' + pretty(c) + '</button>';
      }).join('') + '</div>';
    } else if (p.type === 'truefalse') {
      answers = '<div class="tf-grid">' +
        '<button class="tf-btn" data-action="choose" data-val="true">✓ True</button>' +
        '<button class="tf-btn" data-action="choose" data-val="false">✗ False</button></div>';
    } else {
      answers = '<div class="input-wrap"><input id="answerInput" class="num-input" autocomplete="off" autocapitalize="off" ' +
        'spellcheck="false" placeholder="Type your answer" /></div>' + keypad();
    }

    setHTML($lesson,
      '<div class="lesson-top">' +
        '<button class="icon-btn" data-action="quit-lesson" title="Quit">✕</button>' +
        '<div class="lesson-progress"><div class="lp-bar"><div class="lp-fill" style="width:' + prog + '%"></div></div></div>' +
        '<div class="lesson-hearts">❤️ ' + state.hearts + '</div>' +
      '</div>' +
      '<div class="lesson-body">' +
        '<div class="q-head">' +
          '<div class="q-pip" id="qpip">' + Mascot.svg('idle', { size: 72 }) + '</div>' +
          '<div class="bubble" id="bubble"></div>' +
        '</div>' +
        '<div class="q-prompt">' + pretty(p.prompt) + '</div>' +
        answers +
        '<div class="hintpanel" id="hintpanel" hidden></div>' +
      '</div>' +
      '<div class="lesson-foot" id="foot">' +
        '<button class="hint-btn" data-action="hint">💡 Hint</button>' +
        '<button class="check-btn" data-action="check" disabled>Check</button>' +
      '</div>'
    );

    var input = document.getElementById('answerInput');
    if (input) {
      input.addEventListener('input', function () {
        session.selected = input.value;
        toggleCheck(!!input.value.trim());
      });
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && session.selected) doCheck(); });
      setTimeout(function () { try { input.focus(); } catch (e) {} }, 50);
    }
  }

  function keypad() {
    var keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '-', '0', '.', '/', 'x', '⌫'];
    return '<div class="keypad">' + keys.map(function (k) {
      var v = k === '⌫' ? 'back' : (k === 'x' ? '×' : k);
      return '<button class="key' + (k === '⌫' ? ' key-wide' : '') + '" data-action="key" data-key="' + v + '">' + k + '</button>';
    }).join('') + '</div>';
  }

  function toggleCheck(on) {
    var b = $lesson.querySelector('.check-btn');
    if (b) b.disabled = !on;
  }

  function onChoose(val, btn) {
    if (session.phase !== 'answer') return;
    session.selected = val;
    var group = btn.parentNode;
    Array.prototype.forEach.call(group.children, function (c) { c.classList.remove('selected'); });
    btn.classList.add('selected');
    Sfx.play('select');
    toggleCheck(true);
  }

  function onKey(k) {
    var input = document.getElementById('answerInput');
    if (!input) return;
    if (k === 'back') input.value = input.value.slice(0, -1);
    else input.value += k;
    session.selected = input.value;
    toggleCheck(!!input.value.trim());
    input.focus();
  }

  function isCorrect(p, val) {
    if (val == null) return false;
    if (p.type === 'mc' || p.type === 'truefalse') return norm(val) === norm(p.answer);
    // input
    var n = norm(val).replace(/×/g, '*');
    if (n === norm(p.answer)) return true;
    var acc = p.accept || [];
    for (var i = 0; i < acc.length; i++) if (n === norm(acc[i])) return true;
    var a = parseFloat(n), b = parseFloat(norm(p.answer));
    if (!isNaN(a) && !isNaN(b) && Math.abs(a - b) < 1e-9) return true;
    return false;
  }

  function doCheck() {
    if (session.phase !== 'answer' || session.selected == null || session.selected === '') return;
    var p = session.current;
    var ok = isCorrect(p, session.selected);
    var firstSeen = !session.seen[p.id];
    session.seen[p.id] = true;
    state.stats.answered++;
    if (ok) state.stats.correct++;
    if (firstSeen) session.firstTry[p.id] = ok;

    session.phase = 'feedback';

    if (ok) {
      session.cleared[p.id] = true;
      session.queue.shift();
      var gain = session.isPractice ? 5 : 10;
      session.xpEarned += gain;
      Sfx.play('correct');
      markChoiceState(true);
      setFace('celebrate');
      var msg = pick(PRAISE) + ' ' + (p.explain || '');
      speakAndShow(msg, 'celebrate');
      showFeedback(true, msg);
    } else {
      // requeue this problem so it comes back
      session.queue.push(session.queue.shift());
      loseHeart(); session.heartsLost++;
      recordMistake(p);
      Sfx.play('wrong');
      markChoiceState(false);
      setFace('oops');
      var ans = 'Answer: ' + p.answer;
      var msg2 = pick(NUDGE) + ' ' + (p.explain || ans);
      speakAndShow(msg2, 'oops');
      showFeedback(false, msg2, p);
    }
    updateHearts();
    save();
  }

  function markChoiceState(good) {
    var sel = $lesson.querySelector('.choice.selected, .tf-btn.selected');
    // for tf/mc, find the chosen button
    var chosen = $lesson.querySelector('[data-val="' + cssEscape(session.selected) + '"]');
    if (chosen) chosen.classList.add(good ? 'right' : 'wrong');
    // disable all answer buttons
    Array.prototype.forEach.call($lesson.querySelectorAll('.choice, .tf-btn, .key'), function (b) { b.disabled = true; });
    var input = document.getElementById('answerInput'); if (input) input.disabled = true;
    if (!good) {
      var correctBtn = $lesson.querySelector('[data-val="' + cssEscape(answerCanonical()) + '"]');
      if (correctBtn) correctBtn.classList.add('right');
    }
  }
  function answerCanonical() {
    var p = session.current;
    if (p.type === 'mc' || p.type === 'truefalse') return p.answer;
    return p.answer;
  }
  function cssEscape(s) { return String(s).replace(/"/g, '\\"'); }

  function showFeedback(good, msg, p) {
    var foot = document.getElementById('foot');
    var extra = (!good && p && p.type === 'input') ? '<div class="fb-answer">Correct answer: <b>' + pretty(p.answer) + '</b></div>' : '';
    setHTML(foot,
      '<div class="feedback ' + (good ? 'good' : 'bad') + '">' +
        '<div class="fb-title">' + (good ? '✓ ' + 'Correct!' : '✕ Not quite') + '</div>' +
        '<div class="fb-text">' + esc(stripLead(msg)) + '</div>' + extra +
      '</div>' +
      '<button class="continue-btn ' + (good ? 'good' : 'bad') + '" data-action="continue">Continue</button>'
    );
    foot.classList.add('open');
  }
  function stripLead(s) { return s; }

  function setFace(expr) {
    var pip = document.getElementById('qpip');
    if (pip) pip.innerHTML = Mascot.svg(expr, { size: 72 });
  }
  function speakAndShow(text, expr) {
    var b = document.getElementById('bubble');
    if (b) { b.textContent = text; b.classList.add('show'); }
    if (expr) setFace(expr);
    if (state.settings.voice) Voice.speak(text);
  }

  function onHint() {
    if (session.phase !== 'answer') return;
    session.hintTier++;
    var p = session.current;
    Sfx.play('hint');
    setFace('think');
    Voice.hint(p, session.hintTier).then(function (text) {
      var panel = document.getElementById('hintpanel');
      if (panel) {
        panel.hidden = false;
        panel.innerHTML = '<div class="hint-line"><span class="hint-ico">💡</span><span>' + esc(text) + '</span></div>';
      }
      var b = document.getElementById('bubble');
      if (b) { b.textContent = text; b.classList.add('show'); }
      if (state.settings.voice) Voice.speak(text);
      var maxTier = (p.hints || []).length - 1;
      if (session.hintTier >= maxTier) {
        var hb = $lesson.querySelector('.hint-btn');
        if (hb) { hb.disabled = true; hb.textContent = '💡 No more hints'; }
      }
    });
  }

  function onContinue() { renderProblem(); }

  function updateHearts() {
    var h = $lesson.querySelector('.lesson-hearts');
    if (h) h.textContent = '❤️ ' + state.hearts;
  }

  function recordMistake(p) {
    if (!session.lessonRef) {
      // still record for review with its owning lesson
      var owner = PROBLEM_BY_ID[p.id];
      if (owner) state.mistakes.unshift({ lessonId: owner.lesson.id, problemId: p.id });
    } else {
      state.mistakes.unshift({ lessonId: session.lessonRef.lesson.id, problemId: p.id });
    }
    // dedupe + cap
    var seen = {};
    state.mistakes = state.mistakes.filter(function (m) {
      if (seen[m.problemId]) return false; seen[m.problemId] = true; return true;
    }).slice(0, 30);
  }

  function finishLesson() {
    var firstTryCorrect = 0, n = 0;
    Object.keys(session.firstTry).forEach(function (k) { n++; if (session.firstTry[k]) firstTryCorrect++; });
    var pct = n ? Math.round(100 * firstTryCorrect / n) : 100;
    var stars = pct === 100 ? 3 : pct >= 70 ? 2 : 1;

    var bonus = session.isPractice ? 10 : 25;
    var perfect = (pct === 100 && session.heartsLost === 0);
    if (perfect && !session.isPractice) bonus += 15;
    session.xpEarned += bonus;
    state.xp += session.xpEarned;
    state.gems += session.isPractice ? 1 : 3;

    var leveledTo = null;
    var before = levelInfo(state.xp - session.xpEarned).level;
    var after = levelInfo(state.xp).level;
    if (after > before) leveledTo = after;

    if (session.lessonRef) {
      bumpStreak();
      var id = session.lessonRef.lesson.id;
      var prev = state.completed[id];
      if (!prev || stars > prev.stars) state.completed[id] = { stars: stars, bestPct: pct };
      // clear solved mistakes from this lesson
      state.mistakes = state.mistakes.filter(function (m) { return !session.firstTry.hasOwnProperty(m.problemId) || !session.firstTry[m.problemId]; });
    } else {
      bumpStreak();
    }
    save();

    Sfx.play(leveledTo ? 'levelup' : 'complete');
    burstConfetti();
    renderCelebrate(stars, pct, perfect, leveledTo);
  }

  function renderCelebrate(stars, pct, perfect, leveledTo) {
    var msg = perfect ? 'Perfect! Not a single slip — incredible.' :
      pct === 100 ? 'Flawless finish! You nailed every one.' :
      stars === 2 ? 'Great work — you\'re really getting it.' :
      'Lesson complete! Practice makes it stick.';
    speakAndShowVoice(msg);
    setHTML($lesson,
      '<div class="celebrate">' +
        '<div class="cel-pip">' + Mascot.svg('celebrate', { size: 120 }) + '</div>' +
        '<h2 class="cel-title">' + (leveledTo ? 'Level ' + leveledTo + '! 🎉' : 'Lesson Complete!') + '</h2>' +
        '<div class="cel-stars">' +
          [0, 1, 2].map(function (i) { return '<span class="cel-star ' + (i < stars ? 'on' : '') + '" style="animation-delay:' + (i * 0.15) + 's">★</span>'; }).join('') +
        '</div>' +
        '<div class="cel-msg">' + esc(msg) + '</div>' +
        '<div class="cel-stats">' +
          celStat('+' + session.xpEarned, 'XP', '#FFC83D') +
          celStat(pct + '%', 'Accuracy', '#3DDC84') +
          celStat('🔥 ' + state.streak, 'Streak', '#FF9F1C') +
        '</div>' +
        '<button class="btn btn-primary btn-3d cel-cta" data-action="finish-lesson">Continue</button>' +
        (session.lessonRef ? '<button class="btn btn-ghost" data-action="replay-lesson">Practice again</button>' : '') +
      '</div>'
    );
  }
  function speakAndShowVoice(text) { if (state.settings.voice) Voice.speak(text); }
  function celStat(num, label, color) {
    return '<div class="cel-stat" style="--c:' + color + '"><div class="cel-stat-num">' + num + '</div><div class="cel-stat-label">' + label + '</div></div>';
  }

  /* ---------- confetti ---------- */
  function burstConfetti() {
    if (!state.settings.motion) return;
    var cv = document.getElementById('confetti');
    cv.hidden = false;
    var ctx = cv.getContext('2d');
    cv.width = window.innerWidth; cv.height = window.innerHeight;
    var colors = ['#7C5CFC', '#22D3EE', '#3DDC84', '#FFC83D', '#FF5C7A', '#A78BFA'];
    var parts = [];
    for (var i = 0; i < 140; i++) {
      parts.push({
        x: cv.width / 2 + (Math.random() - 0.5) * 120, y: cv.height / 3,
        vx: (Math.random() - 0.5) * 9, vy: Math.random() * -10 - 4,
        g: 0.28 + Math.random() * 0.15, s: 5 + Math.random() * 7,
        c: colors[i % colors.length], r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.5, life: 0
      });
    }
    var frames = 0;
    (function tick() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      frames++;
      parts.forEach(function (p) {
        p.vy += p.g; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6); ctx.restore();
      });
      if (frames < 140) requestAnimationFrame(tick);
      else { ctx.clearRect(0, 0, cv.width, cv.height); cv.hidden = true; }
    })();
  }

  /* ---------- "choose where to start" picker ---------- */
  function openStartPicker() {
    var rows = CURR.map(function (world) {
      var first = world.units[0].lessons[0];
      var expanded = pickerExpanded === world.id;
      var wp = worldProgress(world);
      var units = '';
      if (expanded) {
        units = '<div class="pick-units">' + world.units.map(function (u) {
          var ul = u.lessons[0];
          return '<div class="pick-unit"><span class="pick-unit-name">' + esc(u.title) + '</span>' +
            '<button class="pick-unit-go" data-action="pick-start" data-lesson="' + ul.id + '">Start ▶</button></div>';
        }).join('') + '</div>';
      }
      return '<div class="pick-world' + (expanded ? ' open' : '') + '" style="--world:' + world.color + '">' +
        '<div class="pick-world-head" data-action="expand-world" data-world="' + world.id + '">' +
          '<span class="pick-emoji">' + world.icon + '</span>' +
          '<span class="pick-meta"><span class="pick-name">' + esc(world.title) + '</span>' +
            '<span class="pick-sub">' + esc(world.subtitle) + (wp.done ? ' · ' + wp.done + '/' + wp.total + ' done' : '') + '</span></span>' +
          '<span class="pick-caret">' + (expanded ? '▾' : '▸') + '</span>' +
          '<button class="pick-go" data-action="pick-start" data-lesson="' + first.id + '">Start ▶</button>' +
        '</div>' + units +
      '</div>';
    }).join('');
    openModal(
      '<div class="modal-head"><h2>Where to start? 🚀</h2><button class="icon-btn" data-action="close-modal">✕</button></div>' +
      '<p class="muted picker-sub">Jump in anywhere — Pip meets you there. Tap a world to begin, or expand it (▸) to pick a specific topic. You can always go back to earlier worlds.</p>' +
      '<div class="picker-list">' + rows + '</div>'
    );
  }

  function pickStart(lessonId) {
    var ref = LESSON_BY_ID[lessonId];
    if (!ref) return;
    state.onboarded = true;
    state.jumpUnlocks[lessonId] = true;
    save();
    closeModal();
    Sfx.unlock();
    route = 'home';
    render();
    toast('Starting in ' + ref.world.title + '! 🚀');
    startLesson(lessonId);
  }

  /* ---------- settings & modals ---------- */
  function openSettings() {
    var voices = Voice.listVoices();
    var opts = '<option value="">Auto (recommended)</option>' + voices.map(function (v) {
      return '<option value="' + esc(v.name) + '"' + (state.settings.voiceName === v.name ? ' selected' : '') + '>' + esc(v.name) + ' (' + esc(v.lang) + ')</option>';
    }).join('');
    openModal(
      '<div class="modal-head"><h2>Settings</h2><button class="icon-btn" data-action="close-modal">✕</button></div>' +
      toggle('voice', 'Pip\'s voice', state.settings.voice) +
      '<div class="setting-row"><label>Voice</label><select class="select" data-setting="voiceName">' + opts + '</select></div>' +
      slider('rate', 'Speaking speed', state.settings.rate, 0.6, 1.4, 0.05) +
      slider('pitch', 'Voice pitch', state.settings.pitch, 0.6, 1.6, 0.05) +
      '<div class="setting-row"><span></span><button class="btn btn-3d" data-action="test-voice">▶ Test Pip\'s voice</button></div>' +
      '<hr class="sep">' +
      toggle('sfx', 'Sound effects', state.settings.sfx) +
      toggle('motion', 'Animations & confetti', state.settings.motion)
    );
  }
  function toggle(key, label, on) {
    return '<div class="setting-row"><label>' + label + '</label>' +
      '<button class="switch' + (on ? ' on' : '') + '" data-action="toggle" data-key="' + key + '"><span class="knob"></span></button></div>';
  }
  function slider(key, label, val, min, max, step) {
    return '<div class="setting-row"><label>' + label + '</label>' +
      '<input type="range" class="slider" data-setting="' + key + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"></div>';
  }

  function openModal(html) { setHTML($modal, '<div class="modal">' + html + '</div>'); $modal.hidden = false; }
  function closeModal() { $modal.hidden = true; setHTML($modal, ''); }

  function applyVoiceSettings() {
    Voice.configure({ enabled: state.settings.voice, voiceName: state.settings.voiceName, rate: state.settings.rate, pitch: state.settings.pitch });
    Sfx.setEnabled(state.settings.sfx);
  }

  /* ---------- toast ---------- */
  var toastTimer = null;
  function toast(msg) {
    $toast.textContent = msg; $toast.hidden = false; $toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { $toast.classList.remove('show'); setTimeout(function () { $toast.hidden = true; }, 250); }, 2200);
  }

  /* ===================================================================
     EVENT DELEGATION
     =================================================================== */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-action]');
    if (!t) return;
    var a = t.getAttribute('data-action');

    if (a === 'route') { route = t.getAttribute('data-route'); Sfx.play('tap'); render(); }
    else if (a === 'start') { startLesson(t.getAttribute('data-lesson')); }
    else if (a === 'jump') {
      var lid = t.getAttribute('data-lesson');
      state.jumpUnlocks[lid] = true; save(); Sfx.play('select');
      toast('Jumped ahead — good luck! 🚀'); startLesson(lid);
    }
    else if (a === 'open-picker') { Sfx.play('tap'); openStartPicker(); }
    else if (a === 'expand-world') {
      var wid = t.getAttribute('data-world');
      pickerExpanded = (pickerExpanded === wid) ? null : wid;
      Sfx.play('tap'); openStartPicker();
    }
    else if (a === 'pick-start') { pickStart(t.getAttribute('data-lesson')); }
    else if (a === 'choose') { onChoose(t.getAttribute('data-val'), t); }
    else if (a === 'key') { onKey(t.getAttribute('data-key')); }
    else if (a === 'check') { doCheck(); }
    else if (a === 'hint') { onHint(); }
    else if (a === 'continue') { onContinue(); }
    else if (a === 'quit-lesson') { quitLesson(); }
    else if (a === 'finish-lesson') { closePlayer(); route = 'home'; render(); }
    else if (a === 'replay-lesson') { var r = session.lessonRef; closePlayer(); startLesson(r.lesson.id); }
    else if (a === 'daily') { runDaily(); }
    else if (a === 'review') { runReview(); }
    else if (a === 'settings') { openSettings(); }
    else if (a === 'close-modal') { closeModal(); }
    else if (a === 'test-voice') { Voice.configure({ enabled: true }); Voice.speak('Hi! I\'m Pip. Let\'s solve some math together!'); }
    else if (a === 'toggle') { toggleSetting(t.getAttribute('data-key'), t); }
    else if (a === 'hearts') { tapHearts(); }
    else if (a === 'reset') { confirmReset(); }
  });

  document.addEventListener('change', function (e) {
    var s = e.target.getAttribute && e.target.getAttribute('data-setting');
    if (!s) return;
    var v = e.target.value;
    if (s === 'rate' || s === 'pitch') v = parseFloat(v);
    state.settings[s] = v;
    applyVoiceSettings(); save();
  });
  document.addEventListener('input', function (e) {
    var s = e.target.getAttribute && e.target.getAttribute('data-setting');
    if (s === 'rate' || s === 'pitch') { state.settings[s] = parseFloat(e.target.value); applyVoiceSettings(); }
  });

  function toggleSetting(key, btn) {
    state.settings[key] = !state.settings[key];
    btn.classList.toggle('on', state.settings[key]);
    applyVoiceSettings(); applyMotion(); save();
    if (key === 'voice' && state.settings.voice) Voice.speak('Voice on!');
  }

  function tapHearts() {
    refreshHearts();
    if (state.hearts >= HEART_MAX) { toast('Hearts are full ❤️'); return; }
    if (state.gems >= 50) {
      openModal('<div class="modal-head"><h2>Refill hearts?</h2><button class="icon-btn" data-action="close-modal">✕</button></div>' +
        '<p class="muted">Spend 50 💎 to refill to ' + HEART_MAX + ' hearts.</p>' +
        '<div class="setting-row"><span></span><button class="btn btn-primary btn-3d" data-action="buy-hearts">Refill (50 💎)</button></div>');
    } else {
      var mins = state.heartsRegenAt ? Math.max(1, Math.ceil((state.heartsRegenAt - Date.now()) / 60000)) : 0;
      toast(mins ? 'Next heart in ~' + mins + ' min' : 'Earn gems by finishing lessons');
    }
  }

  function quitLesson() {
    if (session && clearedCount() > 0 && session.queue.length) {
      openModal('<div class="modal-head"><h2>Quit lesson?</h2><button class="icon-btn" data-action="close-modal">✕</button></div>' +
        '<p class="muted">Your progress in this lesson won\'t be saved.</p>' +
        '<div class="profile-actions"><button class="btn btn-ghost" data-action="close-modal">Keep going</button>' +
        '<button class="btn btn-3d danger" data-action="confirm-quit">Quit</button></div>');
    } else { closePlayer(); render(); }
  }

  function confirmReset() {
    openModal('<div class="modal-head"><h2>Reset everything?</h2><button class="icon-btn" data-action="close-modal">✕</button></div>' +
      '<p class="muted">This wipes all XP, streaks, hearts and progress. Can\'t be undone.</p>' +
      '<div class="profile-actions"><button class="btn btn-ghost" data-action="close-modal">Cancel</button>' +
      '<button class="btn btn-3d danger" data-action="do-reset">Reset</button></div>');
  }

  // secondary actions added via delegation (declared here to keep one listener)
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-action]');
    if (!t) return;
    var a = t.getAttribute('data-action');
    if (a === 'buy-hearts') { state.gems -= 50; refillHearts(); save(); Sfx.play('heart'); closeModal(); render(); toast('Hearts refilled!'); }
    else if (a === 'confirm-quit') { closeModal(); closePlayer(); render(); }
    else if (a === 'do-reset') { state = JSON.parse(JSON.stringify(DEFAULTS)); save(); closeModal(); applyVoiceSettings(); applyMotion(); route = 'home'; render(); toast('Fresh start!'); }
  });

  function runDaily() {
    var pool = [];
    FLAT.forEach(function (ref) { if (isUnlocked(ref)) pool = pool.concat(ref.lesson.problems || []); });
    startSynthetic(shuffle(pool).slice(0, 8), { title: 'Daily Challenge', intro: 'Daily challenge time! A mix of everything you\'ve unlocked. Ready?' });
  }
  function runReview() {
    var probs = [];
    state.mistakes.forEach(function (m) { var rec = PROBLEM_BY_ID[m.problemId]; if (rec) probs.push(rec.problem); });
    startSynthetic(probs.slice(0, 10), { title: 'Review', intro: 'Let\'s clean up the tricky ones. You\'ve got this!' });
  }

  /* ---------- boot ---------- */
  function boot() {
    applyMotion();
    applyVoiceSettings();
    refreshHearts();
    if (!state.onboarded) { renderWelcome(); }
    else { render(); }
  }

  function renderWelcome() {
    $hud.hidden = true; $tabbar.hidden = true;
    setHTML($screen,
      '<div class="welcome">' +
        '<div class="welcome-pip">' + Mascot.svg('wave', { size: 150 }) + '</div>' +
        '<h1 class="brand-word">Numble</h1>' +
        '<p class="brand-tag">Level up your math — from counting to calculus.</p>' +
        '<p class="welcome-lead">Hi, I\'m <b>Pip</b>! I\'ll guide you, cheer you on, and whisper hints when you\'re stuck. We\'ll start with the basics and climb all the way up together.</p>' +
        '<button class="btn btn-primary btn-3d big" data-action="begin">Start from the beginning ✨</button>' +
        '<button class="btn btn-ghost" data-action="open-picker">🧭 Choose where to start →</button>' +
      '</div>'
    );
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-action]');
    if (!t) return;
    var a = t.getAttribute('data-action');
    if (a === 'begin' || a === 'begin-quiet') {
      state.onboarded = true; save(); Sfx.unlock();
      if (a === 'begin') { Voice.speak('Welcome to Numble! Tap the first lesson and let\'s go.'); }
      route = 'home'; render();
      var cur = currentRef();
      if (cur) toast('Tap ' + cur.lesson.title + ' to begin!');
    }
  });

  // keep confetti canvas sized
  window.addEventListener('resize', function () {
    var cv = document.getElementById('confetti');
    if (cv && !cv.hidden) { cv.width = window.innerWidth; cv.height = window.innerHeight; }
  });

  boot();
  window.Numble = { state: function () { return state; }, save: save, reset: function () { state = JSON.parse(JSON.stringify(DEFAULTS)); save(); boot(); } };
})();
