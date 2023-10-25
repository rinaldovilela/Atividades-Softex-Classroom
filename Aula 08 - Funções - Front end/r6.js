document.getElementById("questao6").addEventListener("click", function() {
    console.log("Script executado.");

    let num1 = parseInt(prompt('Digite um número inteiro para saber se ele é Par:'))

    function isPar(num) {

        if((num % 2) === 0 ){
            return true
        }else {
            return false
        }
    }

    resultado = isPar(num1)

    console.log(resultado)


    
});



