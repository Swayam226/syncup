### SyncUp – Internship Job Dashboard

This project is a small social-style dashboard for internship/job hunting built on top of **Next.js** and **Tailwind CSS**.  
It’s meant to feel like a modern networking app: a left sidebar, top navigation, feed in the middle, and extra widgets on the sides.  
Desktop is the main experience, but the layout is tuned to work nicely on tablets and phones as well.

---

## Tech stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS variables
- **Icons**: `lucide-react`
- **Charts**: `recharts`
- **Analytics**: Vercel Analytics (optional, can be disabled)

---

## Prerequisites

Make sure you have:

- **Node.js** 18+ installed  
  Check with:

  ```bash
  node -v
  npm -v
  ```

- **npm** (comes with Node) or **pnpm/yarn** if you prefer those.  
  All commands below use `npm`, but you can swap in your tool of choice.

---

## Getting started

1. **Clone or download the project**

   If this folder is already on your machine (for example from a zip), you can skip this.

   ```bash
   git clone <your-repo-url> syncup-job
   cd syncup-job
   ```

2. **Install dependencies**

   From the project root:

   ```bash
   npm install
   ```

   This will pull in Next.js, Tailwind, lucide-react, recharts, etc.

3. **Run the development server**

   ```bash
   npm run dev
   ```

   By default, Next.js will start on `http://localhost:3000`.

4. **Open the app**

   - Visit `http://localhost:3000` in your browser.
   - You should see the **Home** feed.
   - Go to `http://localhost:3000/dashboard` for the **Dashboard** view.

---

## Project layout (high level)

You don’t need to memorize this, but it helps to know where things live:

- `app/`
  - `layout.tsx` – root layout (sidebar + topbar shell)
  - `page.tsx` – home feed page
  - `dashboard/page.tsx` – dashboard page
  - `globals.css` – Tailwind + design tokens
- `components/layout/`
  - `sidebar.tsx` – left navigation
  - `topbar.tsx` – top search + actions
- `components/home/`
  - `profile-card.tsx`
  - `analytics-widget.tsx`
  - `sosmed-stories.tsx`
  - `create-post.tsx`
  - `feed-post.tsx`
  - `hire-banner.tsx`
  - `suggestions.tsx`
- `components/dashboard/`
  - `stats-cards.tsx`
  - `vacancy-chart.tsx`
  - `recommended-jobs.tsx`
  - `job-application-table.tsx`

Most of the UI is stateless and uses hard‑coded/mock data. It’s intentionally a “UI playground” rather than a full backend app.

---

## Running in different environments

- **Development**:

  ```bash
  npm run dev
  ```

  This runs the app in development mode with hot reload.

- **Production build**:

  ```bash
  npm run build
  npm start
  ```

  - `npm run build` compiles the app for production.
  - `npm start` runs the compiled app (defaults to port 3000).

---

## Linting & formatting

If you want to keep things tidy:

```bash
npm run lint
```

Fix or clean up anything it reports before committing changes.

If you use an editor like VS Code or Cursor, turning on “Format on Save” will help keep the TS/TSX files consistent.

---

## Responsive behavior notes

- **Desktop / larger screens**:
  - Three-column layout on the home page:
    - Left: profile + analytics + stories
    - Center: posts
    - Right: hire banner + suggestions
  - Dashboard shows stats, chart + table, then recommended jobs on the right.

- **Tablets / phones**:
  - Overall shell becomes scrollable instead of locking to the viewport height.
  - On **Home**:
    - `ProfileCard` shows at the very top on mobile.
    - Feed posts come underneath.
    - Analytics + Sosmed stories are stacked below the feed.
  - On **Dashboard**:
    - Buttons and filters wrap instead of overflowing.
    - Chart and table stack above the recommended jobs section on smaller widths.


---

If you hit issues with installing, running `dev`, or building, the most useful things to note are:

- Your Node version (`node -v`)
- The command you ran
- The full error message from the terminal

