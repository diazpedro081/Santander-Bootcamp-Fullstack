function map(list) {
    return list.map(function (item) {
        return item * 2;
    });
}

const n = [4, 8, 12, 20];

console.log('Original: ', n);
console.log("com map: ",map(n));