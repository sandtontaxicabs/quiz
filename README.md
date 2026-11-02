# Learning Quest Hub

`index.html` is a plain hub page with one button per subject — no default subject. Each subject page also has a persistent tab bar (Home / Maths / English / History / Science) so you can jump between them from anywhere.

- **`maths.html` — Maths Quest** (Cambridge Primary Mathematics Stage 5, Term 3): 50 questions per attempt across Area & Perimeter, Laws of Arithmetic (incl. BODMAS and missing-operator puzzles), Equivalent Fractions, Ratio & Proportion, 3D Shapes & Nets, and Probability (likelihood terms, likelihood scales, tally percentages, probability as a simplified fraction). Overall difficulty mix is skewed hard: 50% hard, 20% medium, 20% easy, and 10% "Grade 6" stretch questions requiring deeper multi-step reasoning.
- **`english.html` — Word Quest** (Cambridge Stage 5 English, "Tell It Another Way"): fairy tale features, phrases & clauses, simple/complex sentences, verb tenses, pronouns & possessive adjectives, homophones & homonyms, rhyme & sound devices
- **`history.html` — History Quest**: 50 questions on Ancient Egypt — the Nile, its importance and uses, social structure, homes & buildings, and farming & food
- **`science.html` — Science Quest**: 65 questions on forces & magnetism — gravity, the normal force, applied forces, satellites & orbits, friction/air/water resistance & upthrust, multiple forces, magnets & magnetic materials, and magnetic force investigations

## Shared features

- Instant single-attempt marking, followed by a detailed study memo
- Live score shown as a fraction and a percentage
- Overall and per-section progress bars
- Save & continue later (stored locally on the device)
- Freshly randomised questions on every attempt (procedurally generated for Maths/English; shuffled from a fixed question bank for History/Science)
- Confetti, stars, badges (Distinction, Cum Laude, etc.) and XP/levels for motivation
- One question at a time, with back/forward navigation
- Downloadable results summary (questions, your answers, correct answers, explanations)
- Attempt history saved locally across sessions, per subject
- Works offline as an installable PWA (each subject also has its own manifest for installing just that one app)
- Navigation is button-based throughout (not plain links) for reliable taps on mobile

## Running locally

Serve the folder with any static file server, e.g.:

```
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (the hub), or go straight to `http://localhost:8080/maths.html`, `/english.html`, `/history.html`, or `/science.html`.
