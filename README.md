# [fetzu.ch](https://fetzu.ch)
[![Update content](https://github.com/fetzu/fetzu.ch-website/actions/workflows/update-content.yml/badge.svg?branch=main)](https://github.com/fetzu/fetzu.ch-website/actions/workflows/update-content.yml)

This is how ~~the sausage~~ fetzu.ch is made: a (or, rather, one of two) [GitHub Action](.github/workflows/update-content.yml) pulls the content from a private content repo, commits the changes as "Content Manager" which are then built and deployed over [CloudFlare Pages](https://fetzu-ch-website.pages.dev). Yes, it's that easy.   

Why not do it all accross GitHub (deploy, build, and host)? I'm not sure, [but it's not that I don't know how](https://github.com/marmotteproductions/website/blob/main/.github/workflows/build-deploy.yml).
