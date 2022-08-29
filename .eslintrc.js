module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	settings: {
		javascript: {
			version: 'detect'
		}
	},
	extends: ['standard', 'eslint-config-prettier'],

	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		properties: 'never'
	}
};
