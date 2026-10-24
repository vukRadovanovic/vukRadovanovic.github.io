---
layout: page
title: audio
permalink: /audio/
subnav: audio
---

### My audio projects

<div class="projects">
{% for p in site.audio %}
  <nav class="project">
    <img src="{{ p.image | relative_url }}" alt="" style="object-fit: {{ p.fit | default: 'cover' }}; object-position: {{ p.crop | default: 'center' }}">
    <div>
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      {{ p.abstract | markdownify }}
    </div>
  </nav>
{% endfor %}
</div>