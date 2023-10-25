document.getElementById("questao21").addEventListener("click", function() {
    console.log("Script executado");
    

    function filtrarStringsLongas(arrayDeStrings) {
        const stringsFiltradas = arrayDeStrings.filter(str => str.length > 5);
        return stringsFiltradas;
    }
    
    
    let arrayOriginal = ["banana", "maçã", "laranja", "abacaxi", "uva"];
    let arrayFiltrado = filtrarStringsLongas(arrayOriginal);
    console.log("Array filtrado:", arrayFiltrado);
    
});