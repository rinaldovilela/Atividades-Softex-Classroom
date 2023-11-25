const questao5 = document.getElementById("questao5");

if (questao5) {
  addEventListener("click", () => {
    console.log("Script executado");

    function soma(a, b) {
      return a + b;
    }

    const resultado = soma(3, 3);

    console.log(resultado);
  });
}
