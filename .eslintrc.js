module.exports = {
    "env": {
        browser: true,
    },
    "extends": ["airbnb"],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    },
    "settings": {
    "import/resolver": {
        "node": {
        "moduleDirectory": [
            "node_modules",
            "src"
        ]
        }
    }
    }
};