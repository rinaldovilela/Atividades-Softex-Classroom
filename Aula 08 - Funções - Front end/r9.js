document.getElementById("questao9").addEventListener("click", function () {
  console.log("Script executado");

  let valorProduto = parseFloat(prompt('Digite o valor do produto:'))

  let percentual = parseFloat(prompt('Digite o percentual de desconto:'))
  
  function calcularDesconto(param1, param2) {
    return param1 - (param1 * (param2/100))
  }


  resultado = calcularDesconto(valorProduto, percentual);

  console.log(`O valor do produto com o desconto de ${percentual.toFixed(2)}% é de : R$${resultado.toFixed(2)} . `)
});
