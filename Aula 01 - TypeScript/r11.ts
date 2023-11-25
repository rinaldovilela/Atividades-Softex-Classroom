let array: number[] = [];
let flag = true;
while (flag) {
  const input = prompt(
    "Digite um número inteiro. Ou digite -0 para parar de digitar"
  );
  if (input !== null) {
    const n = parseInt(input);
    if (!isNaN(n)) {
      if (n !== 0) {
        array.push(n);
      } else {
        flag = false;
      }
    } else {
      console.error("Entrada inválida. Digite apenas números inteiros.");
    }
  } else {
    console.error("Entrada cancelada. Operação interrompida.");
    flag = false;
  }
}

function calcularMediaArredondada(listaNumeros: number[]): number | null {
  if (listaNumeros.length === 0) {
    return null;
  }

  let soma = 0;
  for (let i = 0; i < listaNumeros.length; i++) {
    soma += listaNumeros[i];
  }

  const media = soma / listaNumeros.length;
  const mediaArredondada = Math.round(media);
  return mediaArredondada;
}

const mediaArredondada = calcularMediaArredondada(array);
if (mediaArredondada !== null) {
  console.log("A média arredondada é:", mediaArredondada);
} else {
  console.error("A lista de números está vazia.");
}
