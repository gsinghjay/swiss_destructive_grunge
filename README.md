# DECONSTRUCTED - Deconstructivist Portfolio

A chaotic, rebellious portfolio site built with **Vite + React + TypeScript**. No database, pure static site ready for GitHub Pages.

## Features

- 🎨 Deconstructivist aesthetic with rotated, layered typography
- 📝 Blog with 3 posts about grunge design history
- 💼 Portfolio with 3 project case studies
- 📚 Learning page documenting AI collaboration process
- 🎯 Fully static - no database required
- 📱 Responsive design (chaos on desktop, readable on mobile)
- 🚀 GitHub Pages ready with auto-deploy workflow

## Tech Stack

- **Vite** - Lightning fast build tool
- **React 18** - UI framework with hooks
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Static JSON** - Data files (no database)

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Deploy to GitHub Pages

### Setup

1. Push code to GitHub repository
2. Go to **Settings → Pages**
3. Set **Source** to "GitHub Actions"

### Configure Base Path (if needed)

If your repo is NOT at `username.github.io`, update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Add this line
})
```

### Deploy

Push to `main` branch - auto-deploys via GitHub Actions!

Or manually trigger:
1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

## Project Structure

```
src/
├── data/           # Static JSON (posts, projects)
├── pages/          # React route components
├── components/     # Shared components (Layout)
├── styles/         # Global CSS
├── App.tsx         # React Router setup
└── main.tsx        # App entry point
```

## Design Philosophy

Embodies **deconstructivist typography** principles:

- **Reject the grid** - Chaos over order
- **Fragment text** - Break it apart
- **Layer everything** - Overlapping, colliding elements
- **Distress surfaces** - Grunge textures and effects
- **Embrace ugly** - Beauty in imperfection
- **Controlled chaos** - Every broken rule is intentional

Inspired by David Carson's Ray Gun magazine, Vaughan Oliver's 4AD album art, and 1990s punk rock aesthetics.

## Educational Context

Built for **Swiss Design Lineage** course:
- **Assignment:** Transform Swiss-style website using AI
- **Style:** Deconstructivist/Grunge (⭐⭐⭐ Advanced)
- **Approach:** Student directs, AI codes
- **Time:** ~10 hours over one week

See `/learning` page for full story.

---

**NO GRID. NO RULES. NO PERFECTION.**
