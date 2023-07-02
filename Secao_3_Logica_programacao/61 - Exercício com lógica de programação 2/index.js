//Escreva a função chamada ePaisagem que recebe dois argumentos, largura e altura de uma image(number). Retorne true se a imagem estiver no modo paisagem

const ePaisagem=(largura, altura)=>{
    let lar = Number(largura);
    let alt = Number(altura);
    if(!alt){
        console.log('Altura inválida!');
        return;
    }
    if(!lar){
        console.log('Largura inválida!');
        return;
    }
    return alt > lar ? false : true;
}

console.log(ePaisagem(200,134));