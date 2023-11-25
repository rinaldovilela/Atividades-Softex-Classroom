function calcularPrecoProduto(
  valorCusto: number,
  margemLucro: number,
  valorFrete: number
): number {
  const margemLucroDecimal = margemLucro / 100;
  const precoVenda = valorCusto + valorCusto * margemLucroDecimal + valorFrete;
  return precoVenda;
}

const valorCustoInput = prompt("Digite o valor de custo do produto : ");
if (valorCustoInput !== null) {
  const valorCusto = parseFloat(valorCustoInput);
  const margemLucro = 20;
  const valorFrete = 3;

  const precoVenda = calcularPrecoProduto(valorCusto, margemLucro, valorFrete);
  console.log("O preço de venda do produto é:", precoVenda);
} else {
  console.error("Entrada cancelada. Operação interrompida.");
}
