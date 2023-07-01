const nome = 'Claudisnei Bello';
const nomes = [ 'Claudio', 'Debora', 'Caroline', 'Sthefany'];

//estrutura for
for(let i=0 ; i<nome.length ; i++){
    console.log(nome[i]);
}

//estrutura for in
for (let i in nome){
    console.log(nome[i]);
}
console.log('#########');
//estrutura for for
for(let valor of nomes){
    console.log('for of: ',valor);
}
console.log('#########');
//estrutura foreach
nomes.forEach((el)=>{
    console.log('forEach: ',el);
})

//For classico - arrays ou strings
//for in - string, array ou objetos
//for of - iteráveis, arrays ou strings
