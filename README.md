# [fetzu.ch](https://fetzu.ch)
[![Update content](https://github.com/fetzu/fetzu.ch-website/actions/workflows/update-content.yml/badge.svg?branch=main)](https://github.com/fetzu/fetzu.ch-website/actions/workflows/update-content.yml)

This is how ~~the sausage~~ fetzu.ch is made: a (or, rather, one of two) [GitHub Action](.github/workflows/update-content.yml) pulls the content from a private content repo, commits the changes as "Content Manager" which are then built and deployed over [CloudFlare Pages](https://fetzu-ch-website.pages.dev). Yes, it's that easy.   

Why not do it all accross GitHub (deploy, build, and host)? I'm not sure, [but it's not that I don't know how](https://github.com/marmotteproductions/website/blob/main/.github/workflows/build-deploy.yml).

## URLs

Blog posts are markdown files named `YYYY-MM-DD-MyPost.md`: Hugo takes the date from the file name and the post lands at `/blog/YYYY/MM/DD/mypost/`. Each post also answers on `/blog/mypost/` and on the pre-2026 `/blog/YYYYMMDD_mypost/` form, courtesy of a [`_redirects` file](layouts/home.redirects) Hugo generates for Cloudflare at build time. Extra names can be declared per post with `aliases` in the front matter (see [the archetype](archetypes/post.md)): a bare name gets both the dated and dateless URL, a path starting with `/` is used verbatim. `/blog/YYYY/`, `/blog/YYYY/MM/` and `/blog/YYYY/MM/DD/` list the posts of that year, month or day, built by a [content adapter](content-extra/blog/_content.gotmpl) that lives in this repo and gets union-mounted into the content submodule (so the content repo stays content-only). Slugs have to stay unique for the dateless shortcuts to make sense; on a clash, the older post wins.

## Building

The site targets Hugo 0.165.0 (anything below 0.158 will not do: the archives need content adapters, the feeds need `.Language.Locale`). Cloudflare Pages needs `HUGO_VERSION=0.165.0` set in the project's build environment, otherwise it falls back to its default and the build fails. The sam theme pipes the CSS through PostCSS, so `npm install` once before `hugo server`.
