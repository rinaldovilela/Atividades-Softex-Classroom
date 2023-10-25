document.getElementById("questao10").addEventListener("click", function () {
  console.log("Script executado");
  
  let salario = parseFloat(prompt('Digite o salário para ser calculado o imposto de renda a ser pago : '))

  function calcularImpostoDeRenda(param) {
     if (param <= 1903.98) {
      return 'Isento'
    }else if(param >= 1903.99 && param <= 2826.65){
      return param * 0.075
    }else if (param >= 2826.66 && param <= 3751.05) {
      return param * 0.15
    }else if(param >= 3751.06 && param <=4664.68){
      return param * 0.225
    }else{
      return param * 0.275
    }
    
  }

  let aliquota = calcularImpostoDeRenda(salario)


  console.log(`O valor do imposto de renda a ser pago relacionado ao salário R$ ${salario} é de : R$${aliquota} `)

  alert(`O valor do imposto de renda a ser pago relacionado ao salário R$ ${salario} é de : R$${aliquota} `)

});
