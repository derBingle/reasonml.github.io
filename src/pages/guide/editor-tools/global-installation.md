---
title: Global Installation
order: 10
---

**Before setting up the editor plugins**, you need to install the global binaries needed by them.

### (Recommended) Through Npm/Yarn

| Platform  | Install command
|-----------|-------------------------------------------------------------------------------------------------
| **OSX**   | `npm install -g https://github.com/reasonml/reason-cli/archive/beta-v-1.13.6-bin-darwin.tar.gz`
| **Linux** | `npm install -g https://github.com/reasonml/reason-cli/archive/beta-v-1.13.6-bin-linux.tar.gz`

**`reason-cli` currently doesn't work on Windows**, but it's not a hard requirement for using Reason; you still have great CLI build system diagnosis messages through BuckleScript, whose npm global package [`bs-platform`](https://www.npmjs.com/package/bs-platform) does work on Windows.

### (Alternative) Through OPAM

[OPAM](https://opam.ocaml.org) is the native package manager for OCaml. If you come from OCaml and don't have npm/yarn, you can optionally install this way, but be careful!

**Make sure you're on OCaml `4.02.3`**.

```
opam update
opam add reason.1.13.6
opam add merlin.2.5.4
```

### Troubleshooting

If your editor isn't behaving as expected with the above install, do the following:

```
which ocamlmerlin refmt ocamlmerlin-reason # It should spit out three paths that contain the word `reason-cli`.
ocamlmerlin -v # should say "The Merlin toolkit version 2.5.x, for Ocaml 4.02.3"
```

Please verify that your installed OCaml version is `4.02.x` and that Merlin is `>=2.5.1`.
