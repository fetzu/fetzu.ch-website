---
title: "{{ replaceRE `^\d{4}-\d{2}-\d{2}-` "" .Name | replace "-" " " | title }}"
showDate: true
draft: true
tags: ["blog"]
# The file name does the work: 2026-08-19-MyPost.md lands the post at
# /blog/2026/08/19/mypost/ with /blog/mypost/ and /blog/20260819_mypost/ as 301s.
# No date up here: the file name carries it (posts get 00:00; if you ever need an
# exact timestamp, name the file without a date and put "date:" back).
# Aliases: a bare name answers on /blog/YYYY/MM/DD/name/ and /blog/name/;
# a path starting with "/" is used as-is.
#aliases: ["myothername"]
---
