document.getElementById("questao11").addEventListener("click", function () {
  console.log("Script executado");

  let array = []
  let flag = true
  while (flag) {
    let n = parseInt(prompt("Digite um número inteiro. Ou digite - 0 para parar de digitar"))
    if(n != 0 ){
    array.push(n);
    }else{
      flag = false
    }
  }

  function calcularMediaArredondada(listaNumeros) {
    let array = [];
let n = parseInt(prompt("Digite um número inteiro. Ou digite 0 para parar de digitar"));

while (n !== 0) {
    array.push(n);
    n = parseInt(prompt("Digite um número inteiro. Ou digite 0 para parar de digitar"));
}

function calcularMediaArredondada(listaNumeros) {
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
console.log("A média arredondada é:", mediaArredondada);

  }

  const mediaArredondada = calcularMediaArredondada(array);
  console.log("A média arredondada é:", mediaArredondada);



});