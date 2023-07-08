//Diferentes formas de se declarar uma funçao 

/**declarando desta forma ocorre o chamado 'hoisting' que significa que a engine do javascript irá elevar as funções e variáveis declaradas com a palavra var para o topo do arquivo javascript, desta forma podemos chamar essa função em qualquer lugar do código que ela será executada normalmente*/

falaOI();
function falaOI(){
    console.log('Oie');
}

/**Fist-class objects - As funções são tratadas como dados */
const souUmDado = function(){
    console.log('Sou um Dado');
}
souUmDado();

/**podemos criar uma função que terá como paramentro uma funçao e executa essa funçao */
function executaFuncao(funcao){
    console.log('Essa função foi executada dentro de outra função:');
    funcao();
}
executaFuncao(souUmDado);

//Arrow function
const funcaoArrow =()=>{
    console.log('Sou uma arrow function');
}
funcaoArrow();

//dentro de um objeto
const objt = {
    falar(){
        console.log('Estou falando....');
    }
}
objt.falar();