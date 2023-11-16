export default {
	plugins: {
		'postcss-import-ext-glob': {},
		'postcss-import':{},
		 'tailwindcss/nesting': {},
		tailwindcss: {},
		'@csstools/postcss-global-data': {
			files: [
				'./src/design-tokens/media.css'
			]

		},
		'postcss-custom-media':{},
		'postcss-preset-env': {
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true,
				'cascade-layers': false
			}
		},
	}
};
