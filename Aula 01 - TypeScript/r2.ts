const questao2 = document.getElementById("questao2");

if (questao2) {
    questao2.addEventListener("click", () => {
        console.log("Script executado");

        function criarFrases() {
            console.log('Estudar é muito bom');
            console.log('Paciência e persistência');
            console.log('Revisão é a mãe do aprendizado');
        }

        criarFrases();
        criarFrases();
        criarFrases();
    });
}
