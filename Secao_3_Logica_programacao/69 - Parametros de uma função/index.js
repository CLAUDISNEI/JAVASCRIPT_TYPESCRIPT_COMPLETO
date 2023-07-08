
/** Se enviarmos parâmetros que não foram definidos na função  esses parametros irão fazer parte da váriavel 'arguments' da função porem isso nao funciona com arrow function*/

function funcao(){
    console.log(arguments[2]);

}

funcao('Valor', 1,2,3,4,5,6,7,8,9,10);

function soma(){
    let total = 0;
    for(let val of arguments){
        total += val;
    }
    return total;
}

console.log(soma(4,8,22,5)); //39
console.log(soma('a',45)); //0a45

/**Podemos ainda declarar parametros na funçao e utilizar também a variável arguments para os parametros nao declaradadas */
function soma2(a, b, c){
    let total = 0;
    for(let val of arguments){
        total += val;
    }
    console.log('Total:',total,'Parametros:', a, b, c)
}
soma2(4,8,77,32,23); //Total: 144 Parametros: 4 8 77

/**Se uma quantidade menor de argumentos com relacao aos parametros da funcao o javascript irá retornar undefined para os parametros que nao foram passados argumentos */
function funcao2(a, b, c, d, e){
    console.log(a,b,c,d,e);
}
funcao2(4,8,3); //irá retornar 4 8 3 undefined undefined

/**Podemos utilizar também parametros com valores padrao */
function funcao3(a, b=0){
    console.log(a + b);
}
funcao3(6); // 6
funcao3(6,8); //14

/**Quando tivermos vários parámetros com valores padrao, podemos enviar como argumento undefined que será utilizado o valor padrao */
function funcao4(a, b=3, c=4){
    console.log(a + b + c);
}
funcao4(5,8,2); //15
funcao4(2, undefined, 9); //será utilizado o valor de b = 3 resultado = 14

/**desestruturacao de objetos */
function funcao5({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao5({nome:"Luix", sobrenome:'Otavio', idade: 33}); //Luix Otavio 33

let obj = {nome:"Luix", sobrenome:'Otavio', idade: 33};
funcao5(obj);//Luix Otavio 33

/**desestruturacao de arrays */
function funcao6([valor1, valor2, valor3]){
    console.log(valor1,valor2,valor3);
}
funcao6(['carro','fruta','cor']);//carro fruta cor

let array = ['carro', 'fruta', 'cor'];
funcao6(array); //carro fruta cor

/**Exemplo de uma funçao real utilizando o REST operator para pegar todos os argumentos que nao sao o operador e acumulador e salvar dentro de numeros */
function conta(operador, acumulador, ...numeros){
    numeros.forEach(n=>{
       switch (operador) {
        case '+':
            acumulador += n;
            break;
        case '-':
            acumulador -= n;
            break;
        case '*':
            acumulador *= n;
            break;
        case '/':
            acumulador /= n;
            break;
        default:
            console.log('Operador inválido');
            break;
       } 
    })
    console.log(acumulador);
}

conta('+', 0, 5,8,9); //22
conta('/', 1000, 5); //200
conta('*', 1, 2,4,6); //48
conta('-', 100, 22); //78
conta('%',3,4,9); //

/**Sempre que precisarmos enviar parametros nao determinados para uma funçao o ideal é utilizamos o rest operator */