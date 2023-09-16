// N14

function numbersSort(numbers){
    let sorted = numbers.sort((a, b) => a - b);
    return sorted;
}
let numbers = [3, 1, 4, 1, 5, 10];
console.log(numbersSort(numbers))