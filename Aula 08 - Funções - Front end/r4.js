document.getElementById("questao4").addEventListener("click", function() {
    console.log("Script executado");

    function soma(num1, num2) {
        return num1 + num2;
    }

    teste1 = soma(10, 15)
    console.log(teste1)

    teste2 = soma(10, 20) + soma(30, 50)
    console.log(teste2)

    console.log(soma(50, 50))

});