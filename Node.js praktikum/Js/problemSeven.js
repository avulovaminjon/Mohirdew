// N 7

// easy solution

function perfectNumber(num){
    let summa = 0;
    for(let i = 1; i < num; i++){
        (num % i == 0) ? summa += i : "";
    }
    return (summa === num ) ?  "true" : "false";
}

let a = 6;
console.log(perfectNumber(a))

/*
    Bu yechim juda yomon yechim xisoblanadi.
Bu yechimni yozishimdan sabab masala shartida chegar berilmagan.
Yechimda tartib raqami 5, 6.. chi perfect numberlarni hisoblashda juda katta vaqt sarflaydi masalan:
6, 28, 496, 8128, 33550336, 8589869056, 137438691328, 2305843008139952128 ....
Bu hollada chegara qo`yib misol uchun tartib raqami 10^3(10^5) gacha bo`lgan perfect numberlarni hisoblashda 
a(n) = 2^(p-1) * (2*p -1) formula asosida 10^3(10^5) ta  prime numberslar jadvalini hosil qilib ishlab chiqsa bo`ladi.
yuqoridagi yechim bilan tartib raqami 10^3(10^5) bo`lgan perfect numberslarni tekshirishni tasfvur qilish qiyin 
*/