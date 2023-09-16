// N 12
function arrayCount(list, n){
    let elementCount = 0
    list.forEach(function (element) {
        (n === element) ? elementCount += 1 : elementCount +=0;
    });
    return elementCount;
}

let list = [4, 8, 4, 6, 44, 4, 78, 6]
let n = 4;
console.log(`Buyerda ${n}, ${arrayCount(list, n)} ta bor`);
