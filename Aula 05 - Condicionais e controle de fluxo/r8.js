document.getElementById("questao8").addEventListener("click", function() {
    console.log("Script executado");
    
    let n1 = parseInt(prompt("Digite o primeiro número."))
    let n2 = parseInt(prompt("Digite o segundo número."))
    let n3 = parseInt(prompt("Digite o terceiro número."))

    let menor, meio, maior

    if(n1 <= n2 && n1 <= n3){
        menor = n1
        if (n2 <= n3){
        meio = n2
        maior = n3
        }else {
        meio = n3
        maior = n2
        }
    }else if(n2 <= n1 && n2 <= n3){
        menor = n2
        if (n1 <= n3) {
            meio = n1
            maior = n3
        }else {
            meio = n3
            maior = n1
        }
    }else {
        menor = n3
        if(n1 <= n2){
            meio = n1
            maior = n2
        }else{
            meio = n2
            maior = n1
        }
    }

    alert(`A ordem crescente dos números é : ${menor}, ${meio}, ${maior}`)

});
