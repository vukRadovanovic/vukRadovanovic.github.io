---
layout: page
title: graphics
permalink: /graphics/
subnav: graphics
---

### My computer graphics projects

<div class="projects">
{% for p in site.graphics %}
  <div class="project">
    <!-- <img src="{{ p.image | relative_url }}" alt=""> -->
    <img src="{{ p.image | relative_url }}" alt="" style="object-fit: {{ p.fit | default: 'cover' }}; object-position: {{ p.crop | default: 'center' }}">
    <div>
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      {{ p.abstract | markdownify }}
    </div>
  </div>
{% endfor %}
</div>