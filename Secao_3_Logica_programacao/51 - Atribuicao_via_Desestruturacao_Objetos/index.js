//um objeto pessoa
var pessoa = { nome: 'Maria', sobrenome: 'Alves', idade: '69', altura: 1.60, endereco:{rua:'Rua São Pedro', numero: 320}};

console.log(pessoa);
console.log(pessoa.nome);

//atribuição via desestruturacao e utilizando um valor padrão quando não há variável no objeto, mas se tiver o valor do objeto será passado normalmente
var {nome, sobrenome, altura = '', endereco } = pessoa;

console.log(nome, sobrenome, altura, endereco);

//pegando somente um item de um objeto interno
var {nome, sobrenome, altura = '', endereco:{rua} } = pessoa;

console.log(nome, sobrenome, altura, rua);
