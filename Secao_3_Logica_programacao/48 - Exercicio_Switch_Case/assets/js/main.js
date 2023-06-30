
//capturando a div resultado
let textoData = document.querySelector('#resultado');

// essa data foi fornecida pelo professor
const data = new Date('2019-10-7 22:52:00')

//funcao que irá receber a data e retornará o dia da semana em texto

/*
formataDiaTexto=(data)=>{
    let dia = data.getDay();
    let diaTexto='';

    switch (dia) {
        case 0:
            return diaTexto = 'Domingo';
        case 1:
            return diaTexto = 'Segunda-Feira';
        case 2:
            return diaTexto = 'Terça-Feira';
        case 3:
            return diaTexto = 'Quarta-Feira';
        case 4:
            return diaTexto = 'Quinta-Feira';
        case 5:
            return diaTexto = 'Sexta-Feira';
        case 6:
            return diaTexto = 'Sábado';
        default:
            return diaTexto = '';
    }
}

//outra forma de fazer
formataDiaTexto=(data)=>{
    let dia = data.getDay();

    let diaTexto= [ 'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

    return diaTexto[dia];
}
//irá receber a data e irá retornar o mes em texto

formataMesTexto=(data)=>{
    let mes = data.getMonth();
    let mesTexto;
    switch (mes) {
        case 0:
            return mesTexto = 'Janeiro';
        case 1:
            return mesTexto = 'Fevereiro';
        case 2:
            return mesTexto = 'Março';
        case 3:
            return mesTexto = 'Abril';
        case 4:
            return mesTexto = 'Maio';
        case 5:
            return mesTexto = 'Junho';
        case 6:
            return mesTexto = 'Julho';
        case 7:
            return mesTexto = 'Agosto';
        case 8:
            return mesTexto = 'Setembro';
        case 9:
            return mesTexto = 'Outubro';
        case 10:
            return mesTexto = 'Novembro';
        case 11:
            return mesTexto = 'Dezembro';
        default:
            return mesTexto = '';
    }
}

//outra de forma de fazer utilizando array
formataMesTexto=(data)=>{
    let mes = data.getMonth();
    let mesTexto = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return mesTexto[mes];
}

//funcao que irá retornar um número menor de 10 com zero na frente
zeroAEsquerda=(num)=>{
    return num >=10 ? num : `0${num}`
}
//receberá a data e com auxilio das outras funcoes irá retornar o texto formatado na página
formataData=(data)=>{
    let ano = zeroAEsquerda(data.getFullYear());
    let hora = zeroAEsquerda(data.getHours());
    let min = zeroAEsquerda(data.getMinutes());
    let diaNum = zeroAEsquerda(data.getDate());
    let diaTexto = formataDiaTexto(data);
    let mesTexto = formataMesTexto(data);

    return `${diaTexto}, ${diaNum} de ${mesTexto} de ${ano} ${hora}:${min}`
}
*/
//cria um paragrafo na pagina
let p = document.createElement('p');

//adiciona uma classe de estilo
p.classList.add('paragrafo');

//adiciona dentro do paragrafo o texto retornado pela funcao
//p.innerHTML = formataData(data);

//Utilizando uma funçao do javaScript para fazer todo o trabalho
const data2 = new Date(); 

p.innerText = data.toLocaleDateString('pt-BR',{dateStyle:'full'})+' '+data.getHours()+':'+data.getMinutes();

//adiciona o paragrafo criado dentro da div 'resultado'
textoData.appendChild(p);

