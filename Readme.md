# Company Wise LeetCode DSA Sheets

A premium, production-quality, responsive web application for company-wise LeetCode DSA sheets. It reads and parses CSV files dynamically and manages all progress (solved, bookmarks, recently visited) locally.

## Features

- **Dynamic Loading:** Scans `companies/` folders to dynamically generate company dashboards. No hardcoded arrays.
- **Timeframe Tabs:** Filter questions by timeframe (All, 30 Days, 3 Months, 6 Months, More than 6 Months).
- **Advanced Filtering & Sorting:**
  - Search by Title
  - Filter by Difficulty (Easy, Medium, Hard)
  - Filter by Topic tags (dynamically collected from current questions)
  - Filter by Solved / Unsolved Status
  - Filter by Bookmarked questions
  - Sort by Frequency, Acceptance Rate, Alphabetical, or Difficulty (both Ascending and Descending)
- **Local Persistence:**
  - Solved status tracking (`solved_questions` key, stored by `company_title` format)
  - Bookmark tracking (`bookmarked_questions` key, stored by `company_title` format)
  - Theme state (`theme` key, via `next-themes`)
  - Recently visited companies (`recently_visited_companies` key)
- **Premium UI:**
  - Modern Dark Mode styled interface inspired by Vercel, Linear, LeetCode, and Shadcn.
  - Interactive circular SVG progress indicators.
  - Interactive cards with hover lifts, animations, and transitions using Framer Motion.
  - Horizontal scrolling table representation on mobile viewports.
  - Custom scroll to top assist float.
  - Share progress (copy shareable text) and copy page url shortcuts.
- **Performance & SEO:**
  - Dynamic SEO meta tags per company sheet.
  - Memoized filtering and sorting.
  - Server components for quick data load and high-performance compilation.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Vanilla CSS Variables
- **Animations:** Framer Motion
- **State Management:** Zustand
- **CSV Parser:** Papa Parse (pure JS, lightweight)
- **Icons:** Lucide React
- **Themes:** next-themes

## Project Structure

```
├── app/                  # Next.js App Router (pages and layouts)
├── companies/            # Raw company directories containing CSVs
├── components/           # Reusable UI components
├── hooks/                # Custom React hooks (state hydration, etc.)
├── lib/                  # Utilities (CSV parsing, math operations, filters)
├── store/                # Zustand store configuration
├── types/                # TypeScript interface definitions
├── package.json          # Node dependencies
└── tailwind.config.ts    # Styling configurations
```

## Installation & Setup

1. **Clone the repository or navigate to root:**
   ```bash
   cd leetcode-company-wise-problems-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
