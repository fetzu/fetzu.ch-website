---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
showDate: true
draft: true
tags: ["blog"]
# Name the file YYYYMMDD_slug.md and the post also answers on /blog/YYYY/MM/DD/slug/
# and /blog/slug/ (SEE layouts/home.redirects). Extra names go below, absolute paths
# only: Hugo builds a meta-refresh page and Cloudflare a proper 301 for each.
#aliases: ["/blog/some-other-name/"]
---
