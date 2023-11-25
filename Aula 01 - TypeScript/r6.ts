const questao6 = document.getElementById("questao6");

if (questao6 instanceof HTMLElement) {
    questao6.addEventListener("click", () => {
        console.log("Script executado.");

        const input = prompt('Digite um número inteiro para saber se ele é Par:');

        if (input !== null) {
            const num1 = parseInt(input);

            function isPar(num: number): boolean {
                return num % 2 === 0;
            }

            const resultado = isPar(num1);

            console.log(resultado);
        } else {
            console.error("Entrada inválida ou cancelada.");
        }
    });
} else {
    console.error("Elemento 'questao6' não encontrado ou não é um HTMLElement.");
}
