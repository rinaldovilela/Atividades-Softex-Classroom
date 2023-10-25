document.getElementById("questao11").addEventListener("click", function() {
    console.log("Script executado");
    

    let salarioString = prompt("Digite o salário de um funcionário.")

    salarioString = salarioString.replace(',', '.')

    let salario = parseFloat(salarioString)

    if(salario > 1500.00){
        alert(`O aumento para o salário informado será de R$ ${salario + (salario * 0.10)}`)
    }else{
        alert(`O aumento para o salário informado será de R$ ${salario + (salario * 0.15)}`)
    }

});