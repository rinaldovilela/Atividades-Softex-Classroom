document.getElementById("questao4").addEventListener("click", function() {
    console.log("Script executado");

alert("Vamos verificar se o número é ímpar ou par. :::><")

let n = parseInt(prompt("Digite um número."))

let divResto = n % 2

if(divResto === 0 ){
    alert("O número é par")
}else{
    alert("O número é ímpar")
}

})