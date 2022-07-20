"use strict";
var button = document.getElementById("button");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
function adicionarNumero(n1, n2, devePrintar, frase) {
    var resultado = n1 + n2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return n1 + n2;
}
var devePrintar = true;
var frase = "O valor é: ";
if (button) {
    button.addEventListener("click", function () {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
;
//# sourceMappingURL=exemplo.js.map