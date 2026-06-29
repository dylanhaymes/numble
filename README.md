# 🌟 Numble — *Level up your math*

A fun, game-like web app for learning math **from kindergarten to college**, with **Pip**, an AI voice tutor who explains ideas, drops tiered hints, and cheers you on. Think Duolingo, but for math.

No build step, no accounts, no internet required (after first load). Just open `index.html`.

## 🌐 Live site
**https://dylanhaymes.github.io/numble/** — hosted on GitHub Pages (HTTPS, CDN, always on). Repo: https://github.com/dylanhaymes/numble. To update it: edit files → `git -C "<this folder>" commit -am "msg" && git push` → Pages rebuilds in ~1 min.

---

## ▶️ How to run it (locally)

**Easiest:** double-click `index.html`. It opens in your browser and just works.

**Best (recommended for saved progress + voice):** serve the folder so the browser treats it as a real site:

```bash
# from inside the Numble folder
python -m http.server 5179
# then open http://localhost:5179
```

Progress saves automatically to your browser. Voice uses your computer's built-in speech (no key needed). Works great in Chrome, Edge, and Safari.

---

## 🎨 The brand

| | |
|---|---|
| **Name** | **Numble** — *number* + *nimble*. Short, friendly, app-store-able. |
| **Tagline** | *Level up your math.* (alt: *From counting to calculus.*) |
| **Mascot / tutor** | **Pip** — a glowing cosmic number-sprite. Patient, witty, always nudges you to *think* instead of handing over the answer. Pip **is** the voice. |
| **Vibe** | Cosmic arcade. A night-sky journey where each math topic is a "world" you explore and climb. |
| **Voice & tone** | Warm, encouraging, a little playful. Celebrates effort, never punishes mistakes — a wrong answer is just "let me show you." |

### Color palette
| Token | Hex | Use |
|---|---|---|
| Night sky | `#0E1130` / `#0A0C24` | Backgrounds |
| Aurora violet (brand) | `#7C5CFC` | Primary buttons, level |
| Pip cyan | `#22D3EE` | Accents, glow, gems |
| Success green | `#3DDC84` | Correct answers, progress |
| Sunshine gold | `#FFC83D` | XP, stars, rewards |
| Coral | `#FF5C7A` | Hearts, wrong answers |
| Streak orange | `#FF9F1C` | Day streak 🔥 |

**Fonts:** *Fredoka* (rounded display) + *Nunito* (body). Loads from Google Fonts online; falls back to system rounded fonts offline.

---

## 🗺️ The curriculum — 12 worlds, 648 questions

Every world progresses easy → hard. Lessons unlock in order (or use **"Jump here"** on any world to test ahead).

1. 🐚 **Counting Cove** — *Kindergarten* — counting, comparing, shapes, patterns
2. ➕ **Addition Atoll** — *Grades 1–2* — add/subtract, number bonds, place value
3. ✖️ **Times Table Temple** — *Grade 3* — multiplication & division, arrays
4. 🍂 **Fraction Forest** — *Grades 4–5* — fractions, equivalence, operations
5. 💧 **Decimal Delta** — *Grades 5–6* — decimals, rounding, money
6. ⛰️ **Ratio Ridge** — *Grades 6–7* — ratios, rates, proportions, percents
7. 🏝️ **Integer Islands** — *Grades 6–7* — negatives, absolute value, coordinate plane, PEMDAS
8. 🧭 **Algebra Archipelago** — *Pre-Algebra & Algebra 1* — variables, equations, slope
9. 📐 **Geometry Gorge** — *Geometry* — angles, area, Pythagoras, volume
10. ⛏️ **Quadratic Quarry** — *Algebra 2* — exponents, polynomials, factoring, quadratics
11. 🗼 **Trig Tower** — *Trig & Precalc* — SOH-CAH-TOA, unit circle, logs
12. 🏔️ **Calculus Canyon** — *College Calculus* — limits, derivatives, integrals

*All 648 problems were authored and then fact-checked by a second pass — every multiple-choice answer is in its choices, every true/false is valid, every problem has 3 tiered hints.*

---

## 🎮 Game features

- **Winding learning path** with lesson nodes — complete one to unlock the next.
- **Pip the AI voice tutor** — speaks lesson intros, hints, and feedback aloud (text always shown too).
- **3 tiered hints per question**: a gentle reframe → the strategy → the first step. Pip never just gives the answer at tier 1.
- **XP & levels**, **day streak** 🔥, **hearts** ❤️ (regen over time, refill with gems), **gems** 💎, **stars** ⭐ per lesson.
- **Three question types**: multiple choice, type-the-answer (with a number pad), and true/false.
- **Practice tab**: a Daily Challenge (mixed review) and a "Fix your tricky ones" pass built from your recent mistakes.
- **Celebration screen** with confetti, stars, and level-ups.
- **Settings**: voice on/off, voice picker, speed & pitch, sound effects, reduced motion.

---

## 🛠️ How it's built (all editable, no framework)

```
Numble/
├── index.html            ← app shell, loads everything via plain <script>/<link>
├── assets/
│   ├── styles.css        ← brand theme + all UI
│   ├── app.js            ← game engine (state, path, lesson player, scoring)
│   ├── voice.js          ← Pip's voice (Web Speech) + hint engine + upgrade hooks
│   ├── audio.js          ← synthesized sound effects (no audio files)
│   └── mascot.js         ← Pip drawn as inline SVG, with expressions
└── data/
    └── curriculum.js     ← all 12 worlds / 648 questions (just data — edit freely)
```

### Add or edit content
`data/curriculum.js` is pure data. Each problem looks like:

```js
{
  id: "world-u1-l1-p1",
  type: "mc",                      // "mc" | "input" | "truefalse"
  prompt: "What is 2 + 3?",
  choices: ["4", "5", "6", "7"],   // mc only; answer must be one of these
  answer: "5",
  accept: ["5", "five"],           // input only: extra accepted forms
  explain: "Start at 2 and count up three: 3, 4, 5.",
  hints: ["Reframe…", "Strategy…", "First step…"]
}
```
Math is plain text and auto-prettified: `x^2` → x², `sqrt(9)` → √9, `3/4` → a stacked fraction, `pi` → π, `*` → ×.

### Upgrade Pip's voice to a premium / AI voice
`voice.js` exposes two optional global hooks — set them anywhere (e.g. a `<script>` in `index.html`) and Numble uses them automatically:

```js
// 1) Premium text-to-speech (ElevenLabs, Piper, etc.)
window.NUMBLE_TTS = async (text) => { /* fetch audio + play it */ };

// 2) Dynamic, model-generated hints instead of the authored ones
window.NUMBLE_AI_HINT = async ({ prompt, history }) => "a fresh hint string";
```
If neither is set, Pip uses the browser voice + the authored tiered hints — fully offline, no keys.

---

*Made with 🌟 by your math teacher. Climb the worlds, Pip's got your back.*
