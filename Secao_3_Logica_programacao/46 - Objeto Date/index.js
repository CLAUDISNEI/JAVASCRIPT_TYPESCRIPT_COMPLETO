/*
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
//a funcao date é uma funcao construtora toda vez que criamos uma variavel que irá receber um objeto temos que utilizar a palavra new. neste caso não passamos nenhum parâmetro para o objeto Date e será retornado a data e hora atual

const tresHoras = 60 * 60 * 3 * 1000; //Meu fuso horário
const umDia = 60 * 60 * 24 * 1000; //Um dia em milisegunod

const data = new Date(0 + tresHoras - umDia); // irá retornar /01/1970 Timestamp unix ou época unix subtraido de um dia

//irá retornar Sat Apr 27 2019 14:25:43
const data1 = new Date(2019, 3, 27, 14, 25, 43); //ano, mes, dia, hora, minuto, segundo, milesimo de segundo

//podemos passar como parametro uma data no formato string
const data2 = new Date('2019-4-21 20:15:30')

//utilizando o método .toString() será retornado a data completa
console.log(data.toString())
console.log(data1.toString())
console.log(data2.toString())

//pegando valores separados de uma data
console.log('Dia ',data2.getDate())
console.log('Mês ',data2.getMonth() + 1) // mês começa do zero
console.log('Ano ',data2.getFullYear())
console.log('Hora ',data2.getHours())
console.log('Minuto ',data2.getMinutes())
console.log('Segundo ',data2.getSeconds())
console.log('ms ',data2.getMilliseconds())
console.log('Dia semana: ',data2.getDay()) //o número do dia da semana e não do mês e começa do zero sendo o domingo
console.log('Data atual em milesimos de segundo: ', Date.now())

 //o número do dia da semana e não do mês e começa do zero sendo o domingo

console.log('Data atual em milesimos de segundo: ', Date.now())
*/

//função para carregar o zero a esquerda dos números das datas
function zeroAEsquerda(num){
    return num>=10 ? num : `0${num}`;
}

//criando uma função para formatar a data
function formataData(data2){
    const dia = zeroAEsquerda(data2.getDate());
    const mes = zeroAEsquerda(data2.getMonth() + 1);
    const ano = zeroAEsquerda(data2.getFullYear());
    const hora = zeroAEsquerda(data2.getHours());
    const minuto = zeroAEsquerda(data2.getMinutes());
    const segundo = zeroAEsquerda(data2.getSeconds());
    const ms = zeroAEsquerda(data2.getMilliseconds());
    const diaSemana = data2.getDay();

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}Z${ms}`
}

const data3 = new Date();
console.log(formataData(data3));