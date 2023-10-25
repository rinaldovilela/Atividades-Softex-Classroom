document.getElementById("questao16").addEventListener("click", function() {
    console.log("Script executado");
   
    try {
        let numeroDecimal = parseFloat(prompt('Digite um número decimal:'));
    
        let numeroArredondado = Math.round(numeroDecimal);
    
        alert('Número decimal: ' + numeroDecimal);
        alert('Número arredondado: ' + numeroArredondado);
    } catch (erro) {
        alert('Ocorreu um erro: ' + erro);
    }
   
});