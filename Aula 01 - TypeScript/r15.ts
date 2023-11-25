const userInput = prompt(
  "Digite um número para ser exibida sua tabuada de 0 a 10:"
);
if (userInput !== null) {
  const n = parseFloat(userInput);

  function gerarTabuada(param: number): string {
    let i = 0;
    let output = "";

    while (i <= 10) {
      const soma = i + param;
      const subtracao = i - param;
      const produto = i * param;
      const divisao = i !== 0 ? param / i : 0; // Evitar divisão por zero

      output += `${n} + ${i} = ${soma} | ${n} - ${i} = ${subtracao} | ${n} X ${i} = ${produto} | ${n} / ${i} = ${divisao.toFixed(
        2
      )}\n`;
      i++;
    }

    return output;
  }

  const tabuada = gerarTabuada(n);

  console.log(tabuada);
} else {
  console.error("Entrada cancelada. Operação interrompida.");
}
