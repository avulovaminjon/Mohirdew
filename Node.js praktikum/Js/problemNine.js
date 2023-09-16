// N9 

function cheakPalindrom(num){
    let lengthNumber = `${num}`.length;
    let copyNumber = num;
    let inverseNumber = 0;
    for(let i = 0; i < lengthNumber; i++){
        inverseNumber = inverseNumber * 10 + (copyNumber % 10)
        copyNumber =Math.floor(copyNumber/10)
    }
    return (inverseNumber === num) ? "true" : "false";
}
a = 959;
console.log(cheakPalindrom(a))