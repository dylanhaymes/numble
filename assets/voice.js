/* =====================================================================
   Voice — Pip's AI voice tutor.

   Two voices:
   - PREMIUM (ChatGPT-style): OpenAI neural TTS (voices like "nova"/"shimmer").
     Requires the user's own OpenAI API key, stored ONLY on this device
     (localStorage). Audio is cached per line so repeats are instant/free.
   - FREE fallback: the browser's SpeechSynthesis, with the best available
     natural voice auto-selected.

   The premium path is what makes Pip sound warm and human. The free path
   always works offline with no key.

   Optional global overrides still honored: window.NUMBLE_TTS (custom TTS)
   and window.NUMBLE_AI_HINT (dynamic hints).
   ===================================================================== */
(function () {
  'use strict';

  var synth = window.speechSynthesis || null;
  var settings = {
    enabled: true,
    voiceName: null,           // preferred browser voice
    rate: 1.0,
    pitch: 1.06,
    volume: 1.0,
    premium: false,            // use OpenAI neural voice
    openaiKey: '',             // user's key (device-only)
    openaiVoice: 'nova',       // nova/shimmer/coral/alloy/echo/fable/onyx/sage
    openaiModel: 'gpt-4o-mini-tts'
  };
  var voices = [];

  function loadVoices() { if (synth) voices = synth.getVoices() || []; }
  if (synth) { loadVoices(); if (typeof synth.onvoiceschanged !== 'undefined') synth.onvoiceschanged = loadVoices; }

  // Prefer natural/neural voices; warm English female by default.
  function pickVoice() {
    if (!voices.length) loadVoices();
    if (settings.voiceName) {
      var named = voices.find(function (v) { return v.name === settings.voiceName; });
      if (named) return named;
    }
    var prefer = [
      'Google US English', 'Microsoft Aria', 'Microsoft Jenny', 'Microsoft Ava', 'Microsoft Emma',
      'Samantha', 'Google UK English Female', 'Microsoft Michelle', 'Microsoft Zira', 'Natural'
    ];
    for (var i = 0; i < prefer.length; i++) {
      var hit = voices.find(function (v) { return v.name.indexOf(prefer[i]) !== -1; });
      if (hit) return hit;
    }
    var en = voices.find(function (v) { return /^en(-|_)/i.test(v.lang); });
    return en || voices[0] || null;
  }

  // Make math text sound natural when spoken.
  function speakable(text) {
    return String(text)
      .replace(/\bsqrt\(([^)]*)\)/gi, 'the square root of $1')
      .replace(/\^2\b/g, ' squared').replace(/\^3\b/g, ' cubed')
      .replace(/\^(-?\d+)/g, ' to the power of $1')
      .replace(/(\d)\s*\/\s*(\d)/g, '$1 over $2')
      .replace(/\bpi\b/gi, 'pie')
      .replace(/×/g, ' times ').replace(/÷/g, ' divided by ').replace(/\*/g, ' times ')
      .replace(/≥/g, ' greater than or equal to ').replace(/≤/g, ' less than or equal to ').replace(/≠/g, ' not equal to ')
      .replace(/\s+/g, ' ').trim();
  }

  var currentAudio = null;   // premium <audio>
  var audioCache = {};       // key -> objectURL

  function stop() {
    try { if (synth) synth.cancel(); } catch (e) {}
    if (currentAudio) { try { currentAudio.pause(); } catch (e) {} currentAudio = null; }
  }

  function speakOpenAI(text) {
    var key = settings.openaiKey;
    if (!key) return Promise.reject(new Error('no key'));
    var cacheKey = settings.openaiVoice + '|' + settings.openaiModel + '|' + text;

    function play(url) {
      return new Promise(function (resolve) {
        var audio = new Audio(url);
        audio.volume = settings.volume;
        audio.playbackRate = Math.max(0.75, Math.min(1.4, settings.rate));
        currentAudio = audio;
        audio.onended = function () { if (currentAudio === audio) currentAudio = null; resolve(); };
        audio.onerror = function () { resolve(); };
        audio.play().catch(function () { resolve(); });
      });
    }

    if (audioCache[cacheKey]) return play(audioCache[cacheKey]);

    var body = {
      model: settings.openaiModel,
      voice: settings.openaiVoice,
      input: speakable(text),
      response_format: 'mp3'
    };
    // gpt-4o-mini-tts accepts a tone instruction
    if (/mini-tts/.test(settings.openaiModel)) {
      body.instructions = 'You are Pip, a warm, upbeat, encouraging math tutor for a learner of any age. Speak clearly and kindly, with gentle energy — never robotic or condescending.';
    }
    return fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(function (r) {
      if (!r.ok) throw new Error('tts ' + r.status);
      return r.blob();
    }).then(function (blob) {
      var url = URL.createObjectURL(blob);
      audioCache[cacheKey] = url;
      return play(url);
    });
  }

  function speakBrowser(text, opts) {
    if (!synth) return Promise.resolve();
    if (opts.interrupt !== false) { try { synth.cancel(); } catch (e) {} }
    return new Promise(function (resolve) {
      var u = new SpeechSynthesisUtterance(speakable(text));
      var v = pickVoice(); if (v) u.voice = v;
      u.rate = settings.rate; u.pitch = settings.pitch; u.volume = settings.volume;
      u.onend = function () { resolve(); };
      u.onerror = function () { resolve(); };
      try { synth.speak(u); } catch (e) { resolve(); }
    });
  }

  /**
   * Speak text aloud (if enabled). Resolves when done.
   */
  function speak(text, opts) {
    opts = opts || {};
    if (!settings.enabled || !text) return Promise.resolve();
    if (opts.interrupt !== false) stop();

    if (typeof window.NUMBLE_TTS === 'function') {
      try { return Promise.resolve(window.NUMBLE_TTS(text)); } catch (e) {}
    }
    if (settings.premium && settings.openaiKey) {
      return speakOpenAI(text).catch(function () { return speakBrowser(text, opts); });
    }
    return speakBrowser(text, opts);
  }

  function hint(problem, tier, history) {
    if (typeof window.NUMBLE_AI_HINT === 'function') {
      return Promise.resolve(window.NUMBLE_AI_HINT({ prompt: problem.prompt, history: history || [] }))
        .catch(function () { return fallbackHint(problem, tier); });
    }
    return Promise.resolve(fallbackHint(problem, tier));
  }
  function fallbackHint(problem, tier) {
    var hints = problem.hints || [];
    if (!hints.length) return "Try breaking it into smaller steps — what's the very first thing you know?";
    return hints[Math.min(tier, hints.length - 1)];
  }

  // Quick test that also surfaces key/CORS problems to the caller.
  function testPremium() {
    if (!settings.openaiKey) return Promise.reject(new Error('Enter your OpenAI API key first.'));
    return speakOpenAI("Hi! I'm Pip. This is my new voice — let's do some math together!");
  }

  window.Voice = {
    speak: speak,
    stop: stop,
    hint: hint,
    testPremium: testPremium,
    listVoices: function () { if (!voices.length) loadVoices(); return voices.slice(); },
    configure: function (o) { Object.assign(settings, o || {}); },
    settings: settings
  };
})();
