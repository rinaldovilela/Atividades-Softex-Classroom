document.getElementById("questao18").addEventListener("click", function() {
    console.log("Script executado");
    
    let statusCivil = prompt("Digite seu estado civil.")

    statusCivil = statusCivil.replace('ú', 'u')

    statusCivil = statusCivil.toLowerCase()

    


    let resultado

    switch (statusCivil) {
        case 'casado':
            resultado = 'Casado'
            break;
        case 'solteiro':
            resultado = 'Solteiro'
            break;
        case 'divorciado' :
            resultado = 'Divorciado'
            break;
        case 'viuvo' : 
            resultado = 'Viúvo'
            break;
        case 'casada':
            resultado = 'Casada'
            break;
        case 'solteira':
            resultado = 'Solteira'
            break;
        case 'divorciada' :
            resultado = 'Divorciada'
            break;
        case 'viuva' : 
            resultado = 'Viúva'
            break;
    
        default:
            resultado = 'Status civil inválido.'
            break;
    }

    alert(`Seu status civil é : ${resultado} `)

});