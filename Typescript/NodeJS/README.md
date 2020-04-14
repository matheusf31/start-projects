## Start

`$ yarn init -y`

## Express

```
$ yarn add express

$ yarn add typescript -D

$ yarn tsc --init (gera o tsconfig.json)
```

- tsconfig.json:

```
"outDir": "./dist", (criar esse diretório)
"rootDir": "./src",
```

- para declaração de tipos:

`$ yarn add @types/"nome da lib" -D`

## Ts node dev

`$ yarn add ts-node-dev -D`

- package.json:

```
"scripts": {
  "build": "tsc",
  "dev:server": "ts-node-dev src/server.ts",
},
```

- obs.:

"dev:server": "ts-node-dev --transpileOnly src/server.ts" (roda sem checagem do código)

"dev:server": "ts-node-dev --ignore-watch node_modules src/server.ts"

- rodar:

`$ yarn dev:server`

## Eslint

```
$ yarn add eslint -D

$ yarn eslint --init

1) check syntax, find problems, and enforce code style
2) js modules
3) none
4) Y
5) Node
6) use a style guide: airbnb / json / yarn add -D comando que apareceu

$ yarn add eslint-import-resolver-typescript -D
```

- .eslintrc.json:

```
{
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never"
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

## Prettier

```
$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

- .eslintrc.json:

```
{
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "airbnb-base",
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
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
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

- prettier.config.js:

```
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
}
```

- .eslintignore:

```
/*.js
node_modules
dist
```

## Debug

- create a launch json file

```
"request": "attach",
"protocol": "inspector",
"restart": true,

remover "program",
```

- package.json:

`"dev:server": "ts-node-dev --inspect --ignore-watch node_modules src/server.ts"`
