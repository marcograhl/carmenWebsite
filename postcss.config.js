export default {
	plugins: {
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
