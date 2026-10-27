---
title: latent-render
image: research/media/latent-cbox.gif
fit: contain
crop: top
abstract: For my first research paper, I attempted to render directly to the latent space of a pretrained VAE.
---

My first research project was a ton of fun to work on.  The goal was to render into a compressed representation of an original RGB image, rather than rendering the RGB itself.

Visual (image/video) generative models are pretty heavy on compute, so the most successful ones usually don't operate directly in RGB.  They use a model referred to as a Variational Autoencoder or VAE for short, which consists of an Encoder and Decoder.  The Encoder can take an RGB image, and output a latent distribution that is compressed in resolution, but expanded in channel count.  (e.g. 1024x1024x3, where 3 is RGB channels, gets encoded to 128x128x16, for Stable Diffusion 3.5.)  The Decoder can take a latent and then reconstruct the RGB.

![Lamp latent](/research/media/latent-lamp.png)
An example of the latent space.  Green is more +, red is more -, black is 0.

Reaching those latents is the goal!  In short, we modified a renderer to support 16 channels, and made some modifications to the rendering equation to better represent all of the common behaviors of the latents as well.

The end result is a system that can take any 3d scene, render it from one view + encode to get a single ground-truth latent, then find ideal scene parameters to generate new latents from new camera angles or with changes made to the scene (light movement, object movement).

You can find more information on the [latent rendering project website](https://trinity-graphics.github.io/latent-rendering/), read the paper on [arXiv](https://arxiv.org/abs/2609.21054), or watch the video below.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/C7iy-7N7dNY?si=oEjx3cCI62VnIPvO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Also, our source code is available [here](https://github.com/trinity-graphics/latent-rendering)!