document.getElementById("questao22").addEventListener("click", function() {
    console.log("Script 22 executado.");
    
    function filtrarLivrosPorAutor(livros, autorDesejado) {
        const livrosDoAutor = livros.filter(livro => livro.autor === autorDesejado);
        return livrosDoAutor;
    }
    
    const livros = [
        { titulo: "Livro A", autor: "Autor X", ano: 2020 },
        { titulo: "Livro B", autor: "Autor Y", ano: 2018 },
        { titulo: "Livro C", autor: "Autor X", ano: 2022 },
        { titulo: "Livro D", autor: "Autor Z", ano: 2019 }
    ];
    
    const autorDesejado = "Autor X";
    const livrosDoAutor = filtrarLivrosPorAutor(livros, autorDesejado);
    console.log("Livros escritos pelo autor:", livrosDoAutor);
    


});