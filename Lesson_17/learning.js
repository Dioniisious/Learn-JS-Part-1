// Со стрелочными функциями знаком

// Но надо посмотреть, как выглядят однострочные:
let check = (f) => console.log("Excellent!");

check();
check();

// Также вот так работает вывод в однострочных функциях:

let answer = "Output it!";

let outer = () => answer;

console.log(outer());