const questao4 = document.getElementById("questao4");

if (questao4) {
  addEventListener("click", () => {
    console.log("Script executado");

    function soma(num1: number, num2: number) {
      return num1 + num2;
    }

    const teste1 = soma(10, 15);
    console.log(teste1);

    const teste2 = soma(10, 20) + soma(30, 50);
    console.log(teste2);

    console.log(soma(50, 50));
  });
}
