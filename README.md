# SharePal Gaming Gadgets

A React + TypeScript recreation of SharePal's Bangalore gaming gadgets rental page. The visual direction follows the supplied PRD: dark navy surfaces, purple SharePal header, lime actions, generous rounded cards, and a dense desktop catalogue that becomes a two-column mobile layout.

## Setup

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run build
npm run lint
```

## Stack

- Vite, React 19, TypeScript
- Tailwind CSS tooling with a small token layer in `src/styles/tokens.css`
- Framer Motion for card/list transitions
- Lucide React for interface icons

## Current structure

```text
src/
	App.tsx                 first-page composition and catalogue state
	assets.ts               central non-product asset paths
	data/extra-products.json mock catalogue items 24-50
	assets/product-list.json supplied product data
	styles/tokens.css       tunable design tokens
	index.css               layout, responsive rules, and component styling
```

## Design decisions

- Missing supplied art renders as a labelled dark placeholder, so layout remains inspectable until files are added under `public/assets/`.
- The source product JSON is read unchanged. Category labels are derived at load time, while mock items use the same product schema plus `category`.
- Rental dates are intentionally local UI state in this checkpoint. Prices stay blurred until both dates are present, then show a three-day example total.
- The first 12 visible catalogue cards are shown with the Vote-to-Launch card kept at the front; search, category filtering, sorting, wishlist feedback, and cart feedback are already interactive.

## Remaining sections

Promo banners, pagination, FAQ, review marquee, stats, footer SEO/link grid, chat widget, cart drawer, and the full calendar interaction are the next implementation slices. Exact supplied art can be dropped into `public/assets/` without changing component code.

## Known gaps

The exact font files, date-picker copy, login flow, and catalogue entries beyond the supplied JSON are not available in the brief, so the implementation uses the PRD estimates and documented mock data.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
