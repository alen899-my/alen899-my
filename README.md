<!-- ╔══════════════════════════  HERO  ══════════════════════════╗ -->
<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=venom&color=0:0d1117,50:1e1b4b,100:00f5a0&height=260&section=header&text=alen899-my&fontSize=68&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Full-Stack%20%C2%B7%20Mobile%20%C2%B7%20Web%20Automation&descSize=20&descAlignY=60" alt="header" />

<a href="https://github.com/alen899-my">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=2800&pause=800&color=00F5A0&center=true&vCenter=true&width=820&height=48&lines=Building+lead-gen+pipelines+with+Vue+3+%2B+Express;Shipping+cross-platform+apps+with+Expo+%26+React+Native;Scraping+the+web+at+speed+with+Playwright;240%2B+commits+deep+into+SpotMe+%F0%9F%9A%80" alt="typing" />
</a>

<br/><br/>

<img src="https://komarev.com/ghpvc/?username=alen899-my&label=PROFILE%20VIEWS&color=00f5a0&style=for-the-badge" />
<img src="https://img.shields.io/github/followers/alen899-my?style=for-the-badge&logo=github&color=7c3aed&labelColor=0d1117" />
<img src="https://img.shields.io/github/stars/alen899-my?style=for-the-badge&logo=github&color=00b4d8&labelColor=0d1117" />
<img src="https://img.shields.io/github/created-at/alen899-my?style=for-the-badge&label=CODING%20ON%20GITHUB%20SINCE&color=f59e0b&labelColor=0d1117" />

<br/><br/>

<img src="./assets/skills-marquee.svg" width="100%" alt="skills marquee" />

</div>

<!-- ╚══════════════════════════════════════════════════════════╝ -->

## 💫 About Me

<div align="center">
  <img src="./assets/terminal.svg" width="720" alt="terminal intro" />
</div>

<br/>

<!-- ✏️ EDIT THESE LINES so they sound like you -->
| | |
|---|---|
| 🔭 **Currently working on** | **Theron** (Maps lead-gen platform) · **SpotMe** (Expo mobile + web app) |
| 🌱 **Currently learning** | Next.js · EAS build pipelines · production-grade Playwright crawling |
| 👯 **Open to collaborate on** | Full-stack & mobile products, automation tooling |
| 🤝 **Looking for help with** | Scaling scrapers, mobile performance, CI/CD |
| 💬 **Ask me about** | Vue 3 + Pinia, Express APIs, Expo/NativeWind, Playwright scraping, Postgres JSONB |
| ⚡ **Fun fact** | I built a stickman platformer whose body literally grows with every level 💪 |

---

## 🚀 Featured Projects

<div align="center">
<a href="https://github.com/alen899-my/Theron"><img width="49%" src="https://github-readme-stats.shion.dev/api/pin/?username=alen899-my&repo=Theron&theme=tokyonight&hide_border=true" /></a>
<a href="https://github.com/alen899-my/spotme"><img width="49%" src="https://github-readme-stats.shion.dev/api/pin/?username=alen899-my&repo=spotme&theme=tokyonight&hide_border=true" /></a>
<a href="https://github.com/alen899-my/workshop"><img width="49%" src="https://github-readme-stats.shion.dev/api/pin/?username=alen899-my&repo=workshop&theme=tokyonight&hide_border=true" /></a>
<a href="https://github.com/alen899-my/agon"><img width="49%" src="https://github-readme-stats.shion.dev/api/pin/?username=alen899-my&repo=agon&theme=tokyonight&hide_border=true" /></a>
</div>

<br/>

<details open>
<summary><h3>🎯 Theron — Google Maps Lead Generation & Pipeline System</h3></summary>

> High-performance Maps lead generation, contact enrichment & pipeline management.
> Search any industry in any location → auto-extract business data → enrich with verified emails & contact channels → manage each lead through a **7-stage workflow pipeline**.

<p>
  <a href="https://github.com/alen899-my/Theron"><img src="https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github" /></a>
  <a href="https://frontend-three-self-98.vercel.app"><img src="https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel" /></a>
  <img src="https://img.shields.io/github/last-commit/alen899-my/Theron?style=for-the-badge&color=00f5a0&labelColor=0d1117" />
</p>

```mermaid
flowchart LR
  U([👤 User]) --> FE["Vue 3 + Vite<br/>Pinia · Tailwind"]
  FE -- REST --> API["Express API<br/>routes · auth · errors"]
  API --> SVC["Services<br/>business logic"]
  SVC --> PW["Playwright Chromium<br/>Maps scroll + email extraction"]
  SVC --> DB[("PostgreSQL<br/>JSONB · Neon / Supabase")]
  PW -- leads --> SVC
```

| Layer | Tech |
|---|---|
| Frontend | Vue 3 Composition API · Vite · Tailwind (pure black/white, Vercel-inspired dark theme) · Pinia · Lucide · IBM Plex Mono + Manrope |
| Backend | Node.js · Express · Playwright Chromium crawler · modular `config / db / middleware / routes / services / utils` |
| Data | PostgreSQL with JSONB + cascade-safe relations (Neon / Supabase / local) |
| Deploy | Frontend → Vercel · Backend → Render / Railway / DigitalOcean |

</details>

<details open>
<summary><h3>📍 SpotMe — Cross-Platform App (Mobile + Web + Admin)</h3></summary>

> A TypeScript Expo app with its own backend and admin panel, exported to the web and deployed on Vercel. Actively developed: **240+ commits**.

<p>
  <a href="https://github.com/alen899-my/spotme"><img src="https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github" /></a>
  <a href="https://spotme-smoky.vercel.app"><img src="https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel" /></a>
  <img src="https://img.shields.io/github/last-commit/alen899-my/spotme?style=for-the-badge&color=00f5a0&labelColor=0d1117" />
  <img src="https://img.shields.io/github/commit-activity/m/alen899-my/spotme?style=for-the-badge&color=7c3aed&labelColor=0d1117" />
</p>

```mermaid
flowchart TB
  subgraph Clients
    APP["Expo / React Native<br/>screens · components · contexts"]
    WEB["Web export<br/>deployed on Vercel"]
    ADM["Admin panel"]
  end
  BE["Backend API"]
  APP --> BE
  WEB --> BE
  ADM --> BE
  CI["GitHub Actions + EAS workflows"] -.-> APP
```

| Area | Tech |
|---|---|
| App | Expo · React Native · TypeScript · file-based `app/` routing · NativeWind (Tailwind for RN) |
| Structure | `screens` · `components` · `contexts` · `constants` · `utils` · `admin` · `backend` |
| Release | EAS builds (`eas.json`, `EAS_WORKFLOW.md`) · Vercel web hosting · GitHub Actions |

</details>

<details>
<summary><h3>🔧 Workshop — Backend + Mobile App + Web Frontend</h3></summary>

A multi-part project with three codebases in one repo: `backend/`, `repairo-app/` (mobile) and `webfrontend/` (web), plus CI in `.github/workflows` and a `check_schema.js` database-schema check script.

<p>
  <a href="https://github.com/alen899-my/workshop"><img src="https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github" /></a>
  <img src="https://img.shields.io/github/last-commit/alen899-my/workshop?style=for-the-badge&color=00f5a0&labelColor=0d1117" />
</p>

<!-- ✏️ Add 1-2 lines about what this app does and its stack -->

</details>

<details>
<summary><h3>🥊 Agon — Stickman Evolution (Game)</h3></summary>

A landscape obstacle platformer starring one large animated stickman: move him directly, jump over traps, punch through walls and reach the exit. **Every completed level increases his strength and visibly grows his shoulders, torso, arms and legs.**

<p>
  <a href="https://github.com/alen899-my/agon"><img src="https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github" /></a>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" />
</p>

Touch-first design: multi-touch **Pointer Events**, landscape orientation locking, and **Playwright phone-emulation tests** for layout and input logic.

</details>

---

## 🧰 Tech Arsenal

<div align="center">

| 🎨 Frontend | 📱 Mobile | ⚙️ Backend | 🗄️ Data & Automation | 🚢 DevOps |
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://skillicons.dev/icons?i=vue,ts,js,tailwind,vite&theme=dark" /> | <img src="https://skillicons.dev/icons?i=react&theme=dark" /><br/><img src="https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white" /> | <img src="https://skillicons.dev/icons?i=nodejs,express&theme=dark" /> | <img src="https://skillicons.dev/icons?i=postgres&theme=dark" /><br/><img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white" /> | <img src="https://skillicons.dev/icons?i=git,github,githubactions,vercel&theme=dark" /> |

</div>

<details>
<summary><b>🔎 Full stack list (detected from my repos)</b></summary>

- **UI:** Vue 3 (Composition API), Pinia, Vite, Tailwind CSS, NativeWind, Lucide icons
- **Mobile:** Expo, React Native, EAS Build, TypeScript
- **Server:** Node.js, Express, JWT-style auth middleware, modular service architecture
- **Data:** PostgreSQL (JSONB), Neon / Supabase
- **Automation:** Playwright Chromium crawling, email extraction, Google Maps scraping
- **Delivery:** Vercel, Render / Railway, GitHub Actions, EAS workflows
- **Testing:** Playwright (phone emulation, layout & input tests)

</details>

---

## 🔴 Live from GitHub

> Everything in this block is rewritten automatically every 6 hours by a GitHub Action.

### 📦 Recently Active Repositories
<!--START_SECTION:repos-->
_Loading… (run the **Update README** workflow once)_
<!--END_SECTION:repos-->

### ⚡ Recent Activity
<!--START_SECTION:activity-->
_Loading… (run the **Update README** workflow once)_
<!--END_SECTION:activity-->

<!--START_SECTION:updated-->
<!--END_SECTION:updated-->

### 🛰️ Repo Health

<div align="center">

| Repo | Last commit | Monthly commits | Top language | Size |
|---|---|---|---|---|
| **Theron** | ![](https://img.shields.io/github/last-commit/alen899-my/Theron?style=flat-square&labelColor=0d1117&color=00f5a0&label=) | ![](https://img.shields.io/github/commit-activity/m/alen899-my/Theron?style=flat-square&labelColor=0d1117&color=7c3aed&label=) | ![](https://img.shields.io/github/languages/top/alen899-my/Theron?style=flat-square&labelColor=0d1117&label=) | ![](https://img.shields.io/github/repo-size/alen899-my/Theron?style=flat-square&labelColor=0d1117&color=0ea5e9&label=) |
| **SpotMe** | ![](https://img.shields.io/github/last-commit/alen899-my/spotme?style=flat-square&labelColor=0d1117&color=00f5a0&label=) | ![](https://img.shields.io/github/commit-activity/m/alen899-my/spotme?style=flat-square&labelColor=0d1117&color=7c3aed&label=) | ![](https://img.shields.io/github/languages/top/alen899-my/spotme?style=flat-square&labelColor=0d1117&label=) | ![](https://img.shields.io/github/repo-size/alen899-my/spotme?style=flat-square&labelColor=0d1117&color=0ea5e9&label=) |
| **Workshop** | ![](https://img.shields.io/github/last-commit/alen899-my/workshop?style=flat-square&labelColor=0d1117&color=00f5a0&label=) | ![](https://img.shields.io/github/commit-activity/m/alen899-my/workshop?style=flat-square&labelColor=0d1117&color=7c3aed&label=) | ![](https://img.shields.io/github/languages/top/alen899-my/workshop?style=flat-square&labelColor=0d1117&label=) | ![](https://img.shields.io/github/repo-size/alen899-my/workshop?style=flat-square&labelColor=0d1117&color=0ea5e9&label=) |
| **Agon** | ![](https://img.shields.io/github/last-commit/alen899-my/agon?style=flat-square&labelColor=0d1117&color=00f5a0&label=) | ![](https://img.shields.io/github/commit-activity/m/alen899-my/agon?style=flat-square&labelColor=0d1117&color=7c3aed&label=) | ![](https://img.shields.io/github/languages/top/alen899-my/agon?style=flat-square&labelColor=0d1117&label=) | ![](https://img.shields.io/github/repo-size/alen899-my/agon?style=flat-square&labelColor=0d1117&color=0ea5e9&label=) |

</div>

---

## 📊 GitHub Analytics

<div align="center">

<img height="190" src="https://github-readme-stats.shion.dev/api?username=alen899-my&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true&rank_icon=github" />
<img height="190" src="https://github-readme-stats.shion.dev/api/top-langs/?username=alen899-my&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true&layout=donut&langs_count=8" />

<img height="170" src="https://streak-stats.demolab.com/?user=alen899-my&theme=tokyo-night&hide_border=true&border_radius=10" />

<img width="100%" src="https://github-readme-activity-graph.vercel.app/graph?username=alen899-my&theme=tokyo-night&hide_border=true&area=true&radius=10&custom_title=Contribution%20Activity" />

</div>

<details>
<summary><b>🧬 Deep metrics (languages · coding habits · 3D calendar)</b></summary>
<br/>
<div align="center">
  <!-- Generated by .github/workflows/metrics.yml (needs METRICS_TOKEN secret) -->
  <img src="./assets/github-metrics.svg" width="100%" />
  <img src="./assets/isocalendar.svg" width="100%" />
</div>
</details>

### 🏆 Trophies

<div align="center">
<img src="https://github-profile-trophy.vercel.app/?username=alen899-my&theme=tokyonight&no-frame=true&no-bg=true&margin-w=12&row=1&column=7" />
</div>

---

## 🐍 Contribution Snake

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/alen899-my/alen899-my/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/alen899-my/alen899-my/output/github-snake.svg" />
  <img alt="contribution snake" src="https://raw.githubusercontent.com/alen899-my/alen899-my/output/github-snake-dark.svg" />
</picture>
</div>

---

## 🎯 Currently Levelling Up

- [x] Ship a full-stack scraping + CRM-style pipeline (**Theron**)
- [x] Publish a cross-platform Expo app to web (**SpotMe**)
- [x] Build and test a touch-first browser game (**Agon**)
- [ ] Master Next.js App Router & server components
- [ ] Production-grade EAS pipelines for store releases
- [ ] Harden crawlers: queues, retries, rate-limits
- [ ] Contribute to open source

---

## ✍️ Dev Quote of the Moment

<div align="center">
<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight" />
</div>

---

## 🤝 Let's Connect

<div align="center">

<a href="https://github.com/alen899-my"><img src="https://img.shields.io/badge/GitHub-alen899--my-181717?style=for-the-badge&logo=github" /></a>
<!-- ✏️ Uncomment + edit:
<a href="https://linkedin.com/in/YOUR-ID"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="mailto:you@email.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a href="https://your-portfolio.com"><img src="https://img.shields.io/badge/Portfolio-00f5a0?style=for-the-badge&logo=vercel&logoColor=black" /></a>
-->

<br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:1e1b4b,100:00f5a0&height=130&section=footer&animation=twinkling" />

</div>
