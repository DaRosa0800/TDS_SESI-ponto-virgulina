const aluno = {
    nome: "Emanuel",
    idade: 53,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno);
console.log(aluno.nome); // Mais usado e mais recomedado
console.log(aluno["idade"]);
console.log(aluno.matricula = "2025A");
console.log(aluno.idade = 53);

aluno.matricula = "2025A"; // Adicionar
aluno.idade = 53; // Alternar

delete aluno.curso; // Remove

console.log(aluno);