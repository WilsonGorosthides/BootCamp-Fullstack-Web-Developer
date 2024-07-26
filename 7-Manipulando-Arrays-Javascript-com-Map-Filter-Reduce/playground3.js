// Filter
function filtraPares(arr){
    return arr.filter(callback)
}
function callback(item){
    return item % 2 ===0;
}

const Array = [1, 23, 45, 44, 56, 70, 33];

console.log(filtraPares(Array));