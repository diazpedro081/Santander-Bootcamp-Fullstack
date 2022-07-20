"use strict";
// ANY
var anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = 5;
var stringTest = "verificar";
stringTest = anyEstaDeVolta;
// UNKNOWN 
var unknownValor;
unknownValor = 3;
unknownValor = "Opa";
unknownValor = true;
unknownValor = "vai sim";
var stringTest2 = "agoraVai";
// stringTest2 = unknownValor;
if (typeof unknownValor === "string") {
    stringTest2 = unknownValor;
}
console.log(stringTest);
console.log(stringTest2);
// NEVER
function jogarErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogarErro("deu erro", 500);
