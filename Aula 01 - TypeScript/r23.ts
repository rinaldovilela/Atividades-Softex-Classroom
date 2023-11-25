interface Pessoa {
  nome: string;
  idade: number;
}

function pessoaMaisVelha(pessoas: Pessoa[]): string {
  if (pessoas.length === 0) {
    return "Não há pessoas no array.";
  }

  let pessoaMaisVelha: Pessoa = pessoas[0];

  for (let i = 1; i < pessoas.length; i++) {
    if (pessoas[i].idade > pessoaMaisVelha.idade) {
      pessoaMaisVelha = pessoas[i];
    }
  }

  return pessoaMaisVelha.nome;
}

const pessoas: Pessoa[] = [
  { nome: "Rinaldo", idade: 25 },
  { nome: "Ray", idade: 23 },
  { nome: "Simone", idade: 43 },
  { nome: "Rivaldo", idade: 49 },
];

const nomeMaisVelho: string = pessoaMaisVelha(pessoas);
console.log("A pessoa mais velha é:", nomeMaisVelho);
