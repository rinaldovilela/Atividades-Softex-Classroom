let totalAlunos = 5
let notasPorAluno = 5
let notasAprovados = 0

for(let i = 1; i <= 5; i++){

    let somaNota = 0
    
    for(let j = 1; j <= notasPorAluno; j++) {
    let nota = parseFloat(prompt(`Digite a ${j}º nota do aluno ${i} . `))
    somaNota += nota;
    }

    let media = somaNota / notasPorAluno

    if(media >= 7) {
        notasAprovados++
    }
}

console.log(`Quantidade de alunos aprovados: ${notasAprovados}`)