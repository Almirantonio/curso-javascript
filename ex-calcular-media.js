
//calculo de media usando arguments

function calculadora(){
    const media= Array.from(arguments)
    let n = 0;

    for( let i = 0 ; i< media.length; i++){
        n += media[i];
    }

    return n/media.length;

}

console.log(calculadora(2,4,4,10,5));