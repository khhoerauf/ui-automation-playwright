# UI Automation - Playwright

End-to-end test suite for video ad unit interactions, built with [Playwright](https://playwright.dev). Tests run against local HTML media files and are executed on mobile browser emulators.

## Project Structure

```
tests/
├── pages/          # Page Object Models
├── spec/           # Test specs
└── support/
    ├── helpers.js  # Shared utilities (e.g. local file navigation)
    └── mediaFiles/ # Local HTML/video assets used by tests
```

## Prerequisites

- [Node.js](https://nodejs.org) (LTS recommended)
- npm

## Setup

Install dependencies and Playwright browsers:

```bash
npm ci
npx playwright install --with-deps
```

## Running Tests

| Command | Description |
|---|---|
| `npm run test:headless` | Run all tests headlessly |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run test:report` | View the last HTML report |

## Browsers

Tests run on mobile device emulators:

- **Mobile Chrome** — Pixel 5
- **Mobile Safari** — iPhone 12

## CI

Tests run automatically on every push via GitHub Actions. The workflow:

1. Installs Node.js (LTS) and dependencies
2. Installs Playwright browsers with system dependencies
3. Runs the full test suite and posts a summary to the job summary page

See [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml).

## Test Reports

After a local run, open the HTML report with:

```bash
npm run test:report
```
