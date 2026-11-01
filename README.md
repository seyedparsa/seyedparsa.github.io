# seyedparsa.github.io

Parsa Mirtaheri's personal site: a small, hand-rolled Jekyll site (no theme) with a warm palette,
light/dark mode, and a koala in the corner.

Pushing to `main` builds the site with GitHub Actions (`.github/workflows/deploy.yml`) and publishes
it to the `gh-pages` branch. Pull requests only run the build as a check.

## Where things live

Most content is plain YAML or Markdown, so you rarely need to touch the layouts.

| What | File |
| --- | --- |
| Home page intro / bio | `index.html` (hero section at the top) |
| "lately" card on home | `_data/now.yml` |
| News on home | `_data/news.yml` |
| Papers (research page + "selected" on home) | `_data/papers.yml` |
| Topic filter chips & colors | `_data/topics.yml` |
| Talks (hidden while empty) | `_data/talks.yml` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` (template in `_drafts/example-post.md`) |
| Beyond page cards | `_data/beyond.yml` |
| Beyond page photos (hidden while empty) | `_data/photos.yml` + images in `assets/img/beyond/` |
| Social links (home + footer) | `_data/socials.yml` |
| What the koala says | `_data/koala.yml` |
| Navigation tabs | `nav:` in `_config.yml` |
| Colors, fonts, spacing | tokens at the top of `assets/css/main.scss` |
| Photo / CV | `assets/img/profile.jpg`, `assets/pdf/CV.pdf` |

### Adding a paper

Add an entry to `_data/papers.yml`:

```yaml
- title: "My New Paper"
  authors: [Parsa Mirtaheri, Someone Else]
  venue: International Conference on Learning Representations (ICLR)
  venue_short: ICLR 2026
  year: 2026
  selected: true            # also show it on the home page
  topics: [reasoning, theory]
  tldr: One or two sentences in plain words.
  links:
    arxiv: https://arxiv.org/abs/…
    code: https://github.com/…
  bibtex: |
    @inproceedings{…}
```

### Writing a post

Create `_posts/2026-11-15-my-post.md`:

```markdown
---
title: My post
subtitle: Optional one-liner
tags: [ideas]
math: true   # only if the post uses math
---

Text, **Markdown**, code blocks, and math written between $$ … $$.
```

## Running locally

```bash
bundle install
bundle exec jekyll serve --livereload   # add --drafts to preview _drafts/
```

Then open http://localhost:4000.
