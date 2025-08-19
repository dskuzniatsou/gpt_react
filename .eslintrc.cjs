module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier", // Всегда в конце
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "react/react-in-jsx-scope": "off", // В новых версиях React не нужен импорт React
        "@typescript-eslint/no-unused-vars": ["warn"],
        "react/prop-types": "off", // Мы используем TS, PropTypes не нужны
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
