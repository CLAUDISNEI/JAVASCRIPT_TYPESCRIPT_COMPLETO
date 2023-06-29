const num1 = Number(prompt('Digite um número:'));
//num1 = 99.8546;
// let number = document.querySelectorAll('.number');
//     number.forEach(element => {
//         element.innerHTML = num1;
//     });

// let integer = document.querySelector('#integer');
// integer.textContent = Number.isInteger(number);

// let square = document.querySelector('#square');
// square.innerHTML = num1 ** 0.5;

// let isNumber = document.querySelector('#isnumber');
// isNumber.innerHTML = Number.isNaN(num1);

// let downRound = document.querySelector('#downRound');
// downRound.innerHTML = Math.floor(num1);

// let upRound = document.querySelector('#upRound');
// upRound.innerHTML = Math.ceil(num1);

// let numRound = document.querySelector('#numRound');
// numRound.innerHTML = num1.toFixed(2)
let texto = '';
texto += `<h1>O seu número é <span>${num1}</span></h1>`;
texto += `<p>Raiz quadrada: ${num1 ** (1/2)}</p>`;
texto += `<p>${num1} é inteiro : ${Number.isInteger(num1)}</p>`;
texto += `<p>É NaN: ${Number.isNaN(num1)}</p>`;
texto += `<p>Arredondado para baixo: ${Math.floor(num1)}</p>`;
texto += `<p>Arredondado para cima: ${Math.ceil(num1)}</p>`;
texto += `<p>Com duas casas decimais: ${num1.toFixed(2)}</p>`;

let container = document.querySelector('.container');
let txt = document.createElement('div');
txt.innerHTML = texto;
//document.body.appendChild(txt)
container.appendChild(txt);
