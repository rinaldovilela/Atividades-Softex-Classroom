document.getElementById("questao9").addEventListener("click", function() {
    console.log("Script executado");
    
    let pesoString = (prompt("Digite o peso da pessoa. "))

    let alturaString = (prompt("Digite a altura da pessoa."))

    pesoString = pesoString.replace(',', '.');

    alturaString = alturaString.replace(',', '.');

    let peso = parseFloat(pesoString)

    let altura = parseFloat(alturaString)

    let imc = peso / (altura * altura)

    if(imc < 17 ){
        alert(`IMC = ${imc}. Está muito abaixo do peso.`)
    }else if(imc >= 17 && imc <= 18.49){
        alert(`IMC = ${imc}. Está abaixo do peso.`)
    }else if(imc >= 18.5 && imc <= 24.99){
        alert(`IMC = ${imc}. Está no peso normal.`)
    }else if(imc >= 25 && imc <= 29.99){
        alert(`IMC = ${imc}. Está acima do peso.`)
    }else if(imc >= 30 && imc <= 34.99){
        alert(`IMC = ${imc}. Está na obesidade 1.`)
    }else if(imc >= 35 && imc <= 39.99){
        alert(`IMC = ${imc}. Está na obesidade 2 (Severa).`)
    }else {
        alert(`IMC = ${imc}. Está na obesidade 3 (Mórbida).`)
    }
    
});
