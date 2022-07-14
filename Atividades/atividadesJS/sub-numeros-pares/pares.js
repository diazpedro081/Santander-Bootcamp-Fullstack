function subPares(list) {
    if(!list.length) return -1;

    for( let n = 0; n < list.length; n++) {
        if (list[n] === 0) {
            console.log("O valor ja é zero");
        } else if (list[n] % 2 === 0) {
            console.log(`Substituindo ${list[n]} por 0...`);
            list[n] = 0;
        }
    }

    return list;
}

let listArr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(subPares(listArr));
