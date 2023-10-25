document.getElementById("questao19").addEventListener("click", function() {
    console.log("Script executado");
    function encontrarPalavraMaisLonga(frase) {
        const palavras = frase.split(" ");
        let palavraMaisLonga = "";
    
        for (let i = 0; i < palavras.length; i++) {
            if (palavras[i].length > palavraMaisLonga.length) {
                palavraMaisLonga = palavras[i];
            }
        }
    
        return palavraMaisLonga;
    }
    
    const fraseExemplo = prompt('Digite uma frase para encontrarmos sua palavra mais longa : ')
    const palavraLonga = encontrarPalavraMaisLonga(fraseExemplo);
    console.log("A palavra mais longa é:", palavraLonga);
});