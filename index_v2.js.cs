// Defina o nome e a quantidade de experiência (XP) do herói
var nomeDoHeroi = "Exemplo";  // Define o nome do herói como "Exemplo"
var xpDoHeroi = 5000;  // Define a quantidade de experiência (XP) do herói como 5000

// Utilize uma estrutura de decisão para determinar o nível com base na XP
var nivelDoHeroi;

// Verifica diferentes intervalos de XP para determinar o nível do herói
if (xpDoHeroi < 1000) {  // Se XP for menor do que 1000
    nivelDoHeroi = "Ferro";  // Define o nível como "Ferro"
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {  // Se XP estiver entre 1001 e 2000
    nivelDoHeroi = "Bronze";  // Define o nível como "Bronze"
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {  // Se XP estiver entre 2001 e 5000
    nivelDoHeroi = "Prata";  // Define o nível como "Prata"
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {  // Se XP estiver entre 6001 e 7000
    nivelDoHeroi = "Ouro";  // Define o nível como "Ouro"
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {  // Se XP estiver entre 7001 e 8000
    nivelDoHeroi = "Platina";  // Define o nível como "Platina"
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {  // Se XP estiver entre 8001 e 9000
    nivelDoHeroi = "Ascendente";  // Define o nível como "Ascendente"
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {  // Se XP estiver entre 9001 e 10000
    nivelDoHeroi = "Imortal";  // Define o nível como "Imortal"
} else {
    nivelDoHeroi = "Radiante";  // Se não se encaixar em nenhum intervalo, define o nível como "Radiante"
}

// Exiba a mensagem final
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);  // Exibe a mensagem final no console
