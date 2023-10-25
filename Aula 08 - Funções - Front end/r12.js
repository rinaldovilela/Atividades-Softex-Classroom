document.getElementById("questao12").addEventListener("click", function() {
    console.log("Script executado");
    
    let n = parseInt(prompt('Digite um número inteiro:'))

    function contarDigitosParesImpares(numeroInteiro) {
        let numeroInteiroToString = numeroInteiro.toString();
        let impar = 0
        let par = 0


        for (let i = 0; i< numeroInteiroToString.length; i++) {
            let digito = parseInt(numeroInteiroToString[i])
            let divisao = digito % 2 
            if (divisao === 0 ) {
                par++
            } else {
                impar++
            }
            
            
        }
        
        return `${par} Números Par e ${impar} Números Impares. `
    }

    let resultado = contarDigitosParesImpares(n)

    console.log(`Foram digitados : ${resultado}`)


});