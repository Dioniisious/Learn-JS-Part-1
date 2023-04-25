/*
№ 1
Какое последнее значение выведет этот код? Почему?

let i = 3;
while (i) {
  alert( i-- );
}
*/
let i = 3;

while (i) {
    console.log(i--);
}
// Выведет 1
// Постфикс выводит преведущее число, т е, i = 0, а выведет он 1



/*
№ 2
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет?
1 - Префиксный вариант ++i:
    let i = 0;
    while (++i < 5) alert( i );
2 - Постфиксный вариант i++:
    let i = 0;
    while (i++ < 5) alert( i );
*/
let j = 0;
while (++j < 5) console.log(j); // от 0 до 4, т к префикс
let u = 0;
while (u++ < 5) console.log(u); // от 0 до 5, т к постфикс


/*
№ 3
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выведут alert с одинаковыми значениями или нет?
1 - Постфиксный вариант i++:
    for (let i = 0; i < 5; i++) alert( i );
2 - Префиксный вариант ++i:
    for (let i = 0; i < 5; ++i) alert( i );
*/
for (let i = 0; i < 5; i++) console.log(i); // От 0 до 5, т к постфикс
for (let i = 0; i < 5; ++i) console.log(i); // От 0 до 4, т к префикс


/*
№ 4
При помощи цикла for выведите чётные числа от 2 до 10.
*/
for (let z = 0; z <= 10; z++) {
    console.log(z);
}


/*
№ 5
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
*/
for (let i = 0; i < 3; i++) {
    console.log(`number ${i}!`);
}
// То же самое на while:
let q = 0;
while (q < 3) {
    console.log(`number ${q}!`);
    q++;
}


/*
№ 6
Напишите цикл, который предлагает prompt ввести число, большее 100. 
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, 
    большее 100, либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. 
Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/
/*
let input = "";
while (input != null && Number(input) <= 100) {
    input = prompt("Введите число больше 100");
}
*/


/*
№ 7
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
*/
/*
let input = Number(prompt("Введите любое число"));
let answer = ``;
let check;
for (let j = 2; j <= input; j++) {
    check = true;
    for (let i = 2; i < j; i++) {
        if (j % i == 0) {
            check = false;
            break;
        }
    }
    if (check) {
        answer += `${j} `;
        console.log(answer);
    }
}
alert(answer);
*/