//Como é a primeira vez que escrevo em .js, apanhei um bocado, mas nada que várias horas pesquisando não resolvesse.

// Importa a biblioteca 'readline' para interação com o usuário no Node.js
const readline = require('readline'); //É uma biblioteca do Node.js que fornece uma interface para leitura de dados a partir de um terminal.

/*
*Cria uma interface de leitura/escrita 
*usando as configurações fornecidas, neste caso, 
*process.stdin e process.stdout.
*Semelhante ao que vi em C++
*/
// Cria uma interface de leitura e escrita para interagir com o usuário
const rl = readline.createInterface({ 
  input: process.stdin,  // Define a entrada como o terminal
  output: process.stdout  // Define a saída como o terminal
});

/*
*Solicita uma pergunta ao usuário. 
*A função de callback é executada com a resposta do usuário.
*/
// Solicita ao usuário inserir o nome do herói
rl.question('Digite o nome do herói: ', (nomeDoHeroi) => {
  // Solicita ao usuário inserir a quantidade de experiência (XP) do herói
  rl.question('Digite a quantidade de experiência (XP) do herói: ', (xpDoHeroi) => {
    // Mapeamento de intervalos de XP para níveis
    const mapeamentoNiveis = {
      1000: "Ferro",
      2000: "Bronze",
      5000: "Prata",
      7000: "Ouro",
      8000: "Platina",
      9000: "Ascendente",
      10000: "Imortal",
    };

    // Determina o nível com base na XP
    let nivelDoHeroi = "Radiante"; // Valor padrão para XP maior que 10000

    // Itera sobre os limites de XP no mapeamentoNiveis
    for (let xpLimite in mapeamentoNiveis) {
      if (xpDoHeroi <= parseInt(xpLimite)) {// 'parseInt(xpLimite)' Converte uma string para um número inteiro.
        nivelDoHeroi = mapeamentoNiveis[xpLimite]; //Itera sobre os limites de XP no objeto mapeamentoNiveis.
        break;
      }
    }

    // Exibe a mensagem final
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);

    // Fecha a interface readline
    rl.close(); //Fecha a interface readline após a interação do usuário. 
    //**Lembrando de liberar memória alocada(já perdi ponto nisso!) em C**
  });
});
