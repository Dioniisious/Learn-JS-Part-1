/*
№ 1
Чему будут равны переменные a, b, c и d в примере ниже?
*/

let a = 1, b = 1;

let c = ++a;
console.log(c); // 2
let d = b++;
console.log(d); // 1


/*
№ 2
Чему будут равны переменные a и x после исполнения кода в примере ниже?
*/
let z = 2;

let x = 1 + (z *= 2);
console.log(x); // 5


/*
№ 3
Какой результат будет у выражений ниже?
*/
console.log("" + 1 + 0, "" - 1 + 0, true + false, 6 / "3", "2" * "3");
console.log(4 + 5 + "px", "$" + 4 + 5, "4" - 2, "4px" - 2, "  -9  " + 5);
console.log("  -9  " - 5, null + 1, undefined + 1, " \t \n" - 2);


/*
№ 4
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.
*/

let w = prompt("Первое число?", 1);
let v = prompt("Второе число?", 2);

alert(Number(w) + Number(v)); // 3