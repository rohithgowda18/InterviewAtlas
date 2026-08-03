# InterviewAtlas

A fast, production-ready web application for exploring company-wise LeetCode interview questions. Built with Next.js 15, the application serves pre-generated TypeScript datasets for optimal performance, eliminating runtime CSV parsing.

## Features

- **470+ Company Sheets**
  - Browse interview question sheets for hundreds of companies.
  - Company overview with question statistics and difficulty distribution.

- **Company Question Explorer**
  - Search questions instantly.
  - Filter by:
    - Difficulty
    - Topic
    - Solved / Unsolved
    - Bookmarked
  - Sort by:
    - Frequency
    - Difficulty
    - Alphabetical

- **Progress Tracking**
  - Mark questions as solved.
  - Bookmark important questions.
  - Recently visited companies.
  - All progress is stored locally in the browser.

- **Modern UI**
  - Responsive design for desktop, tablet, and mobile.
  - Dark/Light theme.
  - Smooth animations with Framer Motion.
  - Keyboard-friendly interface.
  - Pagination for large datasets.

- **High Performance**
  - Static generation with Next.js App Router.
  - Pre-generated TypeScript datasets.
  - Lazy loading of company data.
  - Zero runtime CSV parsing.
  - Optimized for Vercel deployment.

---

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- next-themes
- Lucide React

---

## Project Structure

```text
app/                 Next.js App Router
components/          Reusable UI components
generated/           Pre-generated company datasets
hooks/               Custom React hooks
lib/                 Utilities and data loading
public/              Static assets
store/               Zustand state management
types/               TypeScript definitions
```

---

## Data Architecture

The application uses a compile-time data generation workflow.

```
Raw CSV Files
        │
        ▼
Generation Script (development only)
        │
        ▼
generated/*.ts
        │
        ▼
Next.js Application
```

Only the generated TypeScript files are required for production.

The raw CSV files and generation scripts are development assets and are not required for deployment.

---

## Local Development

Clone the repository:

```bash
git clone <repository-url>
cd InterviewAtlas
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Visit:

```
http://localhost:3000
``