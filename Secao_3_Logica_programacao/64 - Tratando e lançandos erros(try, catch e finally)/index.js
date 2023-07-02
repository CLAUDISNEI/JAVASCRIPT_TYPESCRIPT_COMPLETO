
// const soma=(x,y)=>{
//     if(typeof x !=='number' || typeof y !== 'number'){
//         //throw ('x e y precisam ser números');
//         throw new TypeError('x e y precisam ser números');
//     }
//     return x + y;
// }

// try {
//     console.log(soma(1,2));
//     console.log(soma('b',2));
// } catch (error) {
//    // console.log(error);
//     console.log('Alguma coisa mais amigável');
// }
/*
try {
    //executado quando não há erros
    console.log(a); //gera um erro de undefined
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo');
} catch (error) {
    //executado quando há erros
    console.log('Tratando o erro');
}finally{
    //sempre será executado podendo ser omitido
    console.log('Finally: Eu sempre sou executado');
}
*/

const mostrarHora=(data)=>{
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false   
    } )
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = mostrarHora(data);
    console.log(hora);
} catch (error) {
    console.log('Data inválida!');
}finally{
    console.log('Tenha um bom dia!')
}
