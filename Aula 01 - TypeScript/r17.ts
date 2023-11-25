function verificarPropriedade(
  objeto: object,
  nomePropriedade: string
): boolean {
  return nomePropriedade in objeto;
}

const pessoa = { nome: "João", idade: 25, cidade: "São Paulo" };

const possuiNome = verificarPropriedade(pessoa, "nome");
console.log("Possui a propriedade 'nome':", possuiNome);

const possuiEmail = verificarPropriedade(pessoa, "email");
console.log("Possui a propriedade 'email':", possuiEmail);
