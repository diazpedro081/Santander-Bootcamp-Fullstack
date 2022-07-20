"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Desenvolvedor"] = 0] = "Desenvolvedor";
    Trabalho[Trabalho["Cozinheiro"] = 1] = "Cozinheiro";
})(Trabalho || (Trabalho = {}));
var pessoa1 = {
    nome: 'Eduarda',
    idade: 19,
    profissao: Trabalho.Desenvolvedor
};
var pessoa2 = {
    nome: 'Ricardo',
    idade: 29,
    profissao: Trabalho.Cozinheiro
};
var pessoa3 = {
    nome: 'Pedro',
    idade: 25,
    profissao: Trabalho.Desenvolvedor
};
var pessoa4 = {
    nome: "João Guilherm",
    idade: 24,
    profissao: Trabalho.Cozinheiro
};

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
