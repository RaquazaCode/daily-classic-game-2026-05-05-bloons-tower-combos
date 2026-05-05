Original prompt: Implement the 2026-05-05 Bloons Tower Combos Automation Plan.

## Progress
- Selected `bloons-tower-defense` from the refreshed queue and used the twist `Tower combos`.
- Scaffolded a brand-new daily folder and standalone git repo:
- `games/2026-05-05-bloons-tower-combos`
- Created the GitHub repo immediately after the first scaffold commit:
- `https://github.com/RaquazaCode/daily-classic-game-2026-05-05-bloons-tower-combos`
- Implemented deterministic tower-defense MVP with:
- seeded fixed-step simulation
- path-based bloon movement
- tower placement and upgrades
- collision, scoring, pause, restart, and browser hooks
- Added combo systems:
- `Crossfire Link` for Dart Monkey + Tack Sprayer
- `Shatter Lane` for Ice Tower + Sniper
- Added deterministic scripted capture proof with `?scripted_demo=1` and Playwright action payloads using the required schema.

## Verification
- `pnpm install`: pass
- `pnpm test`: pass
- `pnpm build`: pass
- `WEB_GAME_URL="http://127.0.0.1:4173/?scripted_demo=1" node scripts/capture_playwright.mjs`: pass

Deterministic proof snapshots:
- `playwright/main-actions/state-4.json` -> `comboCount: 1`, `activeComboIds: ["crossfire_link"]`
- `playwright/main-actions/state-6.json` -> `score: 88`, `coins: 52`, combo-tagged pop events present
- `playwright/main-actions/state-9.json` -> combo persists into `wave: 2`

## Remaining Automation Work
- Generate GIF assets from the verified capture frames.
- Commit feature-branch changes in small logical units.
- Open and merge the PR.
- Run post-merge verification, deploy preview, and reconcile automation records.
