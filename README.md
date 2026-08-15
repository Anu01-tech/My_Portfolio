# Anugraha PJ — Portfolio

A personal AI/ML portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

---

## 1. Folder structure

```
anugraha-portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf          ← replace with your real resume
│   └── robots.txt
├── src/
│   ├── components/         # Reusable UI pieces (Navbar, ProjectCard, modal, etc.)
│   ├── sections/           # One file per page section (Hero, About, Projects, ...)
│   ├── data/                # ALL editable content lives here
│   │   ├── profile.js       # name, bio, links, nav
│   │   ├── projects.js      # every project — problem/approach/results/links
│   │   ├── skills.js        # skill groups
│   │   ├── experience.js    # experience, education, research, achievements, writing
│   │   └── github.js        # GitHub stats + selected repos
│   ├── hooks/                # useActiveSection (nav highlight)
│   ├── App.jsx               # wires all sections together
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind + design tokens
├── index.html                 # SEO/meta tags, fonts
├── tailwind.config.js          # color palette, fonts, animations
└── package.json
```

## 2. Install & run

```bash
npm install
npm run dev        # http://localhost:5173
```

## 3. Production build

```bash
npm run build       # outputs to dist/
npm run preview     # preview the production build locally
```

---

## 4. How to add a new project

Open `src/data/projects.js` and copy an existing object in the `projects` array:

```js
{
  slug: "your-project-slug",
  title: "Project Title",
  subtitle: "One-line subtitle",
  category: "Computer Vision", // or "Machine Learning", "Generative AI", etc.
  year: "2026",
  featured: true,   // shows in the main grid
  spotlight: false, // set true on ONE project to feature it in the Spotlight section
  oneLiner: "...",
  problem: "...",
  approach: "...",
  aiml: "Which model/technique you used",
  techStack: ["Python", "..."],
  keyFeatures: ["...", "..."],
  results: [{ label: "Accuracy", value: "92%" }], // ONLY include real, verified metrics
  resultsNote: "Optional caveat about the metrics above",
  links: { github: "https://github.com/you/repo", demo: null },
  images: [], // real screenshot URLs, or leave empty to use the generated visual
  visual: "radar", // radar | layers | heatmap | pulse | bars | terminal
}
```

Never invent a metric in `results` — if you don't have a verified number, leave the array empty and explain why in `resultsNote`.

## 5. How to change profile information

Everything — your name, tagline, bio paragraphs, "currently learning" list, email, phone, and social links — lives in `src/data/profile.js`. Edit the strings directly; the whole site reads from this one file.

## 6. How to replace your resume

Drop your PDF into `public/` and name it exactly `resume.pdf`, replacing the existing file. No code changes needed — the Download Resume button already points to `/resume.pdf`. (Your uploaded resume is already wired in as the default.)

## 7. How to replace your profile picture

The current build doesn't render a photo (per the brief, no fake photo was generated). To add one:
1. Add your image to `src/assets/`, e.g. `profile.jpg`.
2. In `src/sections/About.jsx` (or `Hero.jsx`), import it: `import profileImg from "../assets/profile.jpg"`.
3. Render `<img src={profileImg} alt="Anugraha PJ" className="rounded-2xl" />` wherever you'd like it to appear.

## 8. How to change colors

Open `tailwind.config.js` → `theme.extend.colors`. The key tokens:

| Token | Used for |
|---|---|
| `base.950 / 900 / 800` | Background layers (darkest to lightest) |
| `signal.cyan / violet / blue` | Accent colors (buttons, highlights, glows) |
| `ink.100 / 300 / 500 / 700` | Text colors (brightest to dimmest) |
| `line` | Borders/dividers |

Changing these values updates the whole site consistently since every component references the token names, not raw hex codes.

## 9. How to update LinkedIn / GitHub / Medium links

All three are in `src/data/profile.js` under `links: { github, linkedin, medium, resume }`. Change the URL and it updates everywhere (navbar, hero, footer, contact section).

## 10. GitHub stats — static vs. live API

`src/data/github.js` currently holds a hand-entered repo count and a curated list of repos. To pull live data instead:

1. Get a GitHub personal access token (read-only, public repo scope) if you want higher rate limits, or skip it for unauthenticated calls (60 req/hour).
2. Call `https://api.github.com/users/Anu01-tech/repos?sort=updated` client-side or at build time.
3. **Never** put a token in frontend code that ships to the browser — if you need authentication, proxy the request through a small serverless function (Vercel/Netlify function) that holds the token as a server-side environment variable.

For a student portfolio, the static file is simpler and avoids rate-limit/config issues — update the numbers by hand every so often.

## 11. Contact form — how it works

The form in `src/sections/Contact.jsx` opens the visitor's own email client with a pre-filled message (`mailto:`), so **no backend or API key is required**. If you'd rather have messages land in an inbox without the visitor needing an email client open:

- **Formspree** (formspree.io) — free tier, just point the form's `action` at your Formspree endpoint. No secret key exposed client-side.
- **EmailJS** — sends email directly from the browser using a public key (designed to be public; rate-limited per domain).

Do not embed an SMTP password, a private API key, or any other secret directly in the React code — both of the above are designed so nothing sensitive needs to live in the frontend.

## 12. Deployment

### Vercel (recommended, zero config)
```bash
npm install -g vercel
vercel
```
Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

### GitHub Pages
1. `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": { "deploy": "vite build && gh-pages -d dist" }
   ```
3. Set `base: "/<repo-name>/"` in `vite.config.js`.
4. `npm run deploy`

### Netlify
Drag-and-drop the `dist/` folder after `npm run build`, or connect the repo with build command `npm run build` and publish directory `dist`.

---

## 13. Content still marked `[ADD ... HERE]` or `[VERIFY]`

Search the `src/data/` folder for these two markers before publishing:

- `[ADD ... HERE]` — placeholder content that needs your real information (hackathon names, article URLs, internship outcomes/responsibilities you want to add detail to).
- `[VERIFY]` — a factual conflict was found between your GitHub repo READMEs and your resume draft, specifically:
  - **Plastic Detector**: repo says YOLOv8 + MobileNetV2 (no accuracy published); resume says CNN/ResNet-50 at 92% accuracy.
  - **Occupancy Monitoring**: repo says CSRNet density regression (no accuracy published); resume says YOLOv5-based at 95% accuracy, <200ms latency.
  - **Automated Attendance**: only appears on the resume, no public repo found — add a link once available.

  Resolve which version is current before these go live publicly.

## 14. Recruiter-style review (self-audit)

| Question | Status |
|---|---|
| Understand what she does in 10s? | Yes — hero headline + subtext + role badge |
| Strongest projects visible immediately? | Yes — featured grid right after About/Skills, spotlight section for Pothole Detection |
| GitHub easy to find? | Yes — navbar icon, hero button, footer, dedicated GitHub section |
| LinkedIn easy to find? | Yes — navbar icon, footer, contact section |
| Resume downloadable? | Yes — navbar + hero buttons |
| Technical skills clear? | Yes — grouped, tagged, no fake percentages |
| Real implementation shown? | Yes — every project modal has Problem/Approach/AI-ML/Tech/Features, sourced from actual READMEs |
| Feels credible? | Mostly — resolve the `[VERIFY]` metric conflicts before publishing to keep it fully credible |
| Works on mobile? | Yes — responsive nav, grid, timeline, and form down to 375px width |
| Would shortlist for an internship? | Yes, particularly on the strength of the CSRNet occupancy system and the pothole detection pipeline — both show real depth beyond tutorial-level projects |
