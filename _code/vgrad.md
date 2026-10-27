---
title: vgrad
abstract: A Rust-based reimplementation of Karpathy's micrograd.
---

I wrote [vgrad](https://github.com/vukRadovanovic/vgrad), a Rust-based reimplementation of Andrej Karpathy's micrograd.

It's super simple, CPU-only and not really useful for production code.  However, its implementation is based on a self-referential graph, so I was pushed into learning how to deal with such structures in a Rust-friendly way.  Some conveniences that I take for granted with Python, that the tutorial glossed over in mere seconds, took quite a bit more care and effort to implement.  It was fun!

In short, the `Graph` is recorded by pushing `Node`s onto a Vec.  Each `Node` holds the actual data, gradient, and operation enum.  A `Value` struct, acting as the frontend, is used to hold a reference to the `Graph` and the index of the node.  All operator overloading is implemented for it, so the syntax for a manually implemented neuron looks like this:

```
#[test]
fn backprop_2() {
    let g = Graph::new();
    let x1 = g.value(2.0);
    let x2 = g.value(0.0);
    let w1 = g.value(-3.0);
    let w2 = g.value(1.0);
    let b = g.value(6.8813);
    let x1w1 = x1 * w1;
    let x2w2 = x2 * w2;
    let x1w1x2w2 = x1w1 + x2w2;
    let n = x1w1x2w2 + b;

    // replace tanh!
    let e = (2.0 * n).exp();
    let o = (e - 1.0) / (e + 1.0);

    o.backward();

    assert!(x1.inspect().grad - (-1.5) < 1e-6);
}
```

I've been an imperative programmer for most of my life, so it's been quite a bit of fun to make use of Rust's functional features.  I've found that they're particularly elegant and useful for these sorts of machine learning use cases where simple operations are being scaled up to the extreme.  Towards the end of the micrograd tutorial, where a Value is scaled to a Neuron, then to a Layer, then to a full MLP, almost every one of my methods was written in a functional style.  Take, for example, the forward() function of a single Neuron.

```
pub fn forward(&'g self, x: &Vec<Value<'g>>) -> Value<'g> {
    let act: Value = self
        .w
        .iter()
        .zip(x.iter())
        .map(|(&w, &x)| w * x)
        .fold(self.b, |a, wx| a + wx);

    act.tanh()
}
```

Maybe my favorite piece of code from the whole project, and it's super simple and far more intuitive to me than reading an imperative loop would be.

It's the most complete and toughest Rust project I've written yet, though things may get more complex soon, with my goal of building a real-time physics-based renderer using Rust and Vulkan.  You can read about that effort [here](/graphics/wip-seere).