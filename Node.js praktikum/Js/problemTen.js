// N 10

function sumOfNumbers(num){
    let lengthNumber = `${num}`.length;
    let sum = 0;
    for(let i = 0; i < lengthNumber; i++){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}

let a = 1529;
console.log(sumOfNumbers(a))