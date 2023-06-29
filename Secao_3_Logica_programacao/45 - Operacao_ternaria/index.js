
//exemplo de utilizacao ternaria
const pontuacaoUsuario = 500;

//utilizando o if
// if(pontuacaoUsuario >= 1000){
//     console.log('Usuário VIP');
// }else{
//     console.log('Usuário normal');
// }

//utilizando o operador ternario
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário NORMAL';

//setando valor padrao em uma variável
const corUsuario = 'blue';
const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuario, corPadrao);

