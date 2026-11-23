# Learning Quest Hub

`index.html` is a plain hub page with one button per subject — no default subject. Each subject page also has a persistent tab bar (Home / Maths / English / History / Science / Geography) so you can jump between them from anywhere.

- **`maths.html` — Maths Quest** (Cambridge Primary Mathematics Stage 5, Term 3): 50 questions per attempt across Area & Perimeter, Laws of Arithmetic (incl. BODMAS and missing-operator puzzles), Equivalent Fractions, Ratio & Proportion (incl. bead/counter ratios and proportions-as-fractions), 3D Shapes & Nets (incl. net-of-a-cube/open-cube/not-a-cube classification and naming prisms by their faces), and Probability (likelihood terms, likelihood scales, tally percentages, probability as a simplified fraction). Overall difficulty mix is skewed hard: 50% hard, 20% medium, 20% easy, and 10% "Grade 6" stretch questions requiring deeper multi-step reasoning.
- **`english.html` — Word Quest** (Cambridge Primary English Stage 5, realigned to Cambridge's real exam strands): 24 questions per attempt across **Reading Comprehension** (narrative and poetry generated fresh each attempt, plus fixed non-fiction/persuasive passages with retrieval, inference, vocabulary-in-context and author's-purpose questions — the genuine Checkpoint/Progression Test passage format), **Grammar & Punctuation** (phrases/clauses, sentence types, verb tenses, pronouns incl. a fixed ambiguous-pronoun item, apostrophes, commas, direct speech, and all 8 parts of speech — including "application" questions on words like "light"/"run"/"fast"/"well" that change part of speech depending on context), and **Vocabulary & Spelling** (homophones/homonyms, word meaning in context, common spelling patterns). Results are reported using Cambridge's real post-2023 performance bands (Unclassified/Basic/Aspiring/Good/High/Outstanding) instead of invented badge tiers.
- **`history.html` — History Quest** (Grade 5 end-of-year exam scope, comprehension-style): each of the 50 questions per attempt is shown with a short educational paragraph on its topic — the San & Khoikhoi (hunter-gatherer/herder life, religion & rock art, survival plants), early African farmers (the Iron Age, settlements, roles in farming society, crops & trade, Khoisan–farmer interaction), the South African Coat of Arms, Ancient Egypt (the Nile, society), and South African heritage sites. Questions are drawn randomly from a pool of 116, topic-balanced, so every attempt and restart is a different 50 — and paragraphs are written so info relevant to one question may appear in a *different* topic's paragraph, rewarding learners who read everything. Going back is disabled during the quiz (forward-only, no palette jumping) until it's finished, after which the usual Review screen is fully open.
- **`science.html` — Science Quest** (Grade 5 Natural Sciences, realigned to the real end-of-year exam scope and deepened with Cambridge Primary Science Stage 5–level knowledge & understanding questions*): 102 questions across **Plant Reproduction & Seed Dispersal** (23: flower parts, pollination incl. self/cross/wind-pollination, fertilisation, seed dispersal methods and their purpose, germination), **Sound** (15: pitch, volume, vibrations, instruments, fair-test variables, how sound travels, soundproofing), **States of Matter** (15: solid/liquid/gas, melting/freezing/evaporation/condensation, the water cycle, reversible changes, dissolving & separating), **Digestive System** (17: organs in order, their functions, the starch test, nutrients, balanced diet), **Forces** (15: gravity, friction, upthrust, applied force, satellites, aeroplane forces, magnetic materials, balanced/unbalanced forces), and **Seasons & Adaptations** (17: desert plant and animal adaptations, migration, hibernation, camouflage). *The Cambridge-depth additions are based on general knowledge of the Cambridge Primary Science framework rather than a verified copy of the official Stage 5 document (not reachable from this environment) — worth checking against your school's own scheme of work.
- **`geography.html` — Geography Quest** (Grade 5 end-of-year exam scope, comprehension-style, same architecture as History Quest, aligned to official Cambridge Primary Stage 5 study notes): each of the 50 questions per attempt is shown with a short educational paragraph on its topic — Physical Features (plateau, escarpment, coastal plain, peak, cape, bay), Rivers (source, mouth, tributary, confluence, catchment area, SA's major rivers), South Africa's Neighbouring Countries (borders, landlocked countries, capitals), Weather & Climate (weather vs climate, SA's climate regions), Interpreting Weather Maps (forecasts, cloud cover, weather instruments, map symbols, min/max temperature readings), Minerals Mined in SA (gold, platinum, diamonds, coal, iron ore, copper and their uses and mining locations, renewable vs non-renewable), Safety of Miners (mining's environmental and health impacts) and Coal Formation. Questions are drawn randomly from a pool of 111, topic-balanced, so every attempt and restart is a different 50. Going back is disabled during the quiz (forward-only, no palette jumping) until it's finished, after which the usual Review screen is fully open.

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
