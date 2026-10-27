---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
custom_js: [popup]
---

Hi, welcome to my website!

If you're interested, you can check out<br>some of my work using the links above.

Or, if you'd like to chat about anything,<br>head over to the [about](/about) section to find my<br>contact info.


{% capture body %}
My paper, *Physically Based Rendering in the Latent Space*,
was recently presented at Pacific Graphics 2026!
{% endcapture %}
{% include popup.html x=667 y=256 title="news" content=body %}


{% capture body %}
![latent cbox]({{ 'research/media/latent-cbox.gif' | relative_url }})
{% endcapture %}
{% include popup.html x=497 y=411 title="cbox" content=body class="image-popup" %}


{% capture body %}
Thank you for visiting!
{% endcapture %}
{% include popup.html x=100 y=560 title="thanks" content=body %}
