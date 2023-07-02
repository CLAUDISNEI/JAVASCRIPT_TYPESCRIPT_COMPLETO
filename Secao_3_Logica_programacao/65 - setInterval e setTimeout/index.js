
const mostraHora=()=>{
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

//utilizamos a função setInterval para executar uma função a cada intervalo definido
const timer = setInterval(()=>{
    console.log(mostraHora());
}, 1000);

//utilizamos a função setTimeout para parar a execucão de um código após um tempo determinado, utiliando a função clearInterval
setTimeout(() => {
    clearInterval(timer);
}, 10000);