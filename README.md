# Learning Quest Hub

`index.html` is a plain hub page with one button per subject — no default subject. Each subject page also has a persistent tab bar (Home / Maths / English / History / Science / Geography) so you can jump between them from anywhere.

- **`maths.html` — Maths Quest** (Cambridge Primary Mathematics Stage 5, Term 3): 50 questions per attempt across Area & Perimeter, Laws of Arithmetic (incl. BODMAS and missing-operator puzzles), Equivalent Fractions, Ratio & Proportion (incl. bead/counter ratios and proportions-as-fractions), 3D Shapes & Nets (incl. net-of-a-cube/open-cube/not-a-cube classification and naming prisms by their faces), and Probability (likelihood terms, likelihood scales, tally percentages, probability as a simplified fraction). Overall difficulty mix is skewed hard: 50% hard, 20% medium, 20% easy, and 10% "Grade 6" stretch questions requiring deeper multi-step reasoning.
- **`english.html` — Word Quest** (Cambridge Primary English Stage 5, realigned to Cambridge's real exam strands): 24 questions per attempt across **Reading Comprehension** (narrative and poetry generated fresh each attempt, plus fixed non-fiction/persuasive passages with retrieval, inference, vocabulary-in-context and author's-purpose questions — the genuine Checkpoint/Progression Test passage format), **Grammar & Punctuation** (phrases/clauses, sentence types, verb tenses, pronouns incl. a fixed ambiguous-pronoun item, apostrophes, commas, direct speech, and all 8 parts of speech — including "application" questions on words like "light"/"run"/"fast"/"well" that change part of speech depending on context), and **Vocabulary & Spelling** (homophones/homonyms, word meaning in context, common spelling patterns). Results are reported using Cambridge's real post-2023 performance bands (Unclassified/Basic/Aspiring/Good/High/Outstanding) instead of invented badge tiers.
- **`history.html` — History Quest**: 50 questions on Ancient Egypt — the Nile, its importance and uses, social structure, homes & buildings, and farming & food
- **`science.html` — Science Quest** (Grade 5 Natural Sciences, realigned to the real end-of-year exam scope): 60 questions across **Plant Reproduction & Seed Dispersal** (flower parts, pollination, fertilisation, seed dispersal methods, germination), **Sound** (pitch, volume, vibrations, instruments, fair-test variables), **States of Matter** (solid/liquid/gas, melting/freezing/evaporation/condensation, the water cycle), **Digestive System** (organs in order, their functions, the starch test, balanced diet), **Forces** (gravity, friction, upthrust, applied force, satellites, aeroplane forces, magnetic materials), and **Seasons & Adaptations** (desert plant and animal adaptations, migration, hibernation)
- **`geography.html` — Geography Quest**: 44 questions on South Africa's climate regions (Karoo, Namaqualand, Drakensberg, Kalahari, Western Cape), natural vegetation key terms, fynbos/forests/plants, and savannah grassland, with a "Grade 6" stretch tier and single-attempt marking

## Shared features

- Instant single-attempt marking, followed by a detailed study memo
- Live score shown as a fraction and a percentage
- Overall and per-section progress bars
- Save & continue later (stored locally on the device)
- Freshly randomised questions on every attempt (procedurally generated for Maths/English; shuffled from a fixed question bank for History/Science)
- Confetti, stars, badges and XP/levels for motivation (Maths/History/Science/Geography use gamified tiers like Distinction/Cum Laude; English reports Cambridge's real performance bands — Unclassified/Basic/Aspiring/Good/High/Outstanding)
- One question at a time, with back/forward navigation
- Downloadable results summary (questions, your answers, correct answers, explanations)
- Attempt history saved locally across sessions, per subject
- A "🗂️ Jump to any question" palette during the quiz, colour-coded by answered/correct/incorrect, to jump straight to any question
- A post-quiz "🔍 Review Answers" screen with an All / Correct only / Incorrect only filter, so you can see exactly where you went wrong
- Works offline as an installable PWA (each subject also has its own manifest for installing just that one app)
- Navigation is button-based throughout (not plain links) for reliable taps on mobile

## Running locally

Serve the folder with any static file server, e.g.:

```
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (the hub), or go straight to `http://localhost:8080/maths.html`, `/english.html`, `/history.html`, `/science.html`, or `/geography.html`.
