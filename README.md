# Moka Coffee

Moka Coffee is a React and Vite coffee shop website concept for a cafe in Sensok. The project currently focuses on a branded homepage experience with a full-screen hero, navigation, an Our Story section, and an early Top Menu showcase.

## What Is Built So Far

- Full-screen hero section with coffee shop background imagery
- Branded navigation using the Moka Coffee logo
- Primary call-to-action buttons for Google Maps directions and the menu section
- Our Story section with cafe-style storytelling copy and simple experience stats
- Top Menu section with a custom masked menu card design
- Shared typography and color tokens powered by Tailwind CSS
- Local image assets for the logo, hero, drinks, and menu card artwork

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- ESLint

## Project Structure

```text
moka_coffee/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── assets.js
│   │   └── image/
│   ├── Components/
│   │   ├── Button/
│   │   ├── Hero/
│   │   ├── Menu/
│   │   ├── Ourstory/
│   │   ├── Navbar.jsx
│   │   └── Navbar_Title.jsx
│   ├── layout/
│   │   └── Container.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── masking/
├── package.json
└── vite.config.js
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Current Notes

The project is still in progress. The current layout includes navigation links for Home, Our Story, Menu, About Us, and Contact, but the main page content is currently rendered as one continuous landing page. The About Us and Contact destinations can be added as future sections or separate routed pages.

## Roadmap Ideas

- Add responsive mobile navigation
- Create full About Us and Contact sections
- Expand the Top Menu section with real drink names, prices, and descriptions
- Add route handling or smooth scrolling for each navigation item
- Improve accessibility with stronger alt text and keyboard focus states
- Polish spacing and layout for tablet and mobile screens
