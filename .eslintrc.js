module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true
    },
    'extends': [
        'airbnb',
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:n/recommended',
        'plugin:promise/recommended',
        'plugin:i18next/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'project': './tsconfig.json'
    },
    'plugins': [
        'react',
        'promise',
        'i18next'
    ],
    'rules': {
        'react/jsx-indent': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': [1, {
            'html': 'ignore',
            'exceptions': ['Link']
        }],
        'react/function-component-definition': 'off',
        'n/no-missing-import': 'off',
        'n/exports-style': ['error', 'module.exports'],
        'import/no-extraneous-dependencies': [2, {
            "devDependencies": true
        }],
        'n/no-unpublished-import': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/naming-convention': [2, {
            'selector': 'variable',
            'format': ['camelCase', 'PascalCase', 'UPPER_CASE'],
            'leadingUnderscore': 'allowDouble',
            'trailingUnderscore': 'allowDouble'
        }],
        'max-len': [2, {
            'code': 100,
            'ignoreComments': true
        }],
        'linebreak-style': 'off',
        'i18next/no-literal-string': [2, {
            'markupOnly': true
        }]
    },
    'globals': {
        '__IS_DEV_': true
    }
}