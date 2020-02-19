/**
 * Configuration taken from https://github.com/qlik-trial/frontend-template/blob/master/.eslintrc.js on feb 11 2020
 * Note: pretty rules have been commented out in order to no have excessive errors on existing code from office-plugin-prototype
 */

module.exports = {
    root: true,
    env: {
        node: true,
        browser: false,
        es6: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'script',
    },
    plugins: ['react', 'react-hooks', 'prettier'],

    rules: {
        // 'prettier/prettier': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [
                'eslint:recommended',
                'plugin:react/recommended',
                'plugin:@typescript-eslint/recommended',
                'prettier',
                'prettier/react',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
            plugins: ['@typescript-eslint', 'react', 'prettier'],
            rules: {
                '@typescript-eslint/interface-name-prefix': ['off'],
                'quotes': ['error', 'single'],
            },
        },
        // Src files - runs in the brower
        {
            files: ['src/**'],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                sourceType: 'module',
                ecmaVersion: 2018,
                project: './tsconfig.json',
            },
            env: {
                browser: true,
            },
        },
        // Unit tests
        {
            files: ['src/**/*.test.js', 'src/**/*.test.ts'],
            extends: ['plugin:jest/recommended'],
            plugins: ['jest'],
            env: {
                'jest/globals': true,
            },
        },
        // Integration tests
        {
            files: ['test/**/*.js', 'test/**/*.ts'],
            extends: ['plugin:jest/recommended'],
            plugins: ['jest'],
            env: {
                'jest/globals': true,
            },
            globals: {
                page: true,
                browser: true,
                context: true,
            },
        },
    ],
};
