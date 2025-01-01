# React + TypeScript + Vite + MantineUI + TailwindCSS + Vitest

## About

This repository contains the necessary features for TailwindCSS and MantineUI to be used together. Specifically, modifications to `./src/index.css` and the `MantineProvider` in `./src/main.tsx`. Using the `@layer` directive, Tailwind's base styles will be overwritten by MantineUI's style whereas Tailwind components and utilities will take highest priority in the root layer.

Integration with Vitest has also been added.

## Versions

- React 18.3.1
- Mantine 7.14.3
- TailwindCSS 3.4.16
- Vite 6.0.1
- Vitest 2.1.8

Credits to [realfresh](https://github.com/orgs/mantinedev/discussions/1672#discussioncomment-11412031)
