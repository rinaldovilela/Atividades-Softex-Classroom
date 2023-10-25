let nomeProduto = prompt("Digite o nome de um produto.")

let precoProduto = parseFloat(6.00)

let precoFormatado = "R$ " + precoProduto.toFixed(2);


alert(`${nomeProduto} ${precoFormatado}`)