# 2026-05-05 Bloons Tower Combos Implementation Plan

## Selected Game
- `bloons-tower-defense`
- Twist: `Tower combos`
- Daily slug: `bloons-tower-combos`

## MVP Scope
- Reuse the deterministic Bloons lane-defense scaffold.
- Keep map selection, difficulty selection, seeded loop, tower placement, upgrades, scoring, pause, and reset.
- Add visible pair-based combo bonuses that can be proven through browser hooks and Playwright captures.

## Combo Targets
- `Crossfire Link`
- Pair: Dart Monkey + Tack Sprayer
- Effect: faster fire rate and bonus pop rewards.
- `Shatter Lane`
- Pair: Ice Tower + Sniper
- Effect: longer slow window plus extra sniper damage against slowed bloons.

## Verification Plan
- `pnpm install`
- `pnpm test`
- `pnpm build`
- `WEB_GAME_URL="http://127.0.0.1:4173/?scripted_demo=1" node scripts/capture_playwright.mjs`
- Generate three GIF clips from deterministic screenshot sequences.

## Repo Flow
- First scaffold commit on `main`.
- Publish `daily-classic-game-2026-05-05-bloons-tower-combos` immediately.
- Implement on `codex/bloons-tower-combos`.
- Open PR, merge with merge commit, rerun verification, then deploy preview.
