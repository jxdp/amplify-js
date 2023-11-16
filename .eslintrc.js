/** @type {import("eslint").ESLint.ConfigData}*/
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	extends: [
		'eslint:recommended',
		'standard',
		'plugin:import/errors',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/stylistic',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: [
		'@stylistic',
		'@typescript-eslint',
		'no-relative-import-paths',
		'unused-imports',
		'import',
		'jsdoc',
	],
	env: {
		es6: true,
		node: true,
	},
	ignorePatterns: [
		'dist',
		'node_modules',
		'.eslintrc.*',
		'rollup',
		'rollup.config.*',
		'setupTests.ts',
		// temporarily disable linting __tests__ to avoid merge conflicts
		'__tests__',
	],
	rules: {
		camelcase: [
			'error',
			{
				allow: [
					'graphql_headers',
					/^(aws_|amazon_)/,
					'access_key',
					'secret_key',
					'session_token',
				],
			},
		],
		'import/no-deprecated': 'warn',
		'import/no-empty-named-blocks': 'error',
		'import/no-mutable-exports': 'error',
		'import/no-relative-packages': 'error',
		'import/newline-after-import': 'error',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					['external', 'internal', 'parent'],
					'sibling',
					'index',
					'object',
					'type',
				],
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '~/**',
						group: 'parent',
					},
				],
			},
		],
		'no-eval': 'error',
		'no-param-reassign': 'error',
		'no-shadow': 'off',
		'no-use-before-define': 'off',
		'no-useless-constructor': 'off',
		'no-trailing-spaces': 'error',
		'no-return-await': 'error',
		'object-shorthand': 'error',
		'prefer-destructuring': 'off',
		'promise/catch-or-return': [
			'error',
			{ terminationMethod: ['then', 'catch', 'asCallback', 'finally'] },
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'sort-imports': ['error', { ignoreDeclarationSort: true }],
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'error',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'valid-typeof': ['error', { requireStringLiterals: false }],
		'@stylistic/comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
				enums: 'always-multiline',
				generics: 'always-multiline',
				tuples: 'always-multiline',
			},
		],
		'@stylistic/function-call-argument-newline': ['error', 'consistent'],
		'@stylistic/indent': 'off',
		'@stylistic/max-len': [
			'error',
			{
				code: 120,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'@stylistic/padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
		],
		'@typescript-eslint/method-signature-style': ['error', 'method'],
		'@typescript-eslint/no-confusing-void-expression': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, variables: false, classes: false },
		],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/prefer-destructuring': [
			'error',
			{ object: true, array: false },
		],
		'jsdoc/no-undefined-types': 1,
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: ['packages/*/tsconfig.json', 'tsconfig.json'],
			},
		},
		'import/ignore': ['react-native'],
	},
};
