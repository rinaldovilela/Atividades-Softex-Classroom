document.getElementById("questao6").addEventListener("click", function() {
    console.log("Script executado.");
    // Código da atividade 5

    let nome1 = prompt("Digite o nome da primeira pessoa.")
    let nome2 = prompt("Digite o nome da segunda pessoa")
    
    let numLetras1 = nome1.length

    let numLetras2 = nome2.length
    
    if(numLetras1 > numLetras2){
        alert(`O nome "${nome1}" é o nome que possui mais caractéres.`)
    }else if(numLetras1 < numLetras2){
        alert(`O nome "${nome2}" é o nome que possui mais caractéres.`)
    }else{
        alert("Ambos os nomes contém a mesma quantidade de caractéres!")
    }

});



