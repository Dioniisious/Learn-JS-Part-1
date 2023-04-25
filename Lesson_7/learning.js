/*
Существует 3 вида преобразования:
    строковое,
    численное,
    логическое

Строковое очевидно - все содержимое всегда переводится в строку.
По умолчанию работает, например, в alert. И с помощью String().

Численное по умолчанию работает в математических операциях.
Или с помощью Number().
Как переводится:
    undefined -> NaN
    null, false, "" -> 0
    в строках убираются пробелы, и если есть что-то помимо чисел -> NaN

Логическое преобразование - происходит в логических операциях или
с помощью Boolean().
Как переводится:
    0, null, undefined, NaN, "" -> false
    все остальное - true
*/

let n = 374;
console.log(String(n));

let x;
let y = null;
let z = false;
let w = "";
let a = "342";
let b = "4882f"
console.log(Number(x));
console.log(Number(y));
console.log(Number(z));
console.log(Number(w));
console.log(Number(a));
console.log(Number(b));
console.log("4" * "2");

console.log(Boolean(x));
console.log(Boolean(y));
console.log(Boolean(z));
console.log(Boolean(w));
console.log(Boolean(a));
console.log(Boolean(b));
console.log(1 > 0);