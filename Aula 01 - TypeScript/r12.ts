const input = prompt("Digite um número inteiro:");
if (input !== null) {
  const n = parseInt(input);

  function contarDigitosParesImpares(numeroInteiro: number): string {
    const numeroInteiroToString = numeroInteiro.toString();
    let impar = 0;
    let par = 0;

    for (let i = 0; i < numeroInteiroToString.length; i++) {
      const digito = parseInt(numeroInteiroToString[i]);
      const divisao = digito % 2;
      if (divisao === 0) {
        par++;
      } else {
        impar++;
      }
    }

    return `${par} Números Par e ${impar} Números Ímpares. `;
  }

  const resultado = contarDigitosParesImpares(n);

  console.log(`Foram digitados : ${resultado}`);
} else {
  console.error("Entrada cancelada. Operação interrompida.");
}
