"use strict";
// let input1 = document.getElementById("input1") as HTMLInputElement;
// let input2 = document.getElementById("input2") as HTMLInputElement;
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores("Ola", ", tudo bem?"));
console.log(somarValores("1", 5));
