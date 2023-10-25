let numero = prompt("Digite um número inteiro:");
let somaDigitosPares = 0;

for (let i = 0; i < numero.length; i++) {
    const digito = parseInt(numero[i]);

    if (digito % 2 === 0) {
        somaDigitosPares += digito;
    }
}

console.log(`A soma dos dígitos pares do número ${numero} é: ${somaDigitosPares}`);