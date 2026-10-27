---
title: heterodyne
abstract: An 80-voice heterodyne synthesizer.
image: audio/media/heterodyne-patch.png
fit: contain
crop: top
---

For this project, I implemented an older, less commonly used technique.  I used a bank of 80 [heterodyne](https://en.wikipedia.org/wiki/Heterodyne) frequency analyzers, paired with 80 sine oscillator voices of corresponding frequencies.  This leads to a pretty interesting-sounding approximation of the original signal.

I also included some controllable filtering of those 80 voices, such that only voices of selected semitones would be enabled.  That way, you could input a chord, and then only the synths corresponding to that frequency would respond to the input signal - almost like a coarse tuned resynthesis of the original sound.

You can watch a short demo video here:
<video src="{{ '/audio/media/heterodyne.mp4' | relative_url }}" controls></video>

Or, if you'd like to try it out for yourself, you can check out the source code at [my Pd projects GitHub repo](https://github.com/vukRadovanovic/pd-projects).