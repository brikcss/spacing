# Brikcss Spacing

<!-- Shields. -->
<p>
	<!-- NPM version. -->
	<a href="https://www.npmjs.com/package/@brikcss/spacing">
		<img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/spacing.svg?style=flat-square">
	</a>
	<!-- NPM downloads/month. -->
	<a href="https://www.npmjs.com/package/@brikcss/spacing">
		<img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/spacing.svg?style=flat-square">
	</a>
	<!-- Travis branch. -->
	<a href="https://github.com/brikcss/spacing/tree/master">
		<img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master">
	</a>
	<!-- Codacy. -->
	<a href="https://www.codacy.com/app/thezimmee/spacing">
		<img alt="NPM version" src="https://img.shields.io/codacy/grade/56045711e2934e628fcb9468a8d0833c/master.svg?style=flat-square">
	</a>
	<!-- Coveralls -->
	<a href='https://coveralls.io/github/brikcss/spacing?branch=master'>
		<img src='https://img.shields.io/coveralls/github/brikcss/spacing/master.svg?style=flat-square' alt='Coverage Status' />
	</a>
	<!-- Commitizen friendly. -->
	<a href="http://commitizen.github.io/cz-cli/">
		<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
	</a>
	<!-- Semantic release. -->
	<a href="https://github.com/semantic-release/semantic-release">
		<img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a>
	<!-- Prettier code style. -->
	<a href="https://prettier.io/">
		<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	</a>
	<!-- MIT License. -->
	<!-- <a href="https://choosealicense.com/licenses/mit/">
		<img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square">
	</a> -->
</p>

Spacing component to make creating spacing variables and classes in CSS easier.

---

## Environment and browser support

| Node   | CLI   | UMD   | ES Module | Browser   |
|:------:|:-----:|:-----:|:---------:|:---------:|
| x      | x     | x     | x         | ✓         |

| Chrome | Firefox | Safari | Edge | IE  | iOS | Android |
|:------:|:-------:|:------:|:----:|:---:|:---:|:-------:|
| ✓      | ✓       | ✓      | ✓    | 11  | ✓   | ✓       |

\* _Note: Since [CSS Variables](https://caniuse.com/#search=css%20variables) are used, IE11 is supported with the use of a custom variables polyfill, such as [postcss-var-shim](https://github.com/luwes/postcss-var-shim)._

## Install

1. Install from NPM:

	```sh
	npm i -D @brikcss/spacing
	```

2. Include desired file(s) in your app:

	- `./dist/spacing.css` and `./dist/spacing.min.css` are precompiled with PostCSS. Include one of these to accept all defaults.
	- `./src/spacing.css` is the source CSS. Use this as an example, with the spacing mixin, to generate your own custom classes.
	- `./src/mixins/spacing.js` is the spacing mixin. Use this to generate your own custom classes.

## Spacing mixin usage

The [spacing mixin](./src/mixins/spacing.js) allows you to generate your own custom spacing classes in one easy step. _See [postcss-mixins](https://github.com/postcss/postcss-mixins) for documentation on how to configure and use PostCSS mixins._

### Syntax and options

```css
@mixin spacing <separator = '-'>, <important = 'true'> {
	/* Mixin properties go here (see example). */
}
```

- `separator`  _{String}_  (`-`)  Character separator in the rule selector.
- `important`  _{Boolean}_  (`true`)  Whether to mark rule declarations as `!important`.

### Example

Sample input:

```css
@mixin spacing {
	/* Values to create base and variation classes for. */
	values: 1rem 2rem;
	/* Properties. Must include one or more of `padding`, `margin`. The value is used in its selectors. */
	padding: p;
	margin: m;
	/* Variations (optional). All possible variations are below. You can include/exclude any or all of them. The value is used in its selectors. */
	top: t;
	bottom: b;
	left: l;
	right: r;
	horizontal: x;
	vertical: y;
}
```

Output:

```css
/* Auto-generated classes. */

.p-1 {
    padding: 1rem !important
}

.pt-1 {
    padding-top: 1rem !important
}

.pb-1 {
    padding-bottom: 1rem !important
}

.pl-1 {
    padding-left: 1rem !important
}

.pr-1 {
    padding-right: 1rem !important
}

.px-1 {
    padding-left: 1rem !important;
    padding-right: 1rem !important
}

.py-1 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important
}

.p-2 {
    padding: 2rem !important
}

.pt-2 {
    padding-top: 2rem !important
}

.pb-2 {
    padding-bottom: 2rem !important
}

.pl-2 {
    padding-left: 2rem !important
}

.pr-2 {
    padding-right: 2rem !important
}

.px-2 {
    padding-left: 2rem !important;
    padding-right: 2rem !important
}

.py-2 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important
}

.m-1 {
    margin: 1rem !important
}

.mt-1 {
    margin-top: 1rem !important
}

.mb-1 {
    margin-bottom: 1rem !important
}

.ml-1 {
    margin-left: 1rem !important
}

.mr-1 {
    margin-right: 1rem !important
}

.mx-1 {
    margin-left: 1rem !important;
    margin-right: 1rem !important
}

.my-1 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important
}

.m-2 {
    margin: 2rem !important
}

.mt-2 {
    margin-top: 2rem !important
}

.mb-2 {
    margin-bottom: 2rem !important
}

.ml-2 {
    margin-left: 2rem !important
}

.mr-2 {
    margin-right: 2rem !important
}

.mx-2 {
    margin-left: 2rem !important;
    margin-right: 2rem !important
}

.my-2 {
    margin-top: 2rem !important;
    margin-bottom: 2rem !important
}
```

<style type="text/css">
	@media (min-width: 768px) {
		pre { max-height: 60vh; }
	}
</style>
