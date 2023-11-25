const valorProdutoInput = prompt('Digite o valor do produto:');
const percentualInput = prompt('Digite o percentual de desconto:');

if (valorProdutoInput !== null && percentualInput !== null) {
    const valorProduto = parseFloat(valorProdutoInput);
    const percentual = parseFloat(percentualInput);

    if (!isNaN(valorProduto) && !isNaN(percentual)) {
        function calcularDesconto(param1: number, param2: number): number {
            return param1 - (param1 * (param2 / 100));
        }

        const resultado = calcularDesconto(valorProduto, percentual);

        console.log(`O valor do produto com o desconto de ${percentual.toFixed(2)}% é de: R$${resultado.toFixed(2)}.`);
    } else {
        console.error("Valores inválidos para o produto ou percentual de desconto.");
    }
} else {
    console.error("Entrada cancelada ou inválida para o valor do produto ou percentual de desconto.");
}