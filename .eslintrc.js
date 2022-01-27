/* eslint-disable unicorn/prefer-module */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'unicorn',
        'jest',
        'prettier',
        'simple-import-sort',
    ],
    extends: [
        'plugin:unicorn/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prefer-const': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-unused-vars': 'off',
        'no-var': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/order': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
    },
};
