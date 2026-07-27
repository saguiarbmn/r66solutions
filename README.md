# R66 Solutions Website

Marketing site for [R66 Solutions](https://r66solutions.com), built with Next.js and deployed as a static site on **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Produces a static export in the `out/` directory (`output: 'export'`).

## Deploy to GitHub Pages

1. Create a public GitHub repository and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the **Deploy Next.js site to Pages** workflow manually).

The site will be available at:

```text
https://<github-username>.github.io/<repository-name>/
```

The workflow sets `PAGES_BASE_PATH` automatically so assets resolve under the project subpath.
