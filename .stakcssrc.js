// Setup.
const env = process.env.NODE_ENV;
const isProd = ['production', 'prod', 'test'].includes(env);
const postcssPlugins = require('./.postcssrc.js');

// Config export object.
let config = {
	css: {
		source: 'src/spacing.css',
		output: './dist/spacing.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: { map: false, skipConfig: true },
				plugins: postcssPlugins('postcss-mixins', 'autoprefixer', 'postcss-reporter')
			}
		]
	}
};

if (isProd) {
	config.css_min = Object.assign({}, config.css, {
		output: './dist/spacing.min.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: {
					map: false,
					skipConfig: true
				},
				plugins: postcssPlugins('postcss-mixins', 'autoprefixer', 'postcss-csso')
			}
		]
	});
}

module.exports = config;
