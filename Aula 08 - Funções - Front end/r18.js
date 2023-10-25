document.getElementById("questao18").addEventListener("click", function() {
    console.log("Script executado");
    function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
        const margemLucroDecimal = margemLucro / 100;
        const precoVenda = valorCusto + (valorCusto * margemLucroDecimal) + valorFrete;
        return precoVenda;
    }
    
    
    const valorCusto = parseFloat(prompt('Digite o valor de custo do produto : '))
    const margemLucro = 20
    const valorFrete = 3
    
    const precoVenda = calcularPrecoProduto(valorCusto, margemLucro, valorFrete);
    console.log("O preço de venda do produto é:", precoVenda);
    
});