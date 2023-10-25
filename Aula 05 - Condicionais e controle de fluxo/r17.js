document.getElementById("questao17").addEventListener("click", function() {
    console.log("Script executado");
    let idade = parseInt(prompt("Digite sua idade."))

    if(idade >= 0 && idade <=1){
        alert(`O usuário é um bebê`)
    }else if(idade > 1 && idade <= 12){
        alert(`O usuário é uma criança.`)
    }else if(idade > 12 && idade < 18){
        alert(`O usuário é um adolescente`)
    }else{
        alert(`O usuário é um adulto`)
    }
})