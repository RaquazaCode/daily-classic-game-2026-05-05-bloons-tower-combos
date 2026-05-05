# Bloons Tower Combos - Design

## Goal
Ship a deterministic Bloons-inspired web game where tower placement proximity creates readable, automation-safe combat synergies.

## Architecture
- `src/game.ts` owns simulation state, combo discovery, projectile spawning, collision resolution, and snapshot serialization.
- `src/render.ts` handles layered canvas rendering plus combo link overlays and HUD messaging.
- `src/data/` stores fixed catalogs for maps, towers, waves, and combo definitions.
- `src/systems/` keeps reusable placement, targeting, upgrade, and wave-plan helpers separate from the main loop.
- `src/main.ts` binds input, locks scripted demo defaults, and exposes browser hooks.

## Combo System
- `Crossfire Link`: Dart Monkey + Tack Sprayer within `124px`.
- Effect: both towers fire faster and their projectiles award bonus score and coins.
- `Shatter Lane`: Ice Tower + Sniper within `156px`.
- Effect: Ice slows last longer and Sniper shots hit slowed bloons for extra damage and reward.
- Active links are recomputed on placement and serialized in `render_game_to_text()`.

## Determinism Contract
- Seeded PRNG is fixed in `src/rng.ts`.
- Simulation advances in fixed `1/60` steps.
- Scripted demo ignores local storage for map/difficulty and always boots `Canopy Sprint / Easy`.
- Stable hooks:
- `window.advanceTime(ms)`
- `window.render_game_to_text()`

## Public Snapshot Contract
`render_game_to_text()` returns stable JSON with:
- `mode`, `screen`, `score`, `coins`, `lives`, `wave`, `selectedMapId`, `elapsedMs`
- `speedRoundActive`, `speedRoundEndsInMs`
- `balloonsAlive`, `towersPlaced`, `projectilesAlive`, `poppedTotal`
- `comboCount`, `activeComboIds`
- `seed`, `pendingEvents`

## Verification Strategy
- `pnpm test` asserts hooks, combo definitions, combo HUD copy, and scripted demo defaults.
- `pnpm build` validates the production bundle.
- Playwright capture artifacts prove a real combo activates and continues scoring across multiple fixed-step snapshots.
