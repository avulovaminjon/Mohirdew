// N2
function cheakDays(num){
    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sandey"];
    return (num < 8 && num > 0) ? daysOfTheWeek[num - 1] : "none"
}

console.log(cheakDays(4))