interface Livro {
  titulo: string;
  autor: string;
  ano: number;
}

function filtrarLivrosPorAutor(
  livros: Livro[],
  autorDesejado: string
): Livro[] {
  const livrosDoAutor = livros.filter((livro) => livro.autor === autorDesejado);
  return livrosDoAutor;
}

const livros: Livro[] = [
  { titulo: "Livro A", autor: "Autor X", ano: 2020 },
  { titulo: "Livro B", autor: "Autor Y", ano: 2018 },
  { titulo: "Livro C", autor: "Autor X", ano: 2022 },
  { titulo: "Livro D", autor: "Autor Z", ano: 2019 },
];

const autorDesejado: string = "Autor X";
const livrosDoAutor: Livro[] = filtrarLivrosPorAutor(livros, autorDesejado);
console.log("Livros escritos pelo autor:", livrosDoAutor);
