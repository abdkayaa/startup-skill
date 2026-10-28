# Scope Discipline Lens

A product that keeps growing never ships. At a hackathon, an unfinished feature is worth **negative** points: it costs time and breaks the demo.

## Riskiest assumption first
In the first ~2 hours, write down the one assumption that kills the project if false (users want it, data exists, API works). The first KEEP item must test it. (Ries, Lean Startup)

## The Core Loop
Define the single loop that proves value: **Input → Magic → Output** the user cares about.
Everything not on this loop is CUT or LATER.

## KEEP / CUT / LATER
| Bucket | Rule |
|---|---|
| KEEP (max 3) | Directly visible in the demo happy path |
| FAKE | Needed for the story but not for the proof → hardcode, mock, seed data |
| CUT | Auth, settings, profile pages, admin panels, multi-language, dark mode, edge-case handling |
| LATER | Goes on the "Roadmap" slide — shows vision without costing time |

"Fake it" is legitimate: seeded data, a hardcoded user, a pre-recorded fallback video. Be honest in the pitch if asked.

## Feature-freeze rule
- Freeze new features at **~60–65%** of total time.
- 65–85%: polish the happy path, fix demo-breaking bugs, prepare fallback.
- 85–100%: pitch rehearsal only. No code merges unless the demo is broken.

## Scope-creep detectors
- "While we're at it, let's also…"
- A feature added because AI generated it quickly (fast to write ≠ free to integrate, test, and demo)
- Work on anything the jury will never see
- Refactoring during a hackathon
- Second user type (buyer AND seller, teacher AND student) before the first works

## Done definition
The product is "done" when a stranger can complete the core loop in < 60 seconds without the team explaining it.
