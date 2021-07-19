
function somar(){
    const teste= Array.from(arguments)
    let n = 0;

    for( let i = 0 ; i< teste.length; i++){
        n += teste[i];
    }

    return n;

}

console.log(somar(10,20,50,60));


