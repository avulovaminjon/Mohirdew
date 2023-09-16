// N13

function searchArray(list, a){
    let sorted = list.sort((a, b) => a - b);
    let lengthArray = sorted.length;
    let couples = [];
    for(let i = 0; i< lengthArray; i++){
        for(let j = i+1; j < lengthArray; j++){
            (i + j === a) ? couples.push([i,j]) : "";
        }
    }
    return couples;
}

const a = 5
const array = [1,2,3,4,5,0]
console.log(searchArray(array,a))