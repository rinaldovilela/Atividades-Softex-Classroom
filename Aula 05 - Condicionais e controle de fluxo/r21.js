document.getElementById("questao21").addEventListener("click", function() {
    console.log("Script executado");
    

    try {
        let nMetros = parseFloat(prompt("Digite um valor em metros"))

        if (isNaN(nMetros)) {
            Error('Valor não é um número válido.');
        }

        let centimetros = nMetros * 100
        let milimetros = nMetros * 1000
        let quilometros = nMetros / 1000

        alert(`Valor em centímetros : ${centimetros} \nValor em milímetros : ${milimetros} \nValor em quilômetros : ${quilometros}`)
    } catch (error) {
        console.log(`Ocorreu um erro : ${error.message} `)
    }
});