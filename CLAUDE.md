# tictacjoe.github.io — Site Guide

Live at: https://tictacjoe.github.io/

## Architecture

Pure static HTML site — no Jekyll, no build step for the main site.
GitHub Actions builds and deploys everything on push to `master`.

## Directory Structure

```
/                        → static HTML pages (served as-is)
  index.html             → home page
  blog/
    index.html           → blog post list (update manually when adding posts)
    just-four-ducks-for-now.html  → blog post
  css/main.css           → site-wide stylesheet
  pics/                  → images
  family-tree/           → Vite + React app (SOURCE — not served directly)
    src/App.jsx          → the entire family tree component
    vite.config.js       → base: '/family-tree/'
    dist/                → built output (gitignored, built by CI)
  .github/workflows/
    deploy-family-tree.yml  → builds family-tree app + assembles + deploys
```

## How Deployment Works

Push to `master` → GitHub Action runs → builds Vite app → copies everything
into `_site/` → deploys via `actions/deploy-pages` → live in ~1 min.

The action assembles the site by:
1. Copying all static files (HTML, CSS, pics, etc.) into `_site/`
2. Building `family-tree/` Vite app and copying dist into `_site/family-tree/`

## Adding Content

- **New page**: Add an HTML file anywhere, link to it from `index.html`
- **New blog post**: Add HTML file in `blog/`, add link to `blog/index.html`
- **Update family tree**: Edit `family-tree/src/App.jsx` — push triggers rebuild

## Page template (copy for new pages)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>PAGE TITLE</title>
    <link rel="stylesheet" type="text/css" href="/css/main.css">
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="https://github.com/tictacjoe">GitHub</a></li>
      </ul>
    </nav>
    <div class="container">
      <!-- content here -->
    </div>
    <footer>
      <ul>
        <li><a href="mailto:tictacjoe@gmail.com">email</a></li>
        <li><a href="https://github.com/tictacjoe">github.com/tictacjoe</a></li>
      </ul>
    </footer>
  </body>
</html>
```
