---
title: "An example post (lives in _drafts, so it isn't published)"
subtitle: A template showing what posts can do.
tags: [meta]
math: true # load KaTeX for $inline$ and $$display$$ math
---

Drafts in `_drafts/` are only rendered locally with `bundle exec jekyll serve --drafts`.
To publish, move the file to `_posts/` and name it `YYYY-MM-DD-some-title.md`.

## Math

Write math between `$$ … $$`. Inside a sentence it renders inline, like a chain of
thought of length $$T$$, and on its own paragraph (blank lines around it) it is displayed:

$$
\Pr[\text{success}] \;\ge\; 1 - e^{-\Omega(T)}
$$

(Single `$x$` also works, but `$$` keeps Markdown from eating underscores like `a_1`.)

## Code

```python
def think(x, steps):
    for _ in range(steps):
        x = step(x)
    return x
```

> Blockquotes look like this, handy for quoting a paper or a friend.

And footnotes work too.[^1]

[^1]: Like this one.
