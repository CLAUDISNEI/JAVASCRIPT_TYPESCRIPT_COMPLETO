/**Escreva uma função que receba um número e
 * retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e por 5 = FizzBuzz
 * Número não é divisível por 3 e 5 = Retorna o próprio número
 * Checar se o número é realmente um número = Retorna o próprio número
 * Use a Função com números de 0 a 100 
 */

//Minha solução
const buzzFizz=(num)=>{
    if(!Number(num)){
        return num;
    }
    if(num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz';
    }else if(num % 3 === 0){
        return 'Fizz';
    }else if(num % 5 === 0){
        return 'Buzz';
    }else if(num % 3 !== 0 && num % 5 !== 0){
        return num;
    }

}

for (let i=0 ; i <= 100 ; i++){
    console.log(buzzFizz(i));
}




