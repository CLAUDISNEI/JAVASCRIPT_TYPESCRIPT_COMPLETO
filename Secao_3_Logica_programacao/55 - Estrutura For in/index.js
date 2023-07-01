
let frutas = ['Uva', 'Maçã','Pera','Manga'];

//utilizando a estrutura for
for(let i=0; i<frutas.length ; i++){
    console.log('for :', frutas[i]);
}

//utilizando a estrutura for in
for (const i in frutas) {
    console.log('for in: ', frutas[i]);
}

//utilizando um objeto
let pessoa = {
    nome: 'Claudisnei',
    sobrenome: 'Bello',
    idade: 50
}

for( let chave in pessoa){
    console.log('for in objeto: ',chave, pessoa[chave])
}

