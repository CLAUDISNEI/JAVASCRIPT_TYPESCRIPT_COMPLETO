let num1 = 9.5467;
let num2 = Math.floor(num1);
console.log(`Math.flor(${num1}): ${num2}`);
num2 = Math.ceil(num1);
console.log(`Math.ceil(${num1}): ${num2}`);
num2 = Math.round(num1);
console.log(`Math.round(${num1}): ${num2}`);
console.log('Math.max(1,2,4.5,1.2,65,2,4,5,6,8,7)=',Math.max(1,2,4.5,1.2,65,2,4,5,6,8,7));
console.log('Math.min(1,2,4.5,1.2,65,2,-4,5,6,8,7)=',Math.min(1,2,4.5,1.2,65,2,-4,5,6,8,7));
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log("Math.round(Math.random() * (10 - 5) + 5) = ",Math.round(Math.random() * (10 - 5) + 5));

