/*
Как работает if, else, elseif - очевидно.
Можно добавить, что if можно написать полностью в одну строку, но это менее читаемо.

Гораздо интереснее поработать с тернарным оператором ?
Вот как он устроен:
*/
let mark = "";
let answer = (mark == "good") ? "Excellent!" : "Try again, it's possible!";
console.log(answer);

mark = "good";
let another_answer = (mark == "good") ? "Excellent!" : "Try again, it's possible!";
console.log(another_answer);

// Можно использовать несколько ? Это аналог if-else if-else if ...
let x = 10000;
let size = (x < 10) ? "small" :
           (x < 100) ? "medium" :
           (x < 1000) ? "large" :
           "huge";
console.log(size);

// А можно использовать и так, хоть это и крайне не желательно:
let flag = true;
(flag) ? console.log("Allright!") : console.log("Smt went wrong");


/* Насчет if можно добавить только одно
Если в условии 0 - код не выполнится никогда,
если 1 - наоборот
*/
if (0) {
    console.log("Never");
}
if (1) {
    console.log("Always");
}