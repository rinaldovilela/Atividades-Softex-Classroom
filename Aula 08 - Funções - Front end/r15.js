document.getElementById("questao15").addEventListener("click", function() {
    console.log("Script executado");
    
    let n = prompt('Digite um número para ser exibida sua tabuada de 0 a 10 :')

    function gerarTabuada(param) {
        i = 0
         
        while (i < 10) {
            let soma = i + param
            let subtracao = i - param
            let produto = i * param
            let divisao = i / param
            console.log(`${n} + ${i} = ${soma} | ${n} - ${i} = ${subtracao} | ${n} X ${i} = ${produto} | ${n} / ${i} = ${divisao.toFixed(2)}`)  
            i++
        }
        
    }

    let tabuada = gerarTabuada(n)

    console.log(tabuada)
});