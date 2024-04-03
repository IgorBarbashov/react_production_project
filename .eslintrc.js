module.exports = {
    'env': {
        'browser': true,
        'es2021': true
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
        // '@typescript-eslint/no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': [2, { 'html': 'ignore' }],
        'react/function-component-definition': 'off',





        // 'n/no-missing-import': '',


        'n/exports-style': ['error', 'module.exports'],
    }
}
// 'indent': [2, 4],
// 'import/no-unresolved': 'off',