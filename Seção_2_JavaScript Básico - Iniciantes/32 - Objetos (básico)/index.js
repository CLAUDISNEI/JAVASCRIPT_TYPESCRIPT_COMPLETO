const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 22,

    fala(){
        console.log('Olá mundo!', this.nome);
    },

    incrementaIdade(){
        ++this.idade;
        console.log('A minha idade atual é : ',this.idade);
    }
};

console.log(pessoa);
console.log(pessoa.nome);

function criarPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criarPessoa('Daniel','Siveira',32);
console.log(pessoa1.nome);

pessoa.fala();
pessoa.incrementaIdade();
pessoa.incrementaIdade();
pessoa.incrementaIdade();
pessoa.incrementaIdade();

