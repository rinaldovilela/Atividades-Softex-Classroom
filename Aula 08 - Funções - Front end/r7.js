document.getElementById("questao7").addEventListener("click", function () {
  console.log("Script executado");
  
  let n1 = parseFloat(prompt('Digite a primeira nota'))
  let n2 = parseFloat(prompt('Digite a segunda nota'))
  let n3 = parseFloat(prompt('Digite a terceira nota'))


  function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
    
  }

  mediaAritimetica = media(n1, n2, n3)

  console.log(`A média aritimética das notas é ${mediaAritimetica.toFixed(2)}`)



});
