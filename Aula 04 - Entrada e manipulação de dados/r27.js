let data = prompt("Digite uma data no formato dd/mm/aaaa")

let partesData = data.split("/")

let dia = parseInt(partesData[0])
let mes = parseInt(partesData[1])
let ano = parseInt(partesData[2])

if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
    console.log("A data inserida é inválida")
} else {
    alert(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`)
}