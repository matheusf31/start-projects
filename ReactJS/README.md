# StartReactProject

Start React project with eslint, editorconfig and prettier

## Start (do zero)

- Ver pasta [Exemplo](../Exemplo)

## Start (com create react-app)

`$ yarn create react-app 'nome do projeto'`

apagar:

- no package.json:
  A parte do eslint;

- na pasta public:
  Apagar o link de manifest no index.html;
  Apagar arquivo manifest.json;

* na pasta src:
  Deletar app.css, app.test.js, index.css, logo.svg, serviceWorker.js;

* no index.js:
  Remover parte do serviceWorker, importação do serviceWorker e do css;

* no App.js:
  Remover logo e css;
  Colocar apenas h1 com hello world;

## Configurar editorconfig, eslint, prettier

#### Editorconfig

criar arquivo .editorconfig e colocar:

```
root = true
[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

#### Eslint

`$ yarn add eslint -D`

```
$ yarn eslint --init
1 - to check syntax, find problems, and enforce code style
2 - js models
3 - react
4 - browser
5 - use a pop... - airbnb - js - Y
```

apagar package-lock.json e \$ yarn

#### Prettier

`$ yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D`
configurar eslintrc:

```
  module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: ["airbnb", "prettier", "prettier/react"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".jsx", ".js"]
        }
      ],
      "import/prefer-default-export": "off"
    }
  };
```

criar .prettierrc:

```
  {
    "singleQuote": true,
    "trailingComma": "es5"
  }
```
