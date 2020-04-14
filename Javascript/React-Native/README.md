# React Native

### Início

- CLI (para não usar o expo):

```
$ yarn add react-native-cli

$ react-native init 'nome'

$ npx react-native init 'nome'
```

### Debug

- Reactotron

```
$ yarn add reactotron-react-native
```

- src/config/ReactotronConfig.js:

```
import Reactotron from 'reactotron-react-native';

if(__DEV__) {
	const tron = Reactotron.configure().useReactNative().connect();

	console.tron = tron;

	tron.clear();
}

$ adb reverse tcp:9090 tcp:9090
```

### ESlint & Prettier

```
$ yarn add eslint -D

$ yarn eslint --init:
	> (terceira)
	> (js modules)
	> (react)
	> (remove todas)
	> (airbnb/js)
	> (no / yes)

$ yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

- .eslintrc.js

```
module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  },
};
```

- .prettierrc

```
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```
### Root import

```
$ yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D
```

- ~/babel.config.js

```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};
```

- ~/jsconfig.json

```
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```

### Estrutua de pastas

```
src:

PASTAS:
	
	- config: plugins, extensões, algo pro ambiente de desenv
	
	- services: configs com serviços (API, mongoDB, Apolo, axios, etc)
	
	- store: dados da aplicação, config do redux
	
	- assets: imagem, logos, bibliotecas de animações, etc
	
  	- componnets: componentes que vou utilizar várias vezes na aplicação (componentes globais)
		- Button: index.js & styles.js
		- Background
		
		
  	- pages: onde fica as páginas da aplicação
    		- Login: index.js & styles.js
  
  	- styles: onde fica os estilos comuns
	
ARQUIVOS:
  	
	- index.js -> Coloco as rotas no index.js
	
	- routes.js -> definições das rotas
	
	
```
