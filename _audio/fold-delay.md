---
title: fold-delay
image: assets/images/wavefold.png
fit: contain
crop: top
abstract: A feedback delay whose feedback level is controlled by an envelope follower, with soft-clip and wavefolding distortion on the output.
---

My final computer music class was the toughest - we were getting quite low-level, writing custom Pure Data objects in C.  This meant writing proper DSP code, where memory management and sample manipulation all had to operate at real-time speeds.

My final project for this class was a feedback delay with some added functionality.  I had an envelope follower driving the feedback level, so gentler inputs would lead to very little echo, and aggressive inputs would lead to more feedback.  When that increased feedback would exceed an amplitude of 1, wavefolding distortion would kick in.

A similar effect *could* be implemented in a native Pd patch fairly easily, but I wouldn't have gotten the valuable DSP experience I got otherwise.  This way, I got to deal with a circular buffer read/write scheme, and the experience of writing DSP primitives like an envelope follower by hand.  You can find my custom Pd tilde object at my [Pd projects repo](https://github.com/vukRadovanovic/pd-projects).