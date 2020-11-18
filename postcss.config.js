module.exports = {
	plugins: [
		require('postcss-easy-import'),
		require('postcss-preset-env')({
			stage: 0,
			features: {
				'color-mod-function': {
					importFrom: 'assets/settings/_colors.css'
				}
			}
		}),
		require('postcss-normalize')({
			forceImport: true
		}),
		require('postcss-nested'),
		require('postcss-each-variables'),
		require('postcss-each'),
		require('postcss-for'),
		require('postcss-mixins'),
		require('postcss-extend'),
		require('postcss-utilities'),
		require('postcss-flexbugs-fixes'),
		require('postcss-calc'),
		require('postcss-custom-media')
	]
};
