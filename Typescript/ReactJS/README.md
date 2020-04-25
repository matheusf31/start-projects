# StartReactProject (typescript)

Start React project with eslint, editorconfig and prettier

## Start (com create-react-app)

`$ npx create-react-app 'nome do projeto'`

## Eslint & Prettier

#### Eslint

`$ yarn add eslint -D`

```
$ yarn eslint --init
1 - to check syntax, find problems, and enforce code style
2 - js models
3 - react
4 - yes (typescript)
5 - Nenhuma
6 - use a pop... - airbnb - json - n

copy list -> $ paste / remove a outra versão do hook, e remover o eslint
```

.eslintigonore:

```
**/*.js
node_modules
build
```

#### Prettier

`$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

`$ yarn add eslint-import-resolver-typescript -D`

configurar eslintrc:

```
{
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
  "rules": {
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

criar .prettier.config.js:

```
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
};
```
