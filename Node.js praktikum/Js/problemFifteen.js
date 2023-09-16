// N15

function minMax(arr){
    arr.sort((a,b)=>a-b);
    arr.reverse();       
    return arr[1];
}

let list = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(minMax(list))