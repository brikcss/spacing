/**
 * spacing.js
 * ----------
 * @mixin to generate spacing variables and classes.
 */

const postcss = require('postcss');

module.exports = (mixin, separator = '-', important = 'true') => {
	// Setup.
	const container = postcss.root();
	const props = ['padding', 'margin'];
	const variations = ['top', 'right', 'bottom', 'left', 'horizontal', 'vertical'];
	const config = { values: [], props: {}, variations: {} };
	important = important === 'true';

	// Create config map.
	mixin.walkDecls((decl) => {
		if (decl.prop === 'values') config.values = postcss.list.space(decl.value);
		else if (props.includes(decl.prop)) config.props[decl.prop] = decl.value;
		else if (variations.includes(decl.prop)) config.variations[decl.prop] = decl.value;
	});

	// Create rules.
	Object.keys(config.props).forEach((propName) => {
		config.values.forEach((value) => {
			// Create base rule.
			const baseRule = postcss
				.rule({
					selector: `.${config.props[propName]}${separator}${parseFloat(value)
						.toString()
						.replace(/\./g, separator)}`
				})
				.append({ prop: propName, value, important });
			container.append(baseRule);
			Object.keys(config.variations).forEach((variation) => {
				// Create rule / selector.
				const rule = postcss.rule({
					selector: `.${config.props[propName]}${
						config.variations[variation]
					}${separator}${parseFloat(value)
						.toString()
						.replace(/\./g, separator)}`
				});
				// Determine props to append.
				const props = [];
				if (variation === 'horizontal') props.push(`${propName}-left`, `${propName}-right`);
				else if (variation === 'vertical')
					props.push(`${propName}-top`, `${propName}-bottom`);
				else props.push(`${propName}-${variation}`);
				// Add props and append rule to container.
				props.forEach((prop) => rule.append({ prop, value, important }));
				container.append(rule);
			});
		});
	});

	// Add variables to the container and replace the mixin.
	mixin.replaceWith(container.toResult().css);
};
