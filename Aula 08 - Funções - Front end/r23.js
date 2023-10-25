document.getElementById("questao23").addEventListener("click", function() {
    console.log("Script 23 executado.");

    function pessoaMaisVelha(pessoas) {
        if (pessoas.length === 0) {
            return "Não há pessoas no array.";
        }
        
        let pessoaMaisVelha = pessoas[0];
        
        for (let i = 1; i < pessoas.length; i++) {
            if (pessoas[i].idade > pessoaMaisVelha.idade) {
                pessoaMaisVelha = pessoas[i];
            }
        }
        
        return pessoaMaisVelha.nome;
    }
    let pessoas = [
        { nome: "Rinaldo", idade: 25 },
        { nome: "Ray", idade: 23 },
        { nome: "Simone", idade: 43 },
        { nome: "Rivaldo", idade: 49 }
    ];
    
    let nomeMaisVelho = pessoaMaisVelha(pessoas);
    console.log("A pessoa mais velha é:", nomeMaisVelho);
    

});