document.getElementById("questao14").addEventListener("click", function() {
    console.log("Script executado");

    let numero = parseInt(prompt("Dê uma nota de 1 a 5 a este site."))

    let nota

    switch (numero) {
        case 1:
            nota = "Muito insuficiente"
            break;
        case 2:
            nota = "Insuficiente"
            break;
        case 3:
            nota = "Regular"
            break;
        case 4:
            nota = "Bom"
            break;
        case 5:
            nota = "Muito bom"
            break;
    
        default:
            nota = "Nota inválida"
            break;
    }

    alert(`Você avaliou como : ${nota}`)
    
});