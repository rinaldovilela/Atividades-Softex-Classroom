const anoNascimentoInput = prompt("Digite seu ano de nascimento:");
if (anoNascimentoInput !== null) {
  const anoNascimento = parseInt(anoNascimentoInput);

  function calcularIdade(param: number): number {
    const idadeAtual = 2023 - param;
    return idadeAtual;
  }

  const idade = calcularIdade(anoNascimento);

  console.log(`Você tem ou irá completar este ano: ${idade} anos.`);
} else {
  console.error("Entrada cancelada. Operação interrompida.");
}
