# Learning Quest Hub

`index.html` is a hub page linking to three gamified, offline-capable quiz PWAs. A persistent tab bar (Home / Maths / English / History) lets you jump between them from anywhere — there's no default subject.

- **`maths.html` — Maths Quest** (Grade 5/6, Cambridge Primary Mathematics): Area & Perimeter (composite "L-shaped" rectangles, missing side lengths) and Laws of Arithmetic (commutative/associative laws, order of operations, mental-maths regrouping)
- **`english.html` — Word Quest** (Cambridge Stage 5 English, "Tell It Another Way"): fairy tale features, phrases & clauses, simple/complex sentences, verb tenses, pronouns & possessive adjectives, homophones & homonyms, rhyme & sound devices
- **`history.html` — History Quest**: 50 questions on Ancient Egypt — the Nile, its importance and uses, social structure, homes & buildings, and farming & food

## Shared features

- Instant marking with one retry on a wrong answer, followed by a detailed study memo
- Live score shown as a fraction and a percentage
- Overall and per-section progress bars
- Save & continue later (stored locally on the device)
- Freshly randomised questions on every attempt (procedurally generated for Maths/English; shuffled from a fixed 50-question bank for History)
- Confetti, stars, badges (Distinction, Cum Laude, etc.) and XP/levels for motivation
- One question at a time, with back/forward navigation
- Downloadable results summary (questions, your answers, correct answers, explanations)
- Attempt history saved locally across sessions, per subject
- Works offline as an installable PWA (each subject also has its own manifest for installing just that one app)

## Running locally

Serve the folder with any static file server, e.g.:

```
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (the hub), or go straight to `http://localhost:8080/maths.html`, `/english.html`, or `/history.html`.
