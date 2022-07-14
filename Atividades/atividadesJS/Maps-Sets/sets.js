const list = [30, 30, 40, 5, 223, 2049, 3034, 5];

function varUnicos(arr){
  const mySet = new Set(arr);
  
  return [...mySet]; //Rest
}

console.log(varUnicos(list))