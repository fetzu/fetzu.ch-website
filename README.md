# [fetzu.ch](https://fetzu.ch)
[![Update content](https://github.com/fetzu/fetzu.ch-website/actions/workflows/update-content.yml/badge.svg?branch=main)](https://github.com/fetzu/fetzu.ch-website/actions/workflows/update-content.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/af6cb19b-4723-4388-a3ae-e2526c3d9ff1/deploy-status)](https://app.netlify.com/sites/fetzuch-main/deploys)

This is how ~~the sausage~~ fetzu.ch is made: a (or, rather, one of two) [GitHub Action](.github/workflows/update-content.yml) pulls the content from a private content repo, commits the changes as "Content Manager" which are then built and deployed over [Netlify](https://app.netlify.com/sites/fetzuch-main/deploys). Yes, it's that easy.   

Why not do it all accross GitHub (deploy, build, and host)? I'm not sure, [but it's not that I don't know how](https://github.com/marmotteproductions/website/blob/main/.github/workflows/build-deploy.yml).
