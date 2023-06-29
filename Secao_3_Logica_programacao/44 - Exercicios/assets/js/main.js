//parando o envio do formulário
//capturando o evento submit do formulário
const form = document.querySelector('.form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    //pegando os valores dos inputs
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    //utilizando a classe Number para capturar um número
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //se o peso for falso
    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }

    //se altura for falsa
    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    //calculando o imc
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    //montando a mensagem que será exibida
    const msg = `Seu IMC é ${imc} (${nivelImc}).`

    setResultado(msg, true);
});

//funçao que calcula o imcq2
getImc=(peso, altura)=>{
    const imc = peso / altura ** 2;
    return imc;
}

//funçao que retorna a categoria do imc
getNivelImc=(imc)=>{

    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']

    if(imc > 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];    
    if(imc >= 24.9) return nivel[2];    
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5)  return nivel[0];
    
}

criaP=()=>{
    const p = document.createElement('p');
    return p;
}

//terá dois parametros um será a mensagem e o outro será o tipo de resultado que poderá ser verdadeiro ou falso.
setResultado=(msg, isValid)=>{
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    //criando o paragrafo
    const p = criaP();

    //verificando se a mensagem é true ou false e setando um fundo diferente
    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else{
        p.classList.add('bad');
    }

    //adicionando a mensagem ao paragrafo
    p.innerHTML = msg;

    //adicionando o paragrafo na div resultado
    resultado.appendChild(p);
}




