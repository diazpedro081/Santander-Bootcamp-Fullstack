"use strict";
function printaValoresNumerociros(n1, n2) {
    console.log(n1 + n2);
}
function somarValoresNumericosETratar(n1, n2, callback) {
    var resultado = n1 + n2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
//# sourceMappingURL=function.js.map