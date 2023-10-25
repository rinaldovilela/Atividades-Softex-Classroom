document.getElementById("questao13").addEventListener("click", function() {
    console.log("Script executado");
    
    let alunos = [
        {nome : "Augusto", nota: 0},
        {nome : "Gabriela", nota: 0},
        {nome : "Simone", nota: 0},
        {nome : "Rivaldo", nota: 0},
        {nome : "Ray", nota: 0}
    ]

    for (let i = 0; i < alunos.length; i++) {
        const nota = parseFloat(prompt(`Digite a nota de ${alunos[i].nome}:`));
        alunos[i].nota = nota;
    }
    function calcularMediaAlunos(listaAlunos) {
        if (listaAlunos.length === 0 ) {
            return null
        }

        let somaNotas = 0
        for (let i = 0; i < listaAlunos.length; i++) {
            somaNotas += listaAlunos[i].nota
        }

        let media = somaNotas / listaAlunos.length
        return media
    }

    const mediaDasNotas = calcularMediaAlunos(alunos)

    console.log(`A media das notas dos alunos é : ${mediaDasNotas}`)

    


});