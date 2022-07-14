const list = [ 
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calcSaldo(saldoDisponivel, list) {
    return list.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calcSaldo(saldoDisponivel, list));