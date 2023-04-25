/*
Как работает конструкция switch - case - полностью понятно.

Важный момент: необходимо добавлять в конце каждого case break.
Иначе весь код под другими case тоже будет выполнен:
*/
let u = 1;
switch (u) {
    case 0:
        console.log("It's small!");
    case 1:
        console.log("Optimal!");
    case 2:
        console.log("Large!");
    default:
        console.log("Number is out of our range!");
}