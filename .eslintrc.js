module.exports = {
    "env": {
        browser: true,
    },
    "extends": ["airbnb", "plugin:react/recommended"],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
};