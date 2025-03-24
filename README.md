## Aninex App

A Next.js 15 application (written in TypeScript) using TailwindCSS for styling and GraphQL queries from the AniList API. This project aims to display and filter anime data using modern React features.

## Table of Contents

- Overview
- Features
- Prerequisites
- Installation
- Scripts & Usage
- Project Structure
- Technologies
- API
- License
- Deploy

## Overview

This project, Aninex App, is built with Next.js 15 and TypeScript. It leverages TailwindCSS for UI styling and Apollo Client for fetching data from the AniList GraphQL API. The main goal is to demonstrate how to:

- Fetch anime data from AniList.

- Apply search filters (genre, status, season, etc.).
- Use local state management (or Redux, if configured) to store favorites.
- Render a responsive, modern UI with TailwindCSS.

## Features

1. Anime Listing

- Displays lists of anime from the AniList API.
- Supports both “current season” data (e.g. Winter 2025) and “all-time” popularity rankings.

2. Search & Filters

- Users can search by title, genre, season, status, and year.
- Debounced input to avoid overloading the API with requests.

3. Favorites System (optional)

- Locally store your favorite anime IDs (e.g. in Redux or localStorage).
- Toggle “favorite” status via a heart icon on each anime card.

4. Responsive UI

- TailwindCSS ensures the UI looks great on mobile, tablet, and desktop.

5. Modal Details

Clicking an anime card can open a modal to show more info (episodes, trailer, description, etc.).

## Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn (latest version recommended)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/CarlosEspinosa88/aninex-app.git
```

2. Install dependencies:

```bash
cd aninex-app
npm install
# or
yarn install
Scripts & Usage
Inside the project directory, you can run the following scripts:
```

## Scripts & Usage

Inside the project directory, you can run the following scripts:

- Development

```bash
npm run dev
# or
yarn dev
```

Starts the local development server on [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Production Build

```bash
npm run build
# or
yarn build
```

Creates an optimized production build in the .next folder.

- Start (Production)

```bash
npm run start
# or
yarn start
```

Runs the production build locally.

- Linting

```bash
npm run lint
# or
yarn lint
```

Runs ESLint to check for code style and potential errors.

## Project Structure

An example of the main folders and files:

```bash
aninex-app/
├─ app/                  # Next.js 15 App Router (if using app folder)
│  ├─ layout.tsx         # Root layout
│  ├─ page.tsx           # Index page
│  └─ ...other routes...
├─ components/           # Reusable React components (AnimeCard, Modal, etc.)
├─ hooks/                # Custom React hooks (useGetAnimes, useModal, etc.)
├─ lib/                  # Apollo client configuration, GraphQL queries, etc.
├─ public/               # Static assets
├─ .eslintrc.js          # ESLint configuration
├─ tailwind.config.js    # TailwindCSS configuration
├─ tsconfig.json         # TypeScript configuration
├─ package.json
├─ README.md
└─ ...
```

- app/: Next.js 15’s new App Router. Contains layout, pages, and route segments.
- components/: All reusable UI components (cards, modals, spinners, etc.).
- hooks/: Custom React hooks for fetching data, managing local state, etc.
- lib/: Apollo Client setup, GraphQL queries (GET_ANIMES, etc.).

## Technologies

Next.js 15+ – React framework for production.
TypeScript – Strongly typed JavaScript.
TailwindCSS – Utility-first CSS framework.
Apollo Client – GraphQL client for React.
AniList GraphQL API – The anime data source.

## API

This project uses AniList as the data provider via their GraphQL endpoint (https://graphql.anilist.co).

Some of the main queries used:

- GetAnimesFiltered
  Fetches paginated anime data based on filters (search, genre, season, year, etc.).

- GetAnimesSeasonAndAllTime
  Retrieves anime for the current season (e.g. Winter 2025) plus an “all-time” popular list, sorted by popularity.

## License

This project is provided as-is under an open license. You can adapt, modify, or integrate this into your own projects. Refer to LICENSE if one is included, or add your own license if needed.

Thank you for checking out Aninex App!
For questions or contributions, feel free to open an issue or submit a pull request on GitHub. Enjoy exploring the AniList anime data!

## Deploy on Vercel

Check out our the site here
[https://aninex-app.vercel.app/](https://aninex-app.vercel.app/)
