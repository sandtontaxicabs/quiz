# Maths Quest

An interactive PWA maths quiz for Grade 5/6 (Cambridge Primary Mathematics), covering:

- **Area & Perimeter** — composite ("L-shaped") rectangles, missing side lengths
- **Laws of Arithmetic** — commutative/associative laws, order of operations, mental-maths regrouping

## Features

- Instant marking with one retry on a wrong answer, followed by a detailed study memo
- Live score shown as a fraction and a percentage
- Overall and per-section progress bars
- Save & continue later (stored locally on the device)
- A large, procedurally-generated question bank — every quiz is freshly randomised and mixed-difficulty (easy/medium/hard)
- Confetti, stars, badges (Distinction, Cum Laude, etc.) and XP/levels for motivation
- One question at a time, with back/forward navigation
- Shape diagrams drawn for every Area & Perimeter question
- Downloadable results summary (questions, your answers, correct answers, explanations)
- Attempt history saved locally across sessions
- Works offline as an installable PWA

## Running locally

Just open `index.html` in a browser, or serve the folder with any static file server, e.g.:

```
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
