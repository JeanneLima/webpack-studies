 const path = require('path'); // Recurso do Node.js para retornar o caminho absoluto até o arquivo atual que funciona em qualquer sistema operacional
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
 
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
  // Quem gerencia as dependências é o NPM, já o Webpack apenas permitirá adicioná-las ao bundle da aplicação tratando-os como módulos, contanto que haja um loader configurado para lidar com o tipo de arquivo em questão
  module: {
    rules: [
      {
        test: /\.css$/, // Tipo de arquivo a aplicar a regra (no caso, via expressão regular, todo arquivo encontrado que termine com extensão css, tendo a \ para fazer o escape do ponto)
        use: [ // Lista de loaders baixados a serem usados para interpretar os arquivos apontados acima e inser-los no bundle do webpack
        MiniCssExtractPlugin.loader, // Dinamicamente, cria arquivo de bundle css
        'css-loader' // Permite importar css como módulo em arquivo Javascript, ou seja, faz com que o webpack aceite importar arquivos CSS através da instrução import e inclusive adiciona os CSS importados no bundle.js criado
        ] 
      }
    ]
  },
  optimization: { // recebe tudo relacionado à otimização
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/src/app.html', // Arquivo de referência para que o plugin não crie um HTML novo do zero no build
      filename: 'app.html', // Nome do arquivo HTML a ser gerado no build
      hash: true // Opção para adicionar hash no arquivo do bundle a fim de invalidar cache quando houver alteração
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
};

