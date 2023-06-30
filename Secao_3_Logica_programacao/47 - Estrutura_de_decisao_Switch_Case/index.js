
//criando uma estrutura de decisão para mostrar o dia da semana

const data = new Date('1954-01-31 23:54:09');
const diaSemana = data.getDay();

/*
let diaSemanaTexto;

//utilizando a estrutura if, else if.
if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
}else if(diaSemana === 1){
    diaSemanaTexto = 'Segunda-feira';
}else if(diaSemana === 2){
    diaSemanaTexto = 'Terça-feira';
}else if(diaSemana ==='3'){
    diaSemanaTexto = 'Quarta-feira';
}else if(diaSemana === 4){
    diaSemanaTexto = 'Quinta-feira';
}else if(diaSemana === 5){
    diaSemanaTexto = 'Sexta-feira';
}else if(diaSemana === 6){
    diaSemanaTexto = 'Sábado';
}else{
    diaSemanaTexto = '';
}


//utilizando a estrutura de decisão switch
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
        break;
}
*/

//utilizando uma função com o switch
getDiaSemanaTexto=(diaSemana)=>{
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda-Feira';
        case 2:
            return diaSemanaTexto = 'Terça-Feira';
        case 3:
            return diaSemanaTexto = 'Quarta-Feira';
        case 4:
            return diaSemanaTexto = 'Quinta-Feira';
        case 5:
            return diaSemanaTexto = 'Sexta-Feira';
        case 6:
            return diaSemanaTexto = 'Sábado';
        default:
            return diaSemanaTexto = '';
    }
}

console.log(diaSemana, getDiaSemanaTexto(diaSemana));

