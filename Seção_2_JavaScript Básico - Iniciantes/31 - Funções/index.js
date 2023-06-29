function saudacao(nome){
    return `Bom dia!, ${nome}`;
}
console.log(saudacao('Maria'));

const variavel = saudacao("Luiz");
console.log(variavel);

//arrow function
 soma =( x, y)=>{
     resultado = x + y;
    return resultado;
};

console.log('Resultado: ', soma(8,3));
