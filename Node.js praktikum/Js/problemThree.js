// N3

function occupationYear(year){
    return ( year % 400 === 0  || ( year % 100 !== 0 && year % 4 === 0) ) ? "true" : "flase";
}

console.log(occupationYear(2022))