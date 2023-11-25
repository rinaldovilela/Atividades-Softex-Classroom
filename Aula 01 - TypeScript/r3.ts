const questao3 = document.getElementById("questao3");

if (questao3) {
    questao3.addEventListener("click", () => {
        console.log("Script executado");

        function soma(num1: number, num2: number) {
            console.log(num1 + num2);
        }

        soma(10, 15);
        soma(10, 20);
        soma(30, 50);
        soma(50, 50);
    });
}
