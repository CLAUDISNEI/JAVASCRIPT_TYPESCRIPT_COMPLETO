//selecionando todos os parágrafos dentro da classe paragrafos
let paragrafos = document.querySelectorAll('.paragrafos p');

//através do método do javascript 'getComputedStyle' podemos capturar todos os estilos que estão presentes dentro do elemento passado como parâmetro no método. A variável estiloBody terá todos os estilos do body
let estilosBody = getComputedStyle(document.body);

//backgroundColorBody irá guardar somente a cor do background da variável estilosBody.
const backgroundColorBody = estilosBody.background;

// paragrafos.forEach((el)=>{
//     el.style.background = 'blue';
// })

for(let el of paragrafos){
   console.log(el);
}

//passamos a cor que está armazenada em backgroundColorBody para todos os paragrafos.
for (let el of paragrafos){
    el.style.background = backgroundColorBody;
    el.style.color = '#ffffff';
}