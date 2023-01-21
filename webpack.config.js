 const path = require('path'); // Recurso do Node.js para retornar o caminho absoluto até o arquivo atual que funciona em qualquer sistema operacional
 
 // O arquivo de configuração do Webpack nada mais é do que um módulo do Node.js
 // É a plataforma Node.js que executa o Webpack através do sistema de módulos CommonJS
 // que, diferente do ESM módulos, o CommonJS utiliza a sintaxe require e module.exports
module.exports = {
  entry: './app/src/js/app.js',  // Ponto de entrada (entry point) do código fonte da aplicação para o carregamento de todos os scripts (podendo ser módulos)
  output: { // informações dos arquivos de saída esperados unindo todos os scripts necessários para melhorar a métrica de latência (ou seja, menos requisições para carregar arquivos essenciais para a aplicação)
    filename: 'bundle.js', // Nome do arquivo
    path: path.resolve(__dirname, 'app/dist') // Local de gravação que precisa ser um caminho absoluto, ou seja, desde a raiz do sistema operacional até a pasta desejada
  }
};