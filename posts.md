---
title: posts
permalink: /posts/
subnav: posts
---

<ul class="post-list">
{% for post in site.posts %}
  <li><a href="{{ post.url | relative_url }}"><em>[{{ post.date | date: "%d-%m-%Y" }}] {{ post.title }}</em></a>: {{ post.excerpt | strip_html | strip }}</li>
{% endfor %}
</ul>
