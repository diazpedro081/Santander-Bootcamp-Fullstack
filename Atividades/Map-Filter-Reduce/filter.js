function filterPares(list) {
    return list.filter(function(item) {
        return item % 2 === 0;
    });
}


const minhaLista = [3, 35, 75, 67, 30, 4, 8];

console.log(filterPares(minhaLista));