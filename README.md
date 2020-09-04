![Inverted Triangle CSS Visualization](https://raw.githubusercontent.com/scriptex/itcss/master/itcss.svg?sanitize=true)

# ITCSS

[![GitHub release](https://img.shields.io/github/release/scriptex/itcss.svg)](https://github.com/scriptex/itcss/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/itcss.svg)](https://github.com/scriptex/itcss/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/itcss.svg)](https://github.com/scriptex/itcss/commits/master)
[![Build Status](https://travis-ci.com/scriptex/itcss.svg?branch=master)](https://travis-ci.com/scriptex/itcss)
[![npm](https://img.shields.io/npm/dt/itcss.svg)](https://www.npmjs.com/package/itcss)
[![npm](https://img.shields.io/npm/v/itcss.svg)](https://www.npmjs.com/package/itcss)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/itcss/README.md)](https://github.com/scriptex/itcss/)

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
	--color-primary: #fff;
	--color-secondary: #000;
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

## Available files, selectors, variables and their usage

### Settings

-   `_colors.css` - contains CSS custom properties declared to the `:root` node for all colors
-   `_text.css` - contains CSS custom properties declared to the `:root` node for all font settings
-   `_transitions.css` - contains CSS custom properties declared to the `:root` node for transition duration and timing function
-   `_variables.css` - contains CSS custom properties declared to the `:root` node for all other variables/settings

### Tools

-   `_chevron.css` - a mixin for a directional arrow icon

	*Usage:*

	```css
	@mixin chevron
		/* width and height */ 2rem,
		/* border width */ 0 0 1px 1px,
		/* border color */ var(--color-action),
		/* margin */ -5px 0 0 0.5em,
		/* rotation */ -135deg;
	```

-   `_flexbox.css` - a set of mixins for flexbox

	*Contains three mixins:*

	```css
	/* General purpose flex container */
	@mixin flex
		/* align-items */ center
		/* justify-content */ flex-end;

	/* Flex container with flex-direction set to "row" */
	@mixin flex-row
		/* wrap */ no-wrap
		/* align-items */ center
		/* justify-content */ flex-end;

	/* Flex container with flex-direction set to "column" */
	@mixin flex-column
		/* wrap */ no-wrap
		/* align-items */ center
		/* justify-content */ flex-end;
	```

-   `_media-queries.css` - mixins for all supported media queries

	*Custom media queries:*

	```css
	/* (max-width: 1439px) */
	@media (small-desktop) {}

	/* (min-width: 1279px) */
	@media (desktop-only) {}

	/* (max-width: 1279px) */
	@media (tablet-landscape) {}

	/* (min-width: 1023px) and (max-width: 1279px) */
	@media (tablet-landscape-only) {}

	/* (max-width: 1023px) */
	@media (tablet-portrait) {}

	/* (min-width: 767px) and (max-width: 1023px) */
	@media (tablet-portrait-only) {}

	/* (max-width: 767px) */
	@media (mobile) {}

	/* (prefers-reduced-motion: reduce) */
	@media (reduced-motion) {}

	/* hover support */
	@media (hover) {};
	```

-   `_mixins.css` - all other mixins

	*Available mixins:*

	```css
	/* absolutely positions an element with known dimensions in the center of their relative parent element */
	@mixin centered;
	```

### Generic

-   `_form-elements.css` - default styles for form elements
-   `_reset.css` - additional browser reset and normalize (normalize.css is also included)
-   `_transitions.css` - default transitions for focusable/active elements

### Elements

-   `_document.css` - default styles for the `body` element
-   `_headings.css` - default styles for all h\* (h1 - h6) tags
-   `_links.css` - default styles for anchors
-   `_texts.css` - default styles for text elements

### Objects

-   `_grid.css` - a grid system

	*Available selectors are:*

	```css
	/* defines a grid container */
	.o-grid {}

	/* defines a grid item */
	.o-grid__item {}

	/* specify a grid item's size */
	.o-grid__item--1of2 {}
	.o-grid__item--1of4 {}
	.o-grid__item--1of3 {}
	.o-grid__item--2of3 {}
	.o-grid__item--1of5 {}
	.o-grid__item--1of6 {}
	```

-   `_main.css` - styles for the `main` element

	*Available selectors are:*

	```css
	/* defines the main content. used with <main> element */
	.o-main {}
	```

-   `_shell.css` - styles for the site container

	*Available selectors are:*

	```css
	/* defines the site container */
	.o-shell {}

	/* defines the site container as flex container */
	.o-shell--flex {}

	/* makes the site container take the whole browser width */
	.o-shell--fluid {}
	```

-   `_wrapper.css` - styles for the site wrapper

	*Available selectors are:*

	```css
	/* defines the parent container of all other elements. usually the only child of the <body> element */
	.o-wrapper {}
	```

### Components

-   `_btn.css` - default styles for the buttons

	*Available selectors are:*

	```css
	/* default styles for a button */
	.c-btn {}

	/* makes the button fill its parent's width */
	.c-btn--block {}
	```

-   `_list.css` - default styles for lists. A list is an element with a classname which starts with `c-list`

### Utilities

-   `_align.css` - alignment class utilities

	*Available selectors are:*

	```css
	/* align to the left */
	.alignleft {}

	/* align to the right */
	.alignright {}

	/* clear the alignment */
	.alignnone {}

	/* clear the alignment and center horizontally */
	.aligncenter {}
	```

-   `_fullsize-background.css` - helper for background image

	*Available selectors are:*

	```css
	/* makes the element's background image take the whole size of the element using "background-size: cover" */
	.fullsize-background {}
	```

-   `_hidden.css` - helper class/attribute for hidden elements

	*Available selectors are:*

	```css
	.hidden,
	[hidden] {}
	```

-   `_preferences.css` - contains user preferences settings such as `reduced-motion` or `prefers-color-scheme` preferences.

-   `_responsive-utilities.css` - helpers for showing/hiding elements on different resolutions. For resolutions reference please check the media queries section.

	*Available selectors are:*

	```css
	.visible-xs-block {}
	.visible-xs-inline {}
	.visible-xs-inline-block {}
	.visible-xs-flex {}
	.visible-xs-inline-flex {}
	.visible-sm-block {}
	.visible-sm-inline {}
	.visible-sm-inline-block {}
	.visible-sm-flex {}
	.visible-sm-inline-flex {}
	.visible-md-block {}
	.visible-md-inline {}
	.visible-md-inline-block {}
	.visible-md-flex {}
	.visible-md-inline-flex {}
	.visible-lg-block {}
	.visible-lg-inline {}
	.visible-lg-inline-block {}
	.visible-lg-flex {}
	.visible-lg-inline-flex {}

	.hidden-xs {}
	.hidden-sm {}
	.hidden-md {}
	.hidden-lg {}
	```

-   `_text-align.css` - text alignment utilities

	*Available selectors are:*

	```css
	/* align text to the left */
	.text-left {}

	/* align text to the center */
	.text-center {}

	/* align text to the right */
	.text-right {}
	```

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fitcss&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
