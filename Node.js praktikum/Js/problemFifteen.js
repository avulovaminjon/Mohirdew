// N15

function minMax(list){
    let min = Math.min( ...list ),
        max = Math.max( ...list );
    return min,max;
}

let list = [1, 2, 3, 4, 5, 6, 7]
console.log(minMax(list))