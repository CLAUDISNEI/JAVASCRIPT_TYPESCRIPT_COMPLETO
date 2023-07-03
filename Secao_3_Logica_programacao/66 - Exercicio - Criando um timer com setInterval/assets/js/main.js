/*
let display = document.querySelector('#resultado h1');
let btnIniciar = document.querySelector('#iniciar');
let btnPausar = document.querySelector('#pausar');
let btnReiniciar = document.querySelector('#reiniciar');

let dspHora = document.querySelector('.hora');
let dspMinuto = document.querySelector('.minuto');
let dspSegundo = document.querySelector('.segundo');

let hora = Number(dspHora.innerHTML);
let minuto = Number(dspMinuto.innerHTML);
let segundo = Number(dspSegundo.innerHTML);

const acrescentarZero=(num)=>{
    return num >= 10 ? num : `0${num}`;
}

const montarHora=()=>{
    if(segundo < 59){
        segundo ++;
    }else{
        segundo = 0;
        if(minuto < 59){
            minuto ++;
        }else{
            minuto = 0;
           if(hora < 59){
            hora ++
           }else{
            hora = 0;
           }
        }
    }
    
    dspSegundo.innerHTML = acrescentarZero(segundo);
    dspMinuto.innerHTML = acrescentarZero(minuto);
    dspHora.innerHTML = acrescentarZero(hora);    
}

const alterarCorDisplay=(addClass, remClass)=>{
        dspHora.classList.add(addClass);
        dspMinuto.classList.add(addClass);
        dspSegundo.classList.add(addClass);
        dspHora.classList.remove(remClass);
        dspMinuto.classList.remove(remClass);
        dspSegundo.classList.remove(remClass);
}

let timer = '';
//criando evento click no botão iniciar
btnIniciar.addEventListener('click',(e)=>{
    alterarCorDisplay('iniciarReiniciar','pausar');
    timer = setInterval(()=>{
        montarHora();
    }, 1000);
});

//criando evento click no botão pausar
btnPausar.addEventListener('click',(e)=>{
    alterarCorDisplay('pausar','iniciarReiniciar');
    setTimeout(()=>{
         clearInterval(timer,1000);
    },10);
    console.log('Pausei');
});

//criando evento click no botão reiniciar
btnReiniciar.addEventListener('click',(e)=>{
    console.log('Botão reiniciar');
    alterarCorDisplay('iniciarReiniciar','pausar');
    dspHora.innerHTML = acrescentarZero(0);
    dspMinuto.innerHTML = acrescentarZero(0);
    dspSegundo.innerHTML = acrescentarZero(0);
});
*/

//Resolução do professor
const relogio=()=>{
    let display = document.querySelector('#resultado h1');

    //criando uma data que será retornada acrescentando segundos
    const criarHoraDosSegundos=(segundos)=>{
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12:false, 
            timeZone: 'UTC'
        });
    }

    let segundo = 0;
    let timer = ''
    const iniciaRelogio=()=>{
        timer = setInterval(()=>{
            segundo ++;
            display.innerHTML = criarHoraDosSegundos(segundo);
        },1000);
    }

    document.addEventListener('click',(e)=>{
        const el = e.target;
        if(el.classList.contains('btniniciar')){
            display.classList.remove('pausar');
            clearInterval(timer);
            iniciaRelogio();
        }
        if(el.classList.contains('btnpausar')){
            display.classList.add('pausar');
            clearInterval(timer);
        }
        if(el.classList.contains('btnreiniciar')){
            display.classList.remove('pausar');
            clearInterval(timer);
            segundo = 0;
            display.innerHTML = criarHoraDosSegundos(segundo);
        }
    });
};

relogio();

