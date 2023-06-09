"use strict"

// № 1 - что выведется в консоли:

const a = {};

let b;

a.ooo = 1;

b = a;

b.ooo = 2;

console.log(a.ooo);
console.log(b.ooo);

// Ответ: переменные a, b ссылаются на одну и ту же область памяти, поэтому ключ ooo везде = 2


// № 2 - что такое контекст?
/*
Контекст вызывается с помощью this, используем при обращении к свойству в том объекте, в котором
эта переменная (свойство) используется
*/
const obj = {
    a: 1,
    fuu() {
        console.log(this.a);
    }
}

obj.fuu();
// PS: функция не может быть записана в JSON


// № 3 - как изменять контекст функции?
// Ответ - с помощью bind, call, apply


// № 4 - что такое hoisting?
/* 
Ответ - когда переменная, функция и тп вызываются раньше, чем они были объявлены
Т е, JS поднимает объявление всех переменных и функций, благодаря чему вызов проходит без ошибок
*/

hoi();

function hoi() {
    console.log("Hoisting is a magic!");
}

hoi();
// PS: со стрелочными функциями так не работает!


// № 5 - разница между обычной и стрелочной функциями
/*
Ответ - у стрелочной функции нет контекста, а берется он из родительского (т е, уровнем выше).
У обычной функции контекст берется изнутри самой себя.
*/

// А что выведет эта функция? - Undefined!
function check() {
    console.log(this);
}

check();


// № 6 - что такое IIFE и для чего она нужна? Напиши пример
(function() {console.log("It's IIFE!")})();
/*
А зачем нужна - чтобы вызвать сразу или чтобы создать локальную область видимости
(Это придумано тогда, когда не было let и const, но уже была потребность в
    локальной области видимости)
*/

// № 7 - можно ли так вызывать?
let fn = function fooo() {
    console.log("Yeah!");
    // fooo() вызвать можно только тут, внутри
    // fooo()
}

// fooo() - нельзя!
fn()