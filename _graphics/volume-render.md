---
title: volume-render
abstract: An OptiX-accelerated extension of the ray tracer above, with added volume ray marching functionality.
image: graphics/media/final-images/volumeshadow.png
fit: contain
crop: top
---

In [CSE 168](https://cseweb.ucsd.edu//~viscomp/classes/cse168/sp21/168.html), I teamed up with the amazing Joseph Warmus [[LinkedIn]](https://www.linkedin.com/in/joseph-warmus947/)[[Github]](https://github.com/j-warmus) to improve the simple [ray tracer](/graphics/ray-tracer) from last year's class.  We moved from the CPU implementation to Nvidia's OptiX framework, taking full advantage of its hardware acceleration capabilities.  Over the course of the semester, we extended the renderer with advanced functionality, converting it to a full-featured path tracer with Monte Carlo sampling, importance sampling, and support for GGX microfacet materials.

The final project, unlike earlier assignments, had us propose and implement a unique modification to the renderer (which had been built to achieve the same goals as everyone else's until that point).  We chose to implement single-scattering homogeneous and heterogeneous volumetric rendering, which you can read about in full detail on our [project's website](https://vrjw168.wordpress.com/final-project/).