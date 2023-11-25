const peso = prompt("Digite o peso da pessoa : ");
const altura = prompt("Digite a altura da pessoa:");

if (peso !== null && altura !== null) {
  const pesoNum = parseFloat(peso);
  const alturaNum = parseFloat(altura);

  function imc(param1: number, param2: number): number {
    return param1 / (param2 * param2);
  }

  const resultado = imc(pesoNum, alturaNum);

  console.log(`O IMC desta pessoa é : ${resultado.toFixed(2)}`);
} else {
  console.error("Peso ou altura inválidos ou a entrada foi cancelada.");
}
