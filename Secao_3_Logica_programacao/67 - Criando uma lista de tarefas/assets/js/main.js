//criando cosntantes que irão capturar os elementos html
const inputTarefa = document.querySelector('.input-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const ulTarefas = document.querySelector('.tarefas');

//criando listener para capturar o click do botão
btnAddTarefa.addEventListener('click',()=>{
    criaTarefa(inputTarefa.value);
});

//adicionando um evento para que quando apertarmos a tecla 'enter`
//dentro do inputTarefa, a tarefa seja adicionada
inputTarefa.addEventListener('keypress',(e)=>{
    if(e.keyCode === 13){
        criaTarefa(inputTarefa.value);
    }
    console.log(`Tecla pressionada: ${e.key} - Keycode: ${e.keyCode}`);
    console.log(e);
})

//adicionando evento ao botao do li para apagar a tarefa
document.addEventListener('click', (e)=>{
    //capturando o item que foi clicado através o .target
    const el = e.target

    /**Verificando se o elemento clicado possui a classe
     * apagar que foi adicionado ao botao da tarefa
     */
    if(el.classList.contains('apagar')){
        //vamos apagar o parent do botão que foi clicado
        //utilizando .parentElement.remove()
        el.parentElement.remove();

        //salvando as tarefas para atualizar o localStorage
        salvarTarefa();
    }
})


//função para criar o li
const criaLi=()=>{
    const li = document.createElement('li');
    //adicionando um botão ao final do li

    return li;
}

//função para criar o botão ao lado do li para apagar
//vamos receber um li onde será adicionado o botao.
const criaBotaoApagar=(li)=>{
    const btn = document.createElement('button');
    btn.innerText = 'Apagar';

    //adicionando a classe apagar no botao;
    btn.setAttribute('class', 'apagar');
    btn.setAttribute('title', 'Apagar esta tarefa');

    //adicionando um espaço entre o texto do li e o botao
    li.innerText += ' ';
    li.appendChild(btn)
}

//funcão para limpar o conetúdo do input
const limparInput=()=>{
    inputTarefa.value = "";
    inputTarefa.focus;
}

//funcão que irá pegar o conteúdo do input e criar a tarefa
const criaTarefa=(textoInput)=>{
    //verificando se há texto do input e parando caso não tenha
    if(!inputTarefa){
        alert('Preencha o input de tarefas');
        return;
    }
    //criando um 'li' que será adicionado a 'ul' da página
    //mas iremos utilizar uma outra função que irá criar o li
    const li = criaLi();

    //depois iremos adicionar o texto do input dentro do li com
    //innerText
    li.innerText = textoInput;

    //adicionando o li criando dentro da ul utilizando o 
    //appendChild()
    ulTarefas.appendChild(li);

    //limpando os dados do input e retorando o foco para o input;
    limparInput();

    //adiciona o botão dentro do li
    criaBotaoApagar(li);

    //salvando a tarefa
    salvarTarefa();
}

//funcao para salvar as tarefas no localStorage
const salvarTarefa=()=>{
    //iremos verificar quantos li tem dentro da ul tarefas
    //e vamos salvar os textos deles
    const liTarefas = ulTarefas.querySelectorAll('li');
   
    //criando um array que irá armazenar o texto de cada li
    let textoTarefas = [];
    
    /**Percorrendo o nodeList, criamos uma variavel texto
     * que irá receber somente o texto o li porém utilizando
     * o metodo .replace vamos retirar ao texto 'Apagar' que
     * seria o texto do botao e o método .trim para remover o
     * espaco vazio.
     * depois disso adicionamos o texto dentro do array texto
     * tarefas
     */
    liTarefas.forEach(el=>{
        let texto = el.innerText.replace('Apagar','').trim();
        textoTarefas.push(texto);
    });

    //vamos criar um JSON para salvar os textos no formato string
    //para podermos utilizar esses dados depois. Criando novamente
    //um array
    const tarefasJSON = JSON.stringify(textoTarefas);
    console.log(tarefasJSON);

    //vamos salvar os dados no localStorage para isso utilizamos
    //o método .setItem onde passamos um nome que será utilizado
    //para recuperar os dados juntamente do com os dados que
    //serao salvos. Sendo que somente podem ser salvo dados
    //no formato de string, por isso utilizamos o JSON.stringify
    localStorage.setItem('tarefas', tarefasJSON);

    //para testar vamos salvar algumas tarefas e verificar se
    //estao sendo salvas no localStorage


}

//funcao que irá pegar os dados salvos no localStorage e 
//inserir esses dados na página
const adicionaTarefasSalvas=()=>{
    //criamos uma constante e utilizando o método .getItem do
    //localStorage passamos o nome do ítem que foi salvo
    //anteriormente. Temos que converter novamente os dados em 
    //um array fazemos isso utilizano o JSON.parse();
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    console.log(tarefas);

    //vamos percorrer a lista de tarefas e adicionar a tarefa
    //na página
    tarefas.forEach(t=>criaTarefa(t));
}

adicionaTarefasSalvas();