
const elementos = [
    {tag: 'p', texto:'Adicionando um texto qualquer pois'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto:'Frase 4'}
];

const result = document.querySelector('#resultado');

criarElementos=(elemento, txt='Texto padrao')=>{
    let el = document.createElement(elemento);
    el.innerHTML = txt;
    return el;
};

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let el = criarElementos(tag,texto);
    result.appendChild(el);
}
