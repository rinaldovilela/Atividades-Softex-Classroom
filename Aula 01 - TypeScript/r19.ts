function encontrarPalavraMaisLonga(frase: string): string {
  const palavras = frase.split(" ");
  let palavraMaisLonga = "";

  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > palavraMaisLonga.length) {
      palavraMaisLonga = palavras[i];
    }
  }

  return palavraMaisLonga;
}

const fraseExemploInput = prompt(
  "Digite uma frase para encontrarmos sua palavra mais longa:"
);
if (fraseExemploInput !== null) {
  const fraseExemplo = fraseExemploInput;
  const palavraLonga = encontrarPalavraMaisLonga(fraseExemplo);
  console.log("A palavra mais longa é:", palavraLonga);
} else {
  console.error("Entrada cancelada. Operação interrompida.");
}
