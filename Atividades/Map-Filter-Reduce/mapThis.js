const n1 = {
    value: 2,
};

const n2 = {
    value: 3,
};

function mapThis(list, thisArg) {
    return list.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> n1', mapThis(nums, n1));

console.log('this -> n2', mapThis(nums, n2));