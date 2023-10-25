document.getElementById("questao3").addEventListener("click", function() {
    console.log("Script executado");

let n1 = parseInt(prompt("Digite o primerio número inteiro"))
let n2 = parseInt(prompt("Digite o segundo número inteiro"))

if(n1 > n2){
    alert("O primeiro número é maior que o segundo número.")
}else if(n1 < n2){
    alert("O segundo número é maior que o primeiro número.")
}else if(n1 == n2){
    alert("Os dois números são iguais! :::><")
}else{
    alert("Tente novamente!")
}

})