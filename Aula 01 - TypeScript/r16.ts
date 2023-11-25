function advinheNumero(): void {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let acertou = false;

  while (!acertou) {
    const userInput = prompt("Digite um número entre 1 e 100:");
    if (userInput !== null) {
      const tentativa = parseInt(userInput);

      if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
        console.log("Por favor, digite um número válido entre 1 e 100.");
      } else {
        tentativas++;

        if (tentativa === numeroAleatorio) {
          acertou = true;
          console.log(
            `Parabéns, você acertou o número ${numeroAleatorio} em ${tentativas} tentativas!`
          );
        } else if (tentativa < numeroAleatorio) {
          console.log("Tente um número maior.");
        } else {
          console.log("Tente um número menor.");
        }
      }
    } else {
      console.error("Entrada cancelada. Operação interrompida.");
      break;
    }
  }
}

advinheNumero();
