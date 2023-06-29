let num1 = 1500.3342342333334432342;
let num2 = 2.5;
let temp = num1 * 'oi' ;

console.log('Somando dois números: ', num1+num2);
console.log('Somando um número e uma String= ', num1.toString() + num2);
console.log('Mostrando um número binário: ', num1.toString(2));
console.log('Arredondando um número: ', num1.toFixed(2));
console.log('O número é inteiro? :',Number.isInteger(num1));
console.log('O valor não é um número? :',Number.isNaN(temp));
