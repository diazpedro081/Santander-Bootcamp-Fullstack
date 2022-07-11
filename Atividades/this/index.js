// call e aplly

function calcIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const p1 = {
    nome: "Pedro",
    idade: 25,
};

const p2 = {
    nome: "Larissa",
    idade: 22,
};

console.log(calcIdade.call(p1, 30));
console.log(calcIdade.apply(p2, [30]));