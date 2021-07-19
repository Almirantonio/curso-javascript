
function somar(){
    const teste = Array.from(arguments);
    return teste.reduce((acumulador , valorAtual) => acumulador +=valorAtual);
}

console.log(somar(10,20,30));
console.log(somar(10,20,30,40,40,100,1234));


