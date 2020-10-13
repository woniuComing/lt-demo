module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    plugins: ['vue'],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "indent": ["warn", 4, {
            'CallExpression': {
                'arguments': 'off'
            }
        }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': ['off'],
        'eol-last': ["off"],
        "space-before-function-paren": 0,
        'comma-spacing': [2, {
            'before': false, // 在逗号前不允许有空格
            'after': true // 在逗号后需要一个或多个空格
        }],
    }
}