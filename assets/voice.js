/* =====================================================================
   Voice — Pip's AI voice tutor.

   Speaks lesson intros, hints, and feedback aloud using the browser's
   built-in SpeechSynthesis (no API key, works offline). The text is
   always shown in Pip's speech bubble too, so muted users miss nothing.

   UPGRADE HOOK: set window.NUMBLE_TTS = async (text) => { ...play audio... }
   and Voice will use that premium voice instead of the browser one.
   Likewise window.NUMBLE_AI_HINT = async ({prompt, history}) => "hint text"
   lets a real model generate dynamic hints; otherwise the lesson's
   authored tiered hints are used.
   ===================================================================== */
(function () {
  'use strict';

  var synth = window.speechSynthesis || null;
  var settings = { enabled: true, voiceName: null, rate: 1.0, pitch: 1.06, volume: 1.0 };
  var voices = [];

  function loadVoices() { if (synth) voices = synth.getVoices() || []; }
  if (synth) {
    loadVoices();
    if (typeof synth.onvoiceschanged !== 'undefined') synth.onvoiceschanged = loadVoices;
  }

  // Pick a pleasant English voice. Prefer named "nice" voices, then any en.
  function pickVoice() {
    if (!voices.length) loadVoices();
    if (settings.voiceName) {
      var named = voices.find(function (v) { return v.name === settings.voiceName; });
      if (named) return named;
    }
    var prefer = ['Google US English', 'Microsoft Aria', 'Microsoft Jenny', 'Samantha', 'Google UK English Female', 'Microsoft Zira'];
    for (var i = 0; i < prefer.length; i++) {
      var hit = voices.find(function (v) { return v.name.indexOf(prefer[i]) !== -1; });
      if (hit) return hit;
    }
    var en = voices.find(function (v) { return /^en(-|_)/i.test(v.lang); });
    return en || voices[0] || null;
  }

  // Make math text sound natural when spoken aloud.
  function speakable(text) {
    return String(text)
      .replace(/\bsqrt\(([^)]*)\)/gi, 'the square root of $1')
      .replace(/\^2\b/g, ' squared')
      .replace(/\^3\b/g, ' cubed')
      .replace(/\^(-?\d+)/g, ' to the power of $1')
      .replace(/(\d)\s*\/\s*(\d)/g, '$1 over $2')
      .replace(/\bpi\b/gi, 'pie')
      .replace(/×/g, ' times ').replace(/÷/g, ' divided by ')
      .replace(/≥/g, ' greater than or equal to ').replace(/≤/g, ' less than or equal to ')
      .replace(/≠/g, ' not equal to ')
      .replace(/\*/g, ' times ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  var current = null;

  function stop() {
    try { if (synth) synth.cancel(); } catch (e) {}
    current = null;
  }

  /**
   * Speak text aloud (if enabled). Returns a promise that resolves when done.
   * opts.interrupt (default true) stops any current speech first.
   */
  function speak(text, opts) {
    opts = opts || {};
    if (!settings.enabled || !text) return Promise.resolve();

    // Premium TTS hook wins if present.
    if (typeof window.NUMBLE_TTS === 'function') {
      try { return Promise.resolve(window.NUMBLE_TTS(text)); } catch (e) { /* fall through */ }
    }
    if (!synth) return Promise.resolve();

    if (opts.interrupt !== false) stop();
    return new Promise(function (resolve) {
      var u = new SpeechSynthesisUtterance(speakable(text));
      var v = pickVoice();
      if (v) u.voice = v;
      u.rate = settings.rate;
      u.pitch = settings.pitch;
      u.volume = settings.volume;
      u.onend = function () { current = null; resolve(); };
      u.onerror = function () { current = null; resolve(); };
      current = u;
      try { synth.speak(u); } catch (e) { resolve(); }
    });
  }

  /**
   * Ask Pip for a hint. Uses the optional AI hook if configured, otherwise
   * returns the authored tiered hint at `tier` (0-based).
   */
  function hint(problem, tier, history) {
    if (typeof window.NUMBLE_AI_HINT === 'function') {
      return Promise.resolve(window.NUMBLE_AI_HINT({ prompt: problem.prompt, history: history || [] }))
        .catch(function () { return fallbackHint(problem, tier); });
    }
    return Promise.resolve(fallbackHint(problem, tier));
  }

  function fallbackHint(problem, tier) {
    var hints = problem.hints || [];
    if (!hints.length) return "Try breaking the problem into smaller steps — what's the very first thing you know?";
    return hints[Math.min(tier, hints.length - 1)];
  }

  window.Voice = {
    speak: speak,
    stop: stop,
    hint: hint,
    listVoices: function () { if (!voices.length) loadVoices(); return voices.slice(); },
    configure: function (o) { Object.assign(settings, o || {}); },
    settings: settings
  };
})();
