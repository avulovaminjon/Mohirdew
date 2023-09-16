// N 11
function invertedArray(list){
    let newArray = list.reverse();
    // newArray.forEach(function (element) {
    //     console.log(element);
    // });
    return newArray;
}

let list = [4, "apple", "number", 487, true, false ]
console.log(invertedArray(list));
