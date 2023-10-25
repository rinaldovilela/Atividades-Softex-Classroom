document.getElementById("questao8").addEventListener("click", function() {
    console.log("Script executado");
    
    let peso, altura 

    peso = prompt('Digite o peso da pessoa : ')

    altura = prompt('Digite a altura da pessoa:')


    function imc(param1, param2) {
        return param1 / (param2 * param2)
    }

    resultado = imc(peso, altura)

    console.log(`O IMC desta pessoa é : ${resultado.toFixed(2)}`)
});
