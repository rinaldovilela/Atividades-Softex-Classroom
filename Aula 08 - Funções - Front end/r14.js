document.getElementById("questao14").addEventListener("click", function() {
    console.log("Script executado");

    let anoNascimento = parseInt(prompt('Digite seu ano de nascimento : '))

    function calcularIdade(param) {
        idadeAtual = 2023 - param
        
        return idadeAtual
    }


    idade = calcularIdade(anoNascimento)

    console.log(`Você tem ou irá completar este ano : ${idade} anos.`)
    
});