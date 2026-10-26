---
title: ray-tracer
image: assets/images/graphics/dragon.png
abstract: A C++ ray tracing renderer written entirely from scratch.
---

As part of [CSE 167](https://cseweb.ucsd.edu/~alchern/teaching/cse167_2021/), I had to write a CPU ray tracer from scratch.  No skeleton code was provided, so the entire project had to be done by hand: command parsing, model loading, ray intersection tests, the works.  The only library we were allowed to use was [FreeImage](https://freeimage.sourceforge.io/).

It was far from perfect, lacking things like acceleration structures and advanced materials.  I recall that the Stanford Dragon, a 50k triangle scene, took over 4 hours to render. I extended the renderer's capabilities with OptiX in the next class, which you can read about [here](/graphics/volume-render) - you can imagine it was quite a relief when my hardware-accelerated run of the same scene managed to render in just a few seconds.

![The 4-hour path trace of the Stanford Dragon.]({{page.image | relative_url}})

Above is the 4-hour path trace of the Stanford Dragon. This was the largest-scale project I had ever worked on at that point in my life, and it's something I remain proud of to this day.
