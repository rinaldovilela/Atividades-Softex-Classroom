document.getElementById("questao15").addEventListener("click", function() {
    console.log("Script executado");
    
    let numero = parseInt(prompt("Digite um número entre 1 e 7."))

    let dia

    switch (numero) {
        case 1:
            dia = 'Domingo'
            break;
        case 2:
            dia = 'Segunda-feira'
            break;
        case 3:
            dia = 'Terça-feira'
            break;
        case 4:
            dia = 'Quarta-feira'
            break;
        case 5:
            dia = 'Quinta-feira'
            break;
        case 6:
            dia = 'Sexta-feira'
            break;
        case 7:
            dia = 'Sábado'
            break;
    
        default:
            dia = 'Número inválido'
            break;
    }

    alert(`${numero} - ${dia}`)
});