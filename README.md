# Academic personal website

An English-language undergraduate research profile built with Astro, Tailwind CSS 4, and strict TypeScript. The static build produces a homepage and one detail page per project. Fonts and figures ship with the site.

## Local development

Use Node.js 24 and npm. Install the versions in the included lockfile with `npm ci`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server at the URL printed in the terminal |
| `npm run check` | Check Astro templates and TypeScript |
| `npm run build` | Generate the static site in `dist/` |
| `npm run preview` | Serve the most recent production build locally |

From the repository root, run `npm ci` followed by `npm run dev` for local editing. To reproduce the deployment checks locally, run `npm run check` and then `npm run build`.

## Personalize the profile

Edit `src/data/profile.ts`. Replace the name and example email address before sharing the site. Set `avatar` to `'/portrait.jpg'` after adding the image to `public/portrait.jpg`. Set `cv` to `'/cv.pdf'` after adding the PDF to `public/cv.pdf`. A null avatar displays initials. A null CV displays a pending label.

Edit research interests in the same file, homepage prose in `src/pages/index.astro`, and project summaries and notes in `src/data/projects.ts`. Each project uses a stable URL slug and an explicit research or engineering category. Adding a project to the array generates its homepage entry and detail route.

## Appearance

The project notes include small worked examples. Their captions, column headings, and rows live in each project's `example` field. The parity states follow the reference algorithm and the attention weights are illustrative.

Edit the CSS variables in `src/styles/global.css` for the light and dark palettes. The first visit uses the light palette. The theme button stores the visitor’s choice on their device. The analytic surface is an illustration generated at build time in `src/components/Surface.astro`.

## GitHub Pages

The site is configured for the root of `https://von-neumann101.github.io/`. In the repository, open **Settings → Pages → Build and deployment** and select **GitHub Actions**. Commit the project files at the repository root, including `.github/workflows/deploy.yml`, and push to `main`.

A pull request runs the type check and production build. A push to `main` also uploads `dist/` and deploys it. You can rerun deployment from **Actions → Build and deploy academic website → Run workflow** on `main`. Check the deployment job for the published URL. The hosting configuration assumes a user site at the domain root.

[Astro’s GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) · [Tailwind’s Astro guide](https://tailwindcss.com/docs/installation/framework-guides/astro)


