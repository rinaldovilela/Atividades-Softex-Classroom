document.getElementById("questao20").addEventListener("click", function() {
    console.log("Script executado");
    
    try {
        let nome = prompt('Digite seu nome:');
    
        let idade = parseInt(prompt('Digite sua idade:'));
    
        if (isNaN(idade)) {
            throw new Error('Idade não é um número válido.');
        }
    
        alert(`Nome: ${nome}. Idade: ${idade}`);
    
    } catch (erro) {
        alert(`Ocorreu um erro:', ${erro.message}`);
    }

});