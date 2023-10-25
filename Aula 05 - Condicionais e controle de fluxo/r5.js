document.getElementById("questao5").addEventListener("click", function() {
    console.log("Script executado.");

let nota1 = parseInt(prompt("Digite a primeira nota do aluno"))
let nota2 = parseInt(prompt("Digite a segunda nota do aluno"))
let nota3 = parseInt(prompt("Digite a terceira nota do aluno"))

let somaNotas = nota1 + nota2 + nota3

let media = somaNotas / 3

if(media >= 7){
    alert("Aluno está aprovado!")
}else if(media < 7){
    alert("Aluno reprovado.")
}else{
    alert("Nota inválida, tente novamente.")
}

})