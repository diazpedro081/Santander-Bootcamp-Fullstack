// ANY

let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste"
anyEstaDeVolta = 5;

let stringTest: string = "verificar"
stringTest = anyEstaDeVolta;

// UNKNOWN 

let unknownValor: unknown;
unknownValor = 3;
unknownValor = "Opa";
unknownValor = true;
unknownValor = "vai sim";

let stringTest2: string = "agoraVai";
// stringTest2 = unknownValor;

if( typeof unknownValor === "string") {
    stringTest2 = unknownValor;
}

console.log(stringTest);
console.log(stringTest2);

// NEVER

function jogarErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo};
}

jogarErro("deu erro", 500);