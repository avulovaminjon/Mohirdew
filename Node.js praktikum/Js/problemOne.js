//  N1
function cheakNumber(a,b,c){
    let threeDigitNumber = +`${a}${b}${c}`
    return (threeDigitNumber <= 0)  ? '0':"The number is greater than 0";
}
let a = 3
    b = 2
    c = 3;
console.log(cheakNumber(a,b,c))