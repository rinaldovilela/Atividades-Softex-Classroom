let notas = []

for(let i = 1; i <=5 ; i++){
    let nota = parseFloat(prompt(`Digite a nota ${i}`));
    notas.push(nota)
}

let soma = 0;
for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}

let media = soma / notas.length

console.log(media)