let numero = prompt("Digite um número inteiro:");
let numeroInvertido = "";

for (let i = numero.length - 1; i >= 0; i--) {
    numeroInvertido += numero[i];
}

console.log(`O número ${numero} invertido é: ${numeroInvertido}`);