/* =====================================================================
   Pip — the Numble mascot & AI voice tutor character.
   Pure inline SVG so it scales crisply and needs zero image assets.
   Mascot.svg(expression, opts) -> SVG markup string.
   Expressions: idle | happy | think | celebrate | oops | wave
   ===================================================================== */
(function () {
  'use strict';

  // Facial feature sets per expression. Body stays constant; we swap eyes/mouth/extras.
  function eyes(expr) {
    switch (expr) {
      case 'happy':
      case 'wave':
        // closed-happy upward arcs ^ ^
        return '' +
          '<path d="M31 47 q7 -9 14 0" class="pip-stroke" />' +
          '<path d="M55 47 q7 -9 14 0" class="pip-stroke" />';
      case 'celebrate':
        // sparkly star eyes
        return star(38, 46, 8) + star(62, 46, 8);
      case 'think':
        // pupils glancing up + a raised brow
        return '' +
          '<ellipse cx="38" cy="46" rx="8.5" ry="9.5" fill="#fff"/>' +
          '<ellipse cx="62" cy="46" rx="8.5" ry="9.5" fill="#fff"/>' +
          '<circle cx="39" cy="42" r="3.6" fill="#10142F"/>' +
          '<circle cx="63" cy="42" r="3.6" fill="#10142F"/>' +
          '<circle cx="37.6" cy="40.8" r="1.2" fill="#fff"/>' +
          '<circle cx="61.6" cy="40.8" r="1.2" fill="#fff"/>' +
          '<path d="M55 36 q7 -3 14 1" class="pip-stroke" />';
      case 'oops':
        return '' +
          '<ellipse cx="38" cy="47" rx="8" ry="9" fill="#fff"/>' +
          '<ellipse cx="62" cy="47" rx="8" ry="9" fill="#fff"/>' +
          '<circle cx="38" cy="49" r="3.4" fill="#10142F"/>' +
          '<circle cx="62" cy="49" r="3.4" fill="#10142F"/>';
      case 'idle':
      default:
        return '' +
          '<ellipse cx="38" cy="46" rx="8.5" ry="9.5" fill="#fff"/>' +
          '<ellipse cx="62" cy="46" rx="8.5" ry="9.5" fill="#fff"/>' +
          '<circle cx="39" cy="47" r="3.8" fill="#10142F"/>' +
          '<circle cx="63" cy="47" r="3.8" fill="#10142F"/>' +
          '<circle cx="37.6" cy="45.4" r="1.3" fill="#fff"/>' +
          '<circle cx="61.6" cy="45.4" r="1.3" fill="#fff"/>';
    }
  }

  function mouth(expr) {
    switch (expr) {
      case 'happy':
      case 'wave':
        return '<path d="M40 62 q10 12 20 0 q-10 4 -20 0 z" fill="#10142F"/>' +
               '<path d="M46 68 q4 4 8 0 z" fill="#FF7E9D"/>';
      case 'celebrate':
        return '<path d="M38 60 q12 16 24 0 q-12 7 -24 0 z" fill="#10142F"/>' +
               '<path d="M45 69 q5 5 10 0 z" fill="#FF7E9D"/>';
      case 'think':
        return '<circle cx="50" cy="64" r="3.2" fill="#10142F"/>';
      case 'oops':
        return '<path d="M42 66 q8 -7 16 0" class="pip-stroke" />';
      case 'idle':
      default:
        return '<path d="M41 61 q9 8 18 0" class="pip-stroke" />';
    }
  }

  // Little extras (sweat drop on oops, thought sparkle, etc.)
  function extras(expr) {
    if (expr === 'oops') {
      return '<path d="M76 34 q4 7 0 10 a4 4 0 1 1 0 -10 z" fill="#7FE3FF" opacity="0.9"/>';
    }
    if (expr === 'think') {
      return '<text x="78" y="26" font-size="16" fill="#FFD66B" font-family="Fredoka, sans-serif">?</text>';
    }
    if (expr === 'celebrate') {
      return sparkle(18, 24) + sparkle(82, 30) + sparkle(20, 70);
    }
    return '';
  }

  function star(cx, cy, r) {
    var pts = [];
    for (var i = 0; i < 10; i++) {
      var ang = (Math.PI / 5) * i - Math.PI / 2;
      var rad = i % 2 === 0 ? r : r * 0.45;
      pts.push((cx + rad * Math.cos(ang)).toFixed(1) + ',' + (cy + rad * Math.sin(ang)).toFixed(1));
    }
    return '<polygon points="' + pts.join(' ') + '" fill="#FFD66B"/>';
  }

  function sparkle(cx, cy) {
    return '<path d="M' + cx + ' ' + (cy - 6) + ' q1.5 4.5 6 6 q-4.5 1.5 -6 6 q-1.5 -4.5 -6 -6 q4.5 -1.5 6 -6 z" fill="#FFD66B" opacity="0.95"/>';
  }

  /**
   * Build Pip.
   * @param {string} expr  expression name
   * @param {object} opts  { size, glow, anim }
   */
  function svg(expr, opts) {
    opts = opts || {};
    var size = opts.size || 96;
    var glow = opts.glow !== false;
    var animClass = opts.anim === false ? '' : ' pip-anim';
    var blink = (expr === 'idle' && opts.anim !== false) ? ' pip-blink' : '';

    return '' +
      '<svg class="pip' + animClass + '" width="' + size + '" height="' + size + '" viewBox="0 0 100 100" ' +
      'role="img" aria-label="Pip the math sprite" xmlns="http://www.w3.org/2000/svg">' +
        '<defs>' +
          '<radialGradient id="pipBody" cx="42%" cy="32%" r="75%">' +
            '<stop offset="0%" stop-color="#7CF2FF"/>' +
            '<stop offset="52%" stop-color="#27C6F2"/>' +
            '<stop offset="100%" stop-color="#6C5CE7"/>' +
          '</radialGradient>' +
          '<radialGradient id="pipGlow" cx="50%" cy="50%" r="50%">' +
            '<stop offset="0%" stop-color="#5BE8FF" stop-opacity="0.55"/>' +
            '<stop offset="100%" stop-color="#5BE8FF" stop-opacity="0"/>' +
          '</radialGradient>' +
        '</defs>' +
        (glow ? '<circle cx="50" cy="52" r="46" fill="url(#pipGlow)" class="pip-halo"/>' : '') +
        // little star tuft / antenna
        '<line x1="50" y1="22" x2="50" y2="9" stroke="#6C5CE7" stroke-width="3" stroke-linecap="round"/>' +
        star(50, 8, 6) +
        // body
        '<circle cx="50" cy="53" r="33" fill="url(#pipBody)"/>' +
        '<ellipse cx="40" cy="38" rx="13" ry="9" fill="#fff" opacity="0.22"/>' +
        // cheeks
        '<ellipse cx="28" cy="58" rx="5" ry="3.4" fill="#FF8FB0" opacity="0.6"/>' +
        '<ellipse cx="72" cy="58" rx="5" ry="3.4" fill="#FF8FB0" opacity="0.6"/>' +
        // face
        '<g class="pip-face' + blink + '">' + eyes(expr) + mouth(expr) + '</g>' +
        extras(expr) +
      '</svg>';
  }

  window.Mascot = { svg: svg };
})();
