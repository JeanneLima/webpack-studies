 const path = require('path'); // Recurso do Node.js para retornar o caminho absoluto até o arquivo atual que funciona em qualquer sistema operacional
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 const CopyWebpackPlugin = require('copy-webpack-plugin');
 
 // O arquivo de configuração do Webpack nada mais é do que um módulo do Node.js
 // É a plataforma Node.js que executa o Webpack através do sistema de módulos CommonJS
 // que, diferente do ESM módulos, o CommonJS utiliza a sintaxe require e module.exports
module.exports = {
  entry: './app/src/js/app.js',  // Ponto de entrada (entry point) do código fonte da aplicação para o carregamento de todos os scripts (podendo ser módulos)
  output: { // informações dos arquivos de saída esperados unindo todos os scripts necessários para melhorar a métrica de latência (ou seja, menos requisições para carregar arquivos essenciais para a aplicação)
    filename: 'bundle.js', // Nome do arquivo
    path: path.resolve(__dirname, 'app/dist'), // Local de gravação que precisa ser um caminho absoluto, ou seja, desde a raiz do sistema operacional até a pasta desejada
    clean: true // Opção para limpar pasta de output antes de cada build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/src/app.html', // Arquivo de referência para que o plugin não crie um HTML novo do zero no build
      filename: 'app.html', // Nome do arquivo HTML a ser gerado no build
      hash: true // Opção para adicionar hash no arquivo do bundle a fim de invalidar cache quando houver alteração
    }),
    new CopyWebpackPlugin({
      patterns: [ // Propriedade que permite copiar uma lista de pastas
        {
          from: './app/src/css', // Caminho da pasta a ser copiada
          to: 'css' // Caminho relativo na pasta de output definida para o Webpack
        }
      ]
    })
  ]
};