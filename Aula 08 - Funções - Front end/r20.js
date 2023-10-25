document.getElementById("questao20").addEventListener("click", function() {
    console.log("Script executado");
    
    function imprimirQuadro(strings) {
        if (strings.length === 0) {
            console.log("A lista está vazia.");
            return;
        }
    
        const maiorComprimento = Math.max(...strings.map(str => str.length));
        const borda = "*".repeat(maiorComprimento + 4);
    
        console.log(borda);
        for (let i = 0; i < strings.length; i++) {
            const espacos = " ".repeat(maiorComprimento - strings[i].length);
            console.log(`* ${strings[i]}${espacos} *`);
        }
        console.log(borda);
    }
    
    
    const listaStrings = ["Hello", "World", "in", "a", "frame"];
    imprimirQuadro(listaStrings);
    
});