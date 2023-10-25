let numero = parseInt(prompt('Digite um número inteiro.'))

var somaDigitos = 0

for (;numero > 0; numero = Math.floor(numero / 10)){
    let digito = numero % 10;
    somaDigitos += digito
}

console.log(somaDigitos)