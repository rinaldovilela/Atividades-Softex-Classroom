document.getElementById("questao25").addEventListener("click", function() {
    console.log("Script 25 executado.");

    function inverterString(texto) {
        return texto.split("").reverse().join("");
    }
    

    const entrada = prompt('Digite uma palavra para ser inveritda : ');
    const stringInvertida = inverterString(entrada);
    console.log("String invertida:", stringInvertida);
    


});