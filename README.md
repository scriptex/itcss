![Inverted Triangle CSS Visualization](https://github.com/scriptex/itcss/blob/master/itcss.svg)

# ITCSS

[![GitHub release](https://img.shields.io/github/release/scriptex/itcss.svg)](https://github.com/scriptex/itcss/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/itcss.svg)](https://github.com/scriptex/itcss/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/itcss.svg)](https://github.com/scriptex/itcss/commits/master)
[![Build Status](https://travis-ci.org/scriptex/itcss.svg?branch=master)](https://travis-ci.org/scriptex/itcss)
[![npm](https://img.shields.io/npm/dt/itcss.svg)](https://www.npmjs.com/package/itcss)
[![npm](https://img.shields.io/npm/v/itcss.svg)](https://www.npmjs.com/package/itcss)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/itcss/README.md)](https://github.com/scriptex/itcss/)
[![Greenkeeper badge](https://badges.greenkeeper.io/scriptex/itcss.svg)](https://greenkeeper.io/)
[![devDependencies Status](https://david-dm.org/scriptex/itcss/dev-status.svg)](https://david-dm.org/scriptex/itcss?type=dev)
[![dependencies Status](https://david-dm.org/scriptex/itcss/status.svg)](https://david-dm.org/scriptex/itcss)

A starter boilerplate based on the [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) (Inverted Triangle CSS) methodology.

## About

This boilerplate is intented to be used as a starting point in your application. You should use this as a foundation for your CSS and build on top of it.

## Install

```sh
# Via NPM
npm i itcss

# Via Yarn
yarn add itcss
```

## Usage

If you are using a module bundler (such as Webpack, Parcel, Browserify):

```sh
# In your CSS entrypoint
@import 'itcss';

# Or if the above does not resolve, try
@import 'itcss/index.css';
```

There are several predefined variables which you can overwrite:

```css
:root {
	/* Color Variables */
	--color-base: #333;
	--color-white: #fff;
	--color-black: #000;
	--color-action: #ef4c23;

	/* Text Variables */
	--font-sans-serif: sans-serif;
	--font-serif: serif;
	--font-monospace: monospace;
	--font-size-base: 1rem;
	--line-height-base: 1.35;
	--font-size-h1: 2rem;
	--font-size-h2: 1.75rem;
	--font-size-h3: 1.5rem;
	--font-size-h4: 1.25rem;
	--font-size-h5: var(--font-size-base);
	--font-size-h6: 0.75rem;

	/* Transition Variables */
	--timing: 0.4s;
	--easing: ease-in-out;

	/* Misc Variables */
	--shell-width: 75rem;
}
```

**You should place the overwriting variables after the `@import` statement.**

## Supported browsers

This boilerplate is using the most recent version of the CSS specification.
In order to support more browsers you must use a tool such as PostCSS.
The combined and built version of this boilerplate is using the [Postcss-Preset-Env](https://preset-env.cssdb.org/) in `stage: 0`.
This means that you can use the most recent CSS features and be sure that they will work older browsers.

**The combined and built version of this boilerplate has been tested and works in all evergreen browsers (Chrome, Firefox, Edge, Opera, Safari, Brave, Vivaldi, iOS Safari, Chrome on Android, Samsung Internet) and IE 10+.**

In order to do so in your setup, please refer to the [`postcss.config.js`](./postcss.config.js) file.

## Available CSS selectors and their purpose

### Settings

### Tools

### Generic

### Elements

### Objects

### Components

### Utilities

## LICENSE

MIT
