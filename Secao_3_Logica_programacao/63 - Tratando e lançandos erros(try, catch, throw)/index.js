
const soma=(x,y)=>{
    if(typeof x !=='number' || typeof y !== 'number'){
        //throw ('x e y precisam ser números');
        throw new TypeError('x e y precisam ser números');
    }
    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('b',2));
} catch (error) {
   // console.log(error);
    console.log('Alguma coisa mais amigável');
}
