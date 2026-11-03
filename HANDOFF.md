# 🚀 Portfolio Project Handoff & Developer Guide

> **Developer:** Wayne Yzon Nagares  
> **Program:** Bachelor of Science in Information Technology (BSIT) — Web & Mobile Application Development  
> **Institution:** Manuel S. Enverga University Foundation (MSEUF)  
> **Target Opportunity:** 2026 Web Development, Mobile Development (Flutter), or Edge Machine Learning Internships & Junior Roles  
> **Live Flagship Reference:** [NiyoSense Web & Mobile Ecosystem](https://niyosense.me) | [GitHub Repository](https://github.com/Cbolea23/niyosense-capstone)

---

## 🎯 1. What We Set Out to Achieve

Most student portfolios fail because they showcase generic classroom exercises (basic to-do lists, static calculators, or tutorial clones) that do not demonstrate architectural thinking or real-world problem solving.

**Our goal with this portfolio is to immediately position you in the top 1% of graduating BSIT students by:**
1. **Highlighting Applied Edge AI & Mobile Engineering:** Demonstrating real competence in training **YOLOv8 neural networks**, quantizing models to **8-bit TensorFlow Lite** for sub-1s mobile CPU execution, and building **cross-platform mobile apps in Flutter**.
2. **Spotlighting Production Impact:** Showcasing **NiyoSense (v1.5.2)**—a live, deployed agricultural intelligence platform solving coconut maturity grading (*Malauhog* vs. *Buko*) to prevent post-harvest valuation leakage.
3. **Proving Full-Stack & System Integration:** Showing that you understand end-to-end software architecture—from on-field offline **SQLite caching** in remote harvest sheds (*kamalig*) to centralized **Django 6.1 REST APIs** and **PostgreSQL 16** behind Cloudflare Edge security.
4. **Providing Proof-of-Work to Recruiters Instantly:**
   - Dual-device visual split mockup (Web Dashboard + Android Mobile Phone chassis).
   - An **Interactive 70/30 Late Fusion Simulator** right on the website so recruiters can test your multimodal algorithm live in their browser.
   - A built-in, ATS-formatted resume viewer with one-click PDF printing.

---

## 🏗️ 2. Technology Stack & Toolchain

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React 19 + TypeScript** | Type-safe, component-driven reactive user interface |
| **Build Tool** | **Vite 6** | Instant Hot Module Replacement (HMR) and optimized rollup bundle |
| **Styling** | **Tailwind CSS 3.4** | Modern dark-mode palette, responsive layout, and custom glow effects |
| **Icons** | **Lucide React + Custom SVG** | High-performance, clean developer iconography |
| **Typography** | **Google Fonts** | Plus Jakarta Sans (body), Space Grotesk (headings), JetBrains Mono (code) |
| **CI/CD** | **GitHub Actions** | Automated build & zero-downtime deployment to GitHub Pages |

---

## 📂 3. Project File Structure & Component Map

```text
d:\Personal Website Portfolio\
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg                 # Browser tab icon
│   └── icons.svg
├── src/
│   ├── assets/                     # Images, icons, and static graphics
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky header with blur, live status pill, and resume trigger
│   │   ├── Hero.tsx                # Hero banner with terminal telemetry & key value proposition
│   │   ├── NiyoSenseShowcase.tsx   # Crown jewel case study with split laptop/mobile mockups
│   │   ├── LateFusionSimulator.tsx # Interactive multimodal 70/30 decision math widget
│   │   ├── Projects.tsx            # Filterable supporting project cards (Web, Mobile, AI/ML)
│   │   ├── SkillsMatrix.tsx        # 4-quadrant categorized technical competencies
│   │   ├── EducationExperience.tsx # MSEUF BSIT credentials, coursework, & leadership
│   │   ├── ResumeModal.tsx         # ATS-optimized resume viewer with print/PDF export
│   │   ├── ContactFooter.tsx       # 1-click email copy button, social links, & copyright
│   │   └── GithubIcon.tsx          # Standalone SVG GitHub icon
│   ├── data/
│   │   └── portfolioData.ts        # Single source of truth for all copy, links, & metrics
│   ├── App.tsx                     # Master application shell with cyber-grid overlay
│   ├── index.css                   # Tailwind imports, custom animations, & scrollbar styling
│   ├── main.tsx                    # React DOM entrypoint
│   └── vite-env.d.ts               # Vite TypeScript environment declarations
├── index.html                      # HTML entrypoint with SEO meta tags & OpenGraph cards
├── package.json                    # Dependencies & npm scripts
├── tailwind.config.js              # Custom brand colors & font extensions
├── tsconfig.json                   # Strict TypeScript compiler options
├── vite.config.ts                  # Vite bundler config with relative base path ('./')
└── HANDOFF.md                      # This master handoff document
```

---

## 💻 4. How to Run & Work on the Project in Your IDE

### Starting the Local Development Server
1. Open your terminal in VS Code (or your preferred editor) inside the project folder:
   ```powershell
   cd "d:\Personal Website Portfolio"
   ```
2. Run the dev script:
   ```powershell
   npm run dev
   ```
3. Open **`http://localhost:5173/`** in your browser. Any edit you make in `src/` will instantly reload in the browser without losing state.

### Testing the Production Build Locally
To ensure your site builds cleanly before pushing to GitHub:
```powershell
npm run build
npm run preview
```
This serves the compiled, minified production assets at **`http://localhost:4173/`**.

---

## ✏️ 5. How to Customize Your Content

All personal details, URLs, and project summaries are centralized in a single file:
👉 **[`src/data/portfolioData.ts`](file:///d:/Personal%20Website%20Portfolio/src/data/portfolioData.ts)**

### What you can easily update:
* **Contact Information:** Change your primary email or phone number in `PERSONAL_INFO`.
* **Social Links:** Update your LinkedIn profile URL and GitHub profile username.
* **Adding Your Actual PDF Resume:**
  1. Export your 1-page resume PDF from Word, Canva, or Google Docs.
  2. Save it as `resume.pdf` inside the **`public/`** folder (i.e., `public/resume.pdf`).
  3. Visitors clicking "Download Resume" will immediately receive your PDF!
* **Adding More Supporting Projects:** Add entries to the `SUPPORTING_PROJECTS` array in `portfolioData.ts`. Each card automatically inherits category tags, metric pills, and repository links.

---

## 🚢 6. Step-by-Step GitHub Pages Deployment Guide

Your repository already has Git initialized and a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`). Follow these 3 simple steps to put it live on the internet:

### Step 1: Create a New GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Repository name recommendations:
   * **Option A (User Site):** `<your-github-username>.github.io` (Deploys directly to `https://<your-username>.github.io`).
   * **Option B (Project Site):** `portfolio` (Deploys to `https://<your-username>.github.io/portfolio/`).
3. Set the visibility to **Public**.
4. **Do NOT** check "Add a README" or ".gitignore" (we already have clean ones locally).
5. Click **Create repository**.

### Step 2: Push Your Local Code to GitHub
In your IDE terminal, run:
```powershell
# Link your local repo to GitHub (replace with your actual GitHub username and repo name)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# Push the main branch
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. In your GitHub repository, click on the **Settings** tab.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment → Source**, change the dropdown from *Deploy from a branch* to **GitHub Actions**.
4. That's it! GitHub will automatically trigger the workflow in `.github/workflows/deploy.yml`. Within ~60 seconds, your site will be live on the web with a free SSL certificate!

---

## 🎤 7. Interview & Pitch Cheat Sheet

When recruiters or interviewers ask: *"Tell me about your most challenging or favorite project,"* here is how you can pitch **NiyoSense**:

> *"In our BSIT capstone, we built NiyoSense—a Web and Mobile coconut maturity profiling system currently live at niyosense.me. Commercial farmers traditionally split young green coconuts or tap them with knuckles to guess if they're Malauhog or Buko, which leads to massive crop loss and price disputes.*
>
> *I served as the Lead Machine Learning Engineer. I trained two separate YOLOv8 models—one for visual exocarp texture and one for acoustic internal knuckle-knock resonance converted to 128-band Mel-spectrograms. Because remote harvest groves have zero internet, I quantized the models to 8-bit TensorFlow Lite so they run locally on Android CPUs in under 1 second.*
>
> *I also tuned a 70/30 acoustic-dominant late fusion decision rule with sensor guardrails to reject non-coconuts and cadence anomalies, and co-developed the offline SQLite field queue in Flutter that syncs with our Django REST and PostgreSQL backend once connectivity is restored."*

This pitch directly proves:
- You solve real economic problems.
- You understand Edge AI and model quantization.
- You write production mobile code (Flutter).
- You understand full-stack cloud backends (Django).

---

*Authored for Wayne Yzon Nagares • Manuel S. Enverga University Foundation (MSEUF) • 2026*
