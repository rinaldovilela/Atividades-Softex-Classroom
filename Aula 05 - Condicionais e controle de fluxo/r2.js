document.getElementById("questao2").addEventListener("click", function() {
    console.log("Script executado");

alert("Verificar se o usuário é adulto ou não. :::><")

let idade = prompt("Digite sua idade . ")

if(idade >= 18) {
    alert("Usuário maior de idade")
}else if(idade < 18 && idade > 1) {
    alert("Usuário menor de idade")
}else if( idade < 1 || idade >= 0) {
    alert("Usuário é um bebê kk")
}else {
    alert(NaN)
}

})