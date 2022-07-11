// Object Destructuring

const alunos = [
    {
        nome: 'Pedro',
        nota: 7,
        turma: 'M1',
    },
    {
        nome: 'Marina',
        nota: 9,
        turma: 'M1'
    },
    {
        nome: 'Paulo',
        nota: 7,
        turma: 'N1',
    },
    {
        nome: 'Miguel',
        nota: 4,
        turma: 'N1',
    },
];

function verificaAprovados(list, media) {
    let aprovados = [ ];

    for(let n = 0; n < list.length; n++) {

        const {nota, nome} = list[n];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(verificaAprovados(alunos, 5));