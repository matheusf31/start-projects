// para resolver '/' no windows
const path = require("path");

module.exports = {
  // arquivo de entrada
  entry: path.resolve(__dirname, "src", "index.js"),
  // onde ele joga o bundle (cod tranpilado)
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  // onde fica as regras (pra qual tipo de arquivo, o que ele deve utilizar)
  module: {
    // toda vez que o webpack encontra um arquivo do tipo listado o babel deve transpilar
    rules: [
      {
        // expressão regular
        // '\' diz que o simbolo é o próprio simbolo, 'js' é js e '$' é que a string termina com '.js'
        test: /\.js$/,
        // excluir tudo que tem dentro de onde estiver listado
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
