enum Trabalho {
    Desenvolvedor,
    Cozinheiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Eduarda',
    idade: 19,
    profissao: Trabalho.Desenvolvedor
};

let pessoa2: Humano = {
    nome: 'Ricardo',
    idade: 29,
    profissao: Trabalho.Cozinheiro
};

let pessoa3: Humano = {
    nome: 'Pedro',
    idade: 25,
    profissao: Trabalho.Desenvolvedor
};

let pessoa4: Humano = {
    nome: "João Guilherme",
    idade: 24,
    profissao: Trabalho.Cozinheiro
}

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);