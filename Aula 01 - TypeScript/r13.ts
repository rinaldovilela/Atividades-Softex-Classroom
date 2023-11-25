interface Aluno {
  nome: string;
  nota: number;
}

const alunos: Aluno[] = [
  { nome: "Augusto", nota: 0 },
  { nome: "Gabriela", nota: 0 },
  { nome: "Simone", nota: 0 },
  { nome: "Rivaldo", nota: 0 },
  { nome: "Ray", nota: 0 },
];

for (let i = 0; i < alunos.length; i++) {
  const input = prompt(`Digite a nota de ${alunos[i].nome}:`);
  if (input !== null) {
    const nota = parseFloat(input);
    if (!isNaN(nota)) {
      alunos[i].nota = nota;
    } else {
      console.error("Nota inválida. Digite apenas números.");
    }
  } else {
    console.error("Entrada cancelada. Operação interrompida.");
    break;
  }
}

function calcularMediaAlunos(listaAlunos: Aluno[]): number | null {
  if (listaAlunos.length === 0) {
    return null;
  }

  let somaNotas = 0;
  for (let i = 0; i < listaAlunos.length; i++) {
    somaNotas += listaAlunos[i].nota;
  }

  const media = somaNotas / listaAlunos.length;
  return media;
}

const mediaDasNotas = calcularMediaAlunos(alunos);

if (mediaDasNotas !== null) {
  console.log(`A média das notas dos alunos é: ${mediaDasNotas}`);
} else {
  console.error(
    "A lista de alunos está vazia ou houve um problema com as notas."
  );
}
