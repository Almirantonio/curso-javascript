(function(){
    function calcularMedia(){
        let total = 0;
        let qtd = arguments.length;
        for(let i = 0 ; i< qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw console.error("somente números");
            }
            total  += arguments[i];
        }

        return (total / qtd)  || 0  // curto circuito
    }
    let media = calcularMedia(10,10,10,10);
    console.log(media);
})()