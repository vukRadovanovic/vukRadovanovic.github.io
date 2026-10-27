---
title: pendulum-mod
image: audio/media/pendulum.gif
fit: contain
crop: top
abstract: A double pendulum simulation from scratch in Pure Data, used to generate continouous random modulation signals.
---

![Pendulum patch](/audio/media/double-pendulum.png)

For the final project for MUS171, we had to propose a unique project to the teacher so that no two projects were alike.  What I landed on was a fun combination of some of my favorite interests - graphics, physics, and of course, music production.  I wanted to create a physics simulation that would drive modulation parameters, and the chaos of a double pendulum seemed perfect for that.

I implemented the Runge-Kutta method, as documented on [the web simulation that inspired the project](https://www.myphysicslab.com/pendulum/double-pendulum-en.html).  The patch seems quite simple in hindsight, as most things do, but I remember it being a huge effort that spanned several days, if not weeks.  It was my first attempt at using Gem, the graphics library for Pd.  Getting familiar with that cost me a day or two of work before I could even get into the weeds of the actual simulation.

As for the simulation...

![Sim code](/audio/media/sim-code.png)

...it was a bit of a mess, but straightforward enough to follow the formulae on the website above.  The toughest part was, surprisingly, variable management: organizing all of my sends/receives, and tracking which simulation variables corresponded to which expr variables, turned out to be very human-error-prone.  More time than I would like to admit was spent on finding which variables were going into the wrong inlets!

In the end, though, I was left with a fun little simulation, all running natively in Pd without any external physics sim libraries.  If you'd like to try it out for yourself, you can grab the patch from [my Pd projects repo](https://github.com/vukRadovanovic/pd-projects).

![Pendulum gif](/audio/media/pendulum.gif)
*wheeee*