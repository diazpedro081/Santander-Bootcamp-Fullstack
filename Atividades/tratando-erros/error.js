function validaLista (list, num) {
    try{
        if(!list && !num) throw new ReferenceError("Evie os Parametros");
    
        if(typeof list !== "object") throw new TypeError("Array precisa ser do tipo Object");
        
        if(typeof num !== "number") throw new TypeError("Num precisa ser do tipo Numero");
    
        if(list.length !== num) throw new RangeError("Tamanho invalido");
    
        return list;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este é um erro de referencia!")
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof TypeError ) {
            console.log("Este é um TypeError!")
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof RangeError ) {
            console.log("Este é um RangeError!")
            console.log(e.name)
            console.log(e.stack)
        } else {
            console.log("Erro não identificado!", e)
        }

    }
}

console.log(validaLista([], 5));