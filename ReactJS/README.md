# StartReactProject

Start React project with eslint, editorconfig and prettier

## Start (do zero)

- Ver pasta [Exemplo](https://github.com/matheusf31/StartProjects/tree/master/ReactJS/Exemplo)

## Start (com create react-app)

`$ yarn create react-app 'nome do projeto'`

apagar:

- no package.json:
  A parte do eslint;

- na pasta public:
  deixar apenas index.html;
  ```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      <title>React App Test</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </body>
  </html>
  ```

* na pasta src:
  Deixar apenas App.js e index.js;

* no index.js:
  Remover parte do serviceWorker, importação do serviceWorker e do css;

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
      "import/prefer-default-export": "off",
      "no-param-reassign": "off",
      "no-console": ["error", { allow: ["tron"] }]
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

## Para utilizar hooks

`$ yarn add eslint-plugin-react-hooks -D`

.eslintrc.js:

```
...
plugins: [..., 'react-hooks],
...
rules: {
  ...
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn'
  
}

```



