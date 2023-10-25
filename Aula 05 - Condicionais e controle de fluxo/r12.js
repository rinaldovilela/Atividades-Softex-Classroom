document.getElementById("questao12").addEventListener("click", function() {
    console.log("Script executado");
    
    let numero = parseInt(prompt("Digite um número inteiro"))

    if (numero % 3 === 0 && numero % 5 === 0){
        alert(`${numero} é divisivel por 3 e por 5.`)
    } else {
        alert(`${numero} não é divisivel por 3 e por 5 ao mesmo tempo.`)
    }

});