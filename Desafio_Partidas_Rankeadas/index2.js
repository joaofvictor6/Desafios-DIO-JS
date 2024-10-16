// Importa o módulo prompt-sync para capturar dados do usuário
const prompt = require('prompt-sync')();

// Função para calcular o saldo e determinar o nível
function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  return { saldoVitorias, nivel };
}

// Captura a entrada do usuário para vitórias e derrotas
const vitorias = parseInt(prompt('Digite o número de vitórias: '));
const derrotas = parseInt(prompt('Digite o número de derrotas: '));

// Calcula e exibe o resultado
const resultado = calcularNivel(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
