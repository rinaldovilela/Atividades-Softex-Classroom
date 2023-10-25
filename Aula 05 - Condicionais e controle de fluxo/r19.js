document.getElementById("questao19").addEventListener("click", function() {
    console.log("Script executado");
    let n1 = parseInt(prompt("Digite o primeiro número. "))
    let n2 = parseInt(prompt("Digite o segundo número. "))

    let operacao = parseInt(prompt("Escolha uma operação a ser realizada : 1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão "))

    let operador 
    switch (operacao) {
        case 1:
            alert(`${n1 + n2}`)
            break;
        case 2:
            alert(`${n1 - n2}`)
            break;
        case 3:
            alert(`${n1 * n2}`)
            break;
        case 4:
            alert(`${n1 / n2}`)
            break;
    
        default:
            alert(`Operador inválido.`)
            break;
    }
});