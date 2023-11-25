function inverterString(texto: string): string {
  return texto.split("").reverse().join("");
}

const entrada: string | null = prompt(
  "Digite uma palavra para ser invertida: "
);
if (entrada !== null) {
  const stringInvertida: string = inverterString(entrada);
  console.log("String invertida:", stringInvertida);
} else {
  console.error("Entrada cancelada. Operação interrompida.");
}
