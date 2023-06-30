let a = 'A';
let b = 'B';
let c = 'C';

//atribuiçao via desetruturaçao
let numeros = [1,2,3];
[a, b, c] = numeros;
console.log(a,b,c);

//iniciando sem desestruturação
const num = [1,2,3,4,5,6,7,8,9];

const primeiroN = num[0];
const segundoN = num[1];

console.log(primeiroN, segundoN);

//agora com desestrurizacao
var [primeiro, segundo] = num;

console.log(primeiro, segundo);

//pegando o resto do array
var [primeiro, segundo, ...resto] = num;
console.log(primeiro, segundo, resto);

//matrizes
const matriz = [ [1,2,3],[4,5,6],[7,8,9]];
const [lista1,lista2,lista3] = matriz;

console.log(lista2);
console.log(lista2[1]);