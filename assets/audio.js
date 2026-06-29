/* =====================================================================
   Sfx — tiny WebAudio sound engine. All sounds are synthesized at
   runtime (no audio files). Respects the user's "sound" setting.
   ===================================================================== */
(function () {
  'use strict';

  var ctx = null;
  var enabled = true;

  function ac() {
    if (!ctx) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // One beep with an ADSR-ish envelope.
  function tone(freq, start, dur, type, gain) {
    var a = ac();
    if (!a) return;
    var osc = a.createOscillator();
    var g = a.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, a.currentTime + start);
    var peak = gain == null ? 0.18 : gain;
    g.gain.setValueAtTime(0.0001, a.currentTime + start);
    g.gain.exponentialRampToValueAtTime(peak, a.currentTime + start + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + start + dur);
    osc.connect(g);
    g.connect(a.destination);
    osc.start(a.currentTime + start);
    osc.stop(a.currentTime + start + dur + 0.02);
  }

  function chord(freqs, start, dur, type, gain) {
    for (var i = 0; i < freqs.length; i++) tone(freqs[i], start, dur, type, gain);
  }

  var SOUNDS = {
    tap: function () { tone(420, 0, 0.08, 'triangle', 0.10); },
    select: function () { tone(560, 0, 0.07, 'sine', 0.10); },
    correct: function () {
      // bright rising arpeggio
      tone(659, 0.0, 0.12, 'triangle', 0.16);
      tone(784, 0.08, 0.12, 'triangle', 0.16);
      tone(1047, 0.16, 0.22, 'triangle', 0.16);
    },
    wrong: function () {
      tone(196, 0.0, 0.18, 'sawtooth', 0.12);
      tone(150, 0.10, 0.24, 'sawtooth', 0.10);
    },
    hint: function () { tone(880, 0, 0.10, 'sine', 0.10); tone(1175, 0.09, 0.14, 'sine', 0.10); },
    star: function () { tone(1318, 0, 0.10, 'triangle', 0.14); tone(1760, 0.07, 0.16, 'triangle', 0.12); },
    levelup: function () {
      chord([523, 659, 784], 0.0, 0.18, 'triangle', 0.13);
      chord([659, 784, 988], 0.16, 0.18, 'triangle', 0.13);
      chord([784, 988, 1319], 0.32, 0.4, 'triangle', 0.14);
    },
    complete: function () {
      tone(784, 0.0, 0.14, 'triangle', 0.15);
      tone(988, 0.12, 0.14, 'triangle', 0.15);
      tone(1319, 0.24, 0.34, 'triangle', 0.16);
    },
    heart: function () { tone(330, 0, 0.12, 'sine', 0.12); tone(440, 0.08, 0.18, 'sine', 0.12); }
  };

  window.Sfx = {
    setEnabled: function (v) { enabled = !!v; },
    unlock: function () { ac(); }, // call on first user gesture
    play: function (name) {
      if (!enabled) return;
      var fn = SOUNDS[name];
      if (fn) { try { fn(); } catch (e) {} }
    }
  };
})();
