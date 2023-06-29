
//Primitivos (imutável) ou seja alterando o valor de A não altera o valor de B (string, number, boolean, undefined, null, bigint, symbol).
console.log('Primitivos (imutável) ou seja alterando o valor de A não altera o valor de B (string, number, boolean, undefined, null, bigint, symbol)');
let a = 'A';
let b = a; //copiando
console.log('\nlet a= A');
console.log('let b= B')
console.log(`a=${a},b=${b}`);

console.log('Alterando o valor de a="C"');
a = 'C';
console.log('\nO valor de b não será alterado');
console.log(`a=${a}, b=${b}`);

//valor por referëncia (array, object, function)
console.log('\nQuando passamos o valor por referëncia (array, object, function), o valor da outra variável será alterada junto com a primeira');
console.log('let num1=[1,2,3]');
console.log('let num2 = num1');
let num1 = [1,2,3];
let num2 = num1;
console.log('\nOs valores de num1 e num2 serão iguais: ', num1, num2);
console.log('\nQuando alteramos o valor de num1, veremos que num2 tambem será alterado');
num1.push(4);
console.log('\nnum1.push(4');
console.log(`num1=${num1}, num2=${num2}`);
console.log(`\nVamos remover um elemento de num2`);
num2.pop();
console.log('num2.pop()');
console.log('\nVeremos que irá alterar os dois arrays pois ambos apontam para o mesmo lugar na memória');
console.log(`num1=${num1}, num2=${num2}`);
console.log(`\nPara copiarmos somente os valores para um array devemos utilizar o operador spread ...`);
let num3 = [...num1];
console.log(`\nCopiando os valores de num1 para uma variável num3:`);
console.log(`let num3 = [...num1]`);
console.log(`num3 = ${num3}`);
console.log('\nAlterando a variavel num1 o valor de num3 não será alteado');
num1.push(4);
console.log(`num1.push(4)`);
console.log(`num1 = ${num1}, num2=${num2}, num3=${num3}`);
console.log(`\nCriando um objeto para exemplificar a passagem de valor por referência`);
let p = {
    nome: 'João',
    sobrenome: 'Silva'
};
console.log('let p= {nome: "João", sobrenome:"Silva"}');
console.log(`\nCriando outra variável e copiando o valor `)
let p2 = p;
console.log('let p2=p');
console.log('Alterando o nome na variável p2');
p2.nome = 'Pedro';
console.log('p2.nome = "Pedro"');
console.log(`Variável p = ${JSON.stringify(p)}`);
console.log('Vemos que ao alterar o nome na variável p2 o nome também foi alterado na variável p');
console.log(`\nTemos que fazer um spread para a variável p2 dos dados da variável p`)
p2 = {...p};
console.log('p2 = {...p}')
console.log('\nDesta forma ao realizar a alteração do nome de p2, a variável p não será alterada');
p2.nome = 'Maria';
console.log('p2.nome = Maria');
console.log(`Conteúdo da variável p2= ${JSON.stringify(p2)}`);
console.log(`Conteúdo da variável p = ${JSON.stringify(p)}`);