let nome = prompt(`Digite seu nome.`)

let tamanhoNome = nome.length

if(tamanhoNome > 5){
    alert("Seu nome tem mais de 5 caracteres.")

}else if(tamanhoNome < 5){
    alert("Seu nome tem menos que 5 caracteres ")

}else {
    alert("Seu nome tem exatamente 5 caracteres")
}