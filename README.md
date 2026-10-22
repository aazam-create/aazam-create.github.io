<div align="center">

# Amame Aazam — Portfolio

**Full-Stack Developer (MERN) · Java & DSA · AI/ML**

Personal portfolio built with React, TypeScript, and Vite. It brings together my selected projects, technical skills, achievements, education, certifications, and contact links in a responsive, accessible interface.

[Visit the portfolio](https://amame-aazam.github.io/)

</div>

---

## About

I'm a Computer Science and Engineering student at I.K. Gujral Punjab Technical University, interested in building practical full-stack applications and exploring AI-driven development.

This site is designed to make it easy to explore my work, read the technical context behind selected projects, and access my resume and certificates.

## Highlights

- Responsive layout for mobile, tablet, and desktop
- Accessible navigation, keyboard support, and reduced-motion-friendly interactions
- Project summaries with implementation notes and links to source/live demos
- Downloadable resume and certificates
- Lightweight static build with React, TypeScript, and Vite

## Tech stack

- **UI:** React 19, TypeScript
- **Build:** Vite 6
- **Icons:** Lucide React
- **Deployment:** GitHub Pages with GitHub Actions

## Selected projects

| Project | What it is | Links |
| --- | --- | --- |
| **ClassMark** | Role-based classroom management app using React Native, Firebase Authentication, and Firestore. | [Source](https://github.com/amame-aazam/Class-Mark) |
| **SmartRail — IRCTC 2.0** | React and TypeScript travel-booking interface prototype. The live site is a demo, not an official IRCTC service. | [Source](https://github.com/amame-aazam/IRCTC) · [Live demo](https://irctc-2-0-g.vercel.app/) |

## Run locally

### Requirements

- Node.js 20 or newer
- npm

### Setup

```bash
git clone https://github.com/amame-aazam/amame-aazam.github.io.git
cd amame-aazam.github.io
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

### Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Deploy to GitHub Pages

The included workflow at `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages whenever changes are pushed to `main`.

1. Create a **public** GitHub repository named `amame-aazam.github.io`.
2. Push this project to the repository's `main` branch.
3. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Check the **Actions** tab and wait for the Pages deployment workflow to finish.
5. Visit **`https://amame-aazam.github.io/`**.

GitHub Pages may take a few minutes to publish the first deployment. Later pushes to `main` deploy automatically.

## Project structure

```text
.
├── public/
│   ├── certificates/   # Downloadable certificates
│   ├── images/         # Profile images and favicon
│   └── resume/         # Downloadable resume
├── src/
│   ├── App.tsx         # Portfolio sections and content
│   ├── main.tsx        # React entry point
│   ├── polish.css      # Portfolio visual refinements
│   └── style.css       # Base styles
├── .github/workflows/  # GitHub Pages deployment
├── index.html
└── package.json
```

## Connect

- **Email:** [amameaazam@gmail.com](mailto:amameaazam@gmail.com)
- **LinkedIn:** [amame-aazam](https://www.linkedin.com/in/amame-aazam/)
- **GitHub:** [amame-aazam](https://github.com/amame-aazam)
- **LeetCode:** [Aazam07](https://leetcode.com/u/Aazam07/)

---

<div align="center">
  Built with React, TypeScript, and Vite · © 2026 Amame Aazam
</div>
