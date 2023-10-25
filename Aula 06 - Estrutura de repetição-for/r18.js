let lista = []

for(let i = 1; i <=10 ; i++){
    let numero = parseInt(prompt(`Digite o ${i}º número.`));
    lista.push(numero)

}
 let maior = lista[0]
for(let i = 1 ; i < lista.length; i++) {
    if (lista[i] > maior) {
        maior = lista[i];
    }
    
}
console.log(maior)

let menor = lista[0]
for(let i = 1 ; i < lista.length; i++) {
    if (lista[i] < menor) {
        menor = lista[i];
    }
    
}
console.log(menor)

alert(`O maior número digitado foi: ${maior} \n
O menor número digitado foi: ${menor}`)

console.log(lista)