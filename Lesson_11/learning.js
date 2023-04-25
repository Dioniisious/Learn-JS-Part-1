/*
В JS всего 4 логических оператора:
    || - логическое ИЛИ
    && - логическое И
    ! - логическое НЕ
    ?? - нулевое слияние

Как работают первые 3 - очевидно.
Все они ведут проверку слева направо. Но есть интересные кейсы.

|| возвращает первое истинное значение или последнее (если не нашлось истинных)
&& возвращает первое ложное значение или последнее (если не нашлось ложных)
*/

// ИЛИ
console.log(1 || true);
console.log(0 || false || "");
console.log(1 || true || (x = 1));
console.log(0 || false || (y = 1));

// console.log(x); - она не определена
console.log(y);


// И
console.log(0 && true);
console.log(1 && true && "coffee");
console.log(1 && true && (z = 1));
console.log(0 && false && (w = 1));

console.log(z);
// console.log(w); - она не определена

// НЕ
console.log(!true);
console.log(!false);

// А двойной знак !! - перевод в тип boolean:
console.log(!!0);
console.log(!!1);
console.log(!!"");
console.log(!!"Coffee");