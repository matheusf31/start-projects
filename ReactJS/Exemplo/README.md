# Passos:

### Começar projeto

```
$ yarn init -y

$ yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D

$ yarn add react react-dom
```

### Configurar Webpack e Babel

- babel.config.js:

```
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"]
}
```

(para armazenar todo código JS)

- src/index.js: ** código **

- webpack.config.js:

```
$ yarn add babel-loader -D

// para resolver '/' no windows
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```

- package.json:

```
"scripts": {
  "build": "webpack --mode development"
},
```

- public/index.html:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>ReactJS</title>
  </head>
  <body>
    <h1>Hello world</h1>

    <script src="./bundle.js"></script>
  </body>
</html>
```

### Para manter o app rodando:

\$ yarn add webpack-dev-server -D

- webpack.config.js:

```
devServer: {
  contentBase: path.resolve(__dirname, 'public'),
},
```

- package.json:

```
(o --mode development deixa o código 'legível' no bundle)
"scripts": {
  "build": "webpack-dev-server --mode development"
},
```
