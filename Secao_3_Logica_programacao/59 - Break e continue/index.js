
const numeros = [1,2,3,4,5,6,7,8,9];

//com a palavra 'continue' podemos voltar ao próximo item do laço sem tereminar o laço atual
//a palavra break simplismente interrompe todo o laço assim que uma condição for atendida
for (let num of numeros){
    if(num === 2){
        console.log('pulei o numero 2');
        continue;
    }
   
    if(num === 7){
        console.log('7 encontrado, saindo...')
        break;
    }

    console.log(num);
    
}