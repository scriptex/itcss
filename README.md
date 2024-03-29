![Inverted Triangle CSS Visualization](https://raw.githubusercontent.com/scriptex/itcss/master/itcss.svg?sanitize=true)

# ITCSS

[![Travis CI](https://travis-ci.com/scriptex/itcss.svg?branch=master)](https://travis-ci.com/scriptex/itcss)
[![Github Build](https://github.com/scriptex/itcss/workflows/Build/badge.svg)](https://github.com/scriptex/itcss/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/itcss/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/itcss&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-itcss-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/itcss/badge)](https://www.codefactor.io/repository/github/scriptex/itcss)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/itcss/README.md?pixel)](https://github.com/scriptex/itcss/)

> A starter boilerplate based on the [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) (Inverted Triangle CSS) methodology.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/itcss?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/itcss?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/itcss?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/itcss)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/itcss?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/itcss?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/itcss?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/itcss?style=plastic)

## About

> ITCSS is a mobile-first, responsive, battle-tested CSS framework based on the ITCSS methodology utilizing the BEM methodology.

This boilerplate is intented to be used as a starting point in your application. You should use this as a foundation for your CSS and build on top of it.

If you want to use the full capabilities of this boilerplate such as variables, mixins, etc., then you should include it in your PostCSS files.

You should also install the required PostCSS plugins and configure your PostCSS environment following the configuration file [here](https://github.com/scriptex/itcss/blob/master/postcss.config.js)

You can also use the build which is plain CSS but lacks mixins, custom media queries and other useful tools.

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

	/* Spacing between grid items */
	$gap: 0.5rem;

	/* Number of columns in the grid */
	$columns: 12;

	/* The maximum width of the shell container */
	--shell-width: 75rem;

	/* The left and right padding of the shell container */
	$shell-gap: 1rem;

	/* A list of responsive breakpoint names */
	--breakpoints: (xs, sm, md, lg, xl);

	/* A list of display properties */
	--displays: (block, inline, inline-block, flex, inline-flex);

	/* A list of text alignment properties */
	--alignments: (center: center, right: right, left: left, justify: justify);
}
```

**You should place the overwriting variables after the `@import` statement.**

## Supported browsers

This boilerplate is using the most recent version of the CSS specification.
In order to support more browsers you must use a tool such as PostCSS.
The combined and built version of this boilerplate is using the [Postcss-Preset-Env](https://preset-env.cssdb.org/) in `stage: 0`.
This means that you can use the most recent CSS features and be sure that they will work older browsers.

**The combined and built version of this boilerplate has been tested and works in all evergreen browsers (Chrome, Firefox, Edge, Opera, Safari, Brave, Vivaldi, iOS Safari, Chrome on Android, Samsung Internet) and IE 10+.**

In order to do so in your setup, please refer to the [`postcss.config.js`](https://github.com/scriptex/itcss/blob/master/postcss.config.js) file.

## Available files, selectors, variables and their usage

### Settings

-   `_colors.css` - contains CSS custom properties declared to the `:root` node for all colors
-   `_text.css` - contains CSS custom properties declared to the `:root` node for all font settings
-   `_transitions.css` - contains CSS custom properties declared to the `:root` node for transition duration and timing function
-   `_variables.css` - contains CSS custom properties declared to the `:root` node for all other variables/settings

### Tools

-   `_chevron.css` - a mixin for a directional arrow icon

    _Usage:_

    ```css
    /* prettier-ignore */
    @mixin chevron
    	2rem /* width and height */,
    	0 0 1px 1px /* border width */,
    	var(--color-action) /* border color */,
    	-5px 0 0 0.5em /* margin */,
    	-135deg /* rotation */;
    ```

-   `_flexbox.css` - a set of mixins for flexbox

    _Contains several mixins:_

    ```css
    /* General purpose flex container */
    /* prettier-ignore */
    @mixin flex
    	center /* align-items */,
    	flex-end /* justify-content */,
        wrap /* flex-wrap */,
        row /* flex-direction */,
        flex /* display */;

    /* Flex container with flex-direction set to "row" */
    /* prettier-ignore */
    @mixin flex-row
    	no-wrap /* wrap */,
    	center /* align-items */,
    	flex-end /* justify-content */;

    /* Flex container with flex-direction set to "column" */
    /* prettier-ignore */
    @mixin flex-column
    	no-wrap /* wrap */
    	center /* align-items */
    	flex-end /* justify-content */;

    /* Inline-flex container with flex-direction set to "row" */
    /* prettier-ignore */
    @mixin inline-flex-row
    	no-wrap /* wrap */,
    	center /* align-items */,
    	flex-end /* justify-content */;

    /* Inline-flex container with flex-direction set to "column" */
    /* prettier-ignore */
    @mixin inline-flex-column
    	no-wrap /* wrap */
    	center /* align-items */
    	flex-end /* justify-content */;

    /* Inline-flex container with flex-direction set to "row" */
    /* prettier-ignore */
    @mixin inline-flex-row
    	no-wrap /* wrap */,
    	center /* align-items */,
    	flex-end /* justify-content */;

    /* Inline-flex container with flex-direction set to "column" */
    /* prettier-ignore */
    @mixin inline-flex-column
    	no-wrap /* wrap */
    	center /* align-items */
    	flex-end /* justify-content */;
    ```

-   `_media-queries.css` - mixins for all supported media queries

    _Custom media queries:_

    ```css
    /* (max-width: 1439px) */
    @media (--small-desktop) {
    }

    /* (max-width: 1279px) */
    @media (--tablet-landscape) {
    }

    /* (max-width: 1023px) */
    @media (--tablet-portrait) {
    }

    /* (max-width: 767px) */
    @media (--mobile) {
    }

    /* (max-width: 767px) */
    @media (--xs) {
    }

    /* (min-width: 768px) and (max-width: 1023px) */
    @media (--sm) {
    }

    /* (min-width: 1024px) and (max-width: 1279px) */
    @media (--md) {
    }

    /* (min-width: 1280px) and (max-width: 1439px) */
    @media (--lg) {
    }

    /* (min-width: 1439px) */
    @media (--xl) {
    }

    /* (min-width: 0) */
    @media (--xs-up) {
    }
    /* (min-width: 768px) */
    @media (--sm-up) {
    }
    /* (min-width: 1024px) */
    @media (--md-up) {
    }
    /* (min-width: 1280px) */
    @media (--lg-up) {
    }
    /* (min-width: 1439px) */
    @media (--xl-up) {
    }

    /* (prefers-reduced-motion: reduce) */
    @media (--reduced-motion) {
    }

    /* hover support */
    @media (--hover) {
    } ;
    ```

-   `_mixins.css` - all other mixins

    _Available mixins:_

    ```css
    /* absolutely positions an element with known dimensions in the center of their relative parent element */
    @mixin centered;

    /**
    	generates rules for responsive helpers
    	$breakpoint: a breakpoint prefix such as xs, sm, md, lg or xl
    */
    @mixin breakpoint-helpers $breakpoint;

    /* creates !important declaration for the given $display argument */
    @mixin display $value;

    /**
    	generates rules for grid columns for a given breakpoint
    	$breakpoint: a breakpoint prefix such as xs, sm, md, lg or xl
    */
    @mixin grid $breakpoint;
    ```

### Generic

-   `_form-elements.css` - default styles for form elements
-   `_reset.css` - additional browser reset and normalize (normalize.css is also included)
-   `_transitions.css` - default transitions for focusable/active elements

### Elements

-   `_document.css` - default styles for the `body` element
-   `_headings.css` - default styles for all heading (h1 - h6) tags
-   `_links.css` - default styles for anchors
-   `_texts.css` - default styles for text elements

### Objects

-   `_grid.css` - a grid system

    _Available selectors are:_

    ```css
    /* defines a grid container */
    .o-grid {
    }

    /* defines a grid item */
    .o-grid__item {
    }

    /**
    	depending on the --breakpoints variables
    	the following selectors will vary.
    	1 means 1/12 of the available width.
    	12 means all of the available width.
    	Here are the defaults
    */
    /* From 0 to 767px */
    .xs-1 to .xs-12
    /* From 768px to 1023px */
    .sm-1 to .sm-12
    /* From 1024px to 1279px */
    .md-1 to .md-12
    /* From 1280px to 1439px */
    .lg-1 to .lg-12
    /* From 1440px above */
    .xl-1 to .xl-12;
    ```

-   `_main.css` - styles for the `main` element

    _Available selectors are:_

    ```css
    /* defines the main content. used with <main> element */
    .o-main {
    }
    ```

-   `_shell.css` - styles for the site container

    _Available selectors are:_

    ```css
    /* defines the site container */
    .o-shell {
    }

    /* defines the site container as flex container */
    .o-shell--flex {
    }

    /* makes the site container take the whole browser width */
    .o-shell--fluid {
    }
    ```

-   `_wrapper.css` - styles for the site wrapper

    _Available selectors are:_

    ```css
    /* defines the parent container of all other elements. usually the only child of the <body> element */
    .o-wrapper {
    }
    ```

### Components

-   `_btn.css` - default styles for the buttons

    _Available selectors are:_

    ```css
    /* default styles for a button */
    .c-btn {
    }

    /* makes the button fill its parent's width */
    .c-btn--block {
    }
    ```

-   `_list.css` - default styles for lists. A list is an element with a classname which starts with `c-list`

### Utilities

-   `_align.css` - alignment class utilities

    _Available selectors are:_

    ```css
    /* align to the left */
    .alignleft {
    }

    /* align to the right */
    .alignright {
    }

    /* clear the alignment */
    .alignnone {
    }

    /* clear the alignment and center horizontally */
    .aligncenter {
    }
    ```

-   `_clear.scss` - utilites to clear after floats

    _Available selectors are:_

    ```css
    /* clear both */
    .clear {
    }
    /* clear right */
    .clear-right {
    }
    /* clear left */
    .clear-left {
    }
    ```

-   `_fullsize-background.css` - helper for background image

    _Available selectors are:_

    ```css
    /* makes the element's background image take the whole size of the element using "background-size: cover" */
    .fullsize-background {
    }
    ```

-   `_hidden.css` - helper class/attribute for hidden elements

    _Available selectors are:_

    ```css
    .hidden,
    [hidden] {
    }
    ```

-   `_preferences.css` - contains user preferences settings such as `reduced-motion` or `prefers-color-scheme` preferences.

-   `_responsive-utilities.css` - helpers for showing/hiding elements on different resolutions. For resolutions reference please check the media queries section.

    _Available selectors are:_

    ```css
    .visible-xs-block {
    }
    .visible-xs-inline {
    }
    .visible-xs-inline-block {
    }
    .visible-xs-flex {
    }
    .visible-xs-inline-flex {
    }
    .visible-sm-block {
    }
    .visible-sm-inline {
    }
    .visible-sm-inline-block {
    }
    .visible-sm-flex {
    }
    .visible-sm-inline-flex {
    }
    .visible-md-block {
    }
    .visible-md-inline {
    }
    .visible-md-inline-block {
    }
    .visible-md-flex {
    }
    .visible-md-inline-flex {
    }
    .visible-lg-block {
    }
    .visible-lg-inline {
    }
    .visible-lg-inline-block {
    }
    .visible-lg-flex {
    }
    .visible-lg-inline-flex {
    }
    .visible-xl-block {
    }
    .visible-xl-inline {
    }
    .visible-xl-inline-block {
    }
    .visible-xl-flex {
    }
    .visible-xl-inline-flex {
    }
    .hidden-xs {
    }
    .hidden-sm {
    }
    .hidden-md {
    }
    .hidden-lg {
    }
    .hidden-xl {
    }
    ```

-   `_text-align.css` - text alignment utilities

    _Available selectors are:_

    ```css
    /* align text to the left */
    .text-left {
    }
    /* align text to the center */
    .text-center {
    }
    /* align text to the right */
    .text-right {
    }
    /* align text to the right */
    .text-justify {
    }
    ```

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
