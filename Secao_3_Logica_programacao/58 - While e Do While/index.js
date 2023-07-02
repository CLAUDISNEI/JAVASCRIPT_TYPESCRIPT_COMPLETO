
//funcao para calcular um número qualquer dentro de um intervalo
const min = 1;
const max = 50;
function random(min, max){
    return Math.floor(Math.random()*(max-min) + min);
}

//ordena números
orndenaNumeros=(numeros)=>{
  
    //ordendando a cartela
    for(let i=0 ; i < numeros.length ; i++){
        for(let a=0 ; a < numeros.length ; a++){
            if(numeros[a] < numeros[a -1] ){
                let temp = numeros[a];
                numeros[a] = numeros[a-1];
                numeros[a-1] = temp; 
            }  
        }
    }

    return numeros;
}

//gerar numeros quina
numerosQuina=(min, max)=>{
    let cartela = [];

    do{
        let num = random(min, max);
        if(cartela.length == 0){
            cartela.push(num);
        }else{
            if(cartela.indexOf(num)== -1){
                cartela.push(num);
            }
        }
    }while (cartela.length < 5)
    
    cartela = orndenaNumeros(cartela);

    return cartela
}

// //bilhete jogado
// let bilhete=[];

// bilhete =[...numerosQuina(min, max)];

// sorteio=(bilhete)=>{
//     //irá contar quantas vezes o sorteio será realizado até encontrar um cartão premiado
//     let count = 0;

//     //são os números do sorteio
//     let numerosSorteados = numerosQuina(min, max);
//     let isMatch = false;
    
//     //laço que irá realizar o sorteio e irá contar quantas vezes o laço será executado até que o bilhete passado seja igual aos números do sorteio.
//     do{
        
//         for(let i=0 ; i < numerosSorteados.length ; i++){
//             if(bilhete.indexOf(numerosSorteados[i])== -1){
//                 isMatch = true;
//               //  console.log(isMatch);
//             }
//         }
//         if(isMatch == true){
//             numerosSorteados = numerosQuina(min, max);
//             count ++
//            // console.log(`Bilhete: ${bilhete} - Sorteio: ${numerosSorteados} - Qtd sorteios: ${count}`);
//         }
       
//     }while(isMatch == true);

//     return (`${bilhete} -  ${numerosSorteados} - ${count}`);

// };

gerarCartoes=(qtd)=>{
    let cartoes = [];

    for(let l=0 ; l < qtd ; l++){
        cartoes[l] = [...numerosQuina(min, max)];
        //console.log(numerosQuina(min, max));
    }

    return cartoes;
}

console.log(gerarCartoes(5));



