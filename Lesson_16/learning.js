/*
Существует 2 синтаксиса создания функций:
    1 - Function Declaration,
    2 - Function Expression

После вызова вторым методом после } ставим ; обязательно!

Посмотрим на оба этих способа:
*/

// Function Declaration:
function declared() {
    console.log("Hi from declared!");
}

// Function Expression:
let exspressed = function() {
    console.log("Hi from expressed!");
};

declared();
exspressed();

// А еще функция - это значение, и его можно увидеть:
console.log(declared);
console.log(exspressed);


// А еще функцию можно скопировать в другую переменную:
let first = function() {
    console.log("Hi!");
};

let second = first;

first();
second();


// А можно обе функции скопировать через expression:
function mele() {
    console.log("Mmmm... Uaaaau");
}

let pele = mele;

mele();
pele();


/*
Бывает такое, когда в функцию в виде аргументов подаются другие функции.
Такие функции называются коллбэками (callback).
Суть в том, что функция передается как аргумент с целью быть вызванной, когда будет нужно.
*/
function main(pass, doIt, doThat) {
    if (pass) doIt()
    else doThat();
}

function thisAct() {
    console.log("This is the first action");
}

function anotherAct() {
    console.log("This is the second action");
}

main(false, thisAct, anotherAct);
main(true, thisAct, anotherAct);
// Здесь коллбэками являются thisAct и anotherAct


// Можно эту функцию вызвать через безымянные функции:
main(
    true,
    function() {console.log("This is the first action");},
    function() {console.log("This is the second action");}
);

/*
Основное отличие function Declaration от function Expression -
- в том, что при Declaration функцию можно вызвать до ее объявления.
Перед исполнением кода JS проходится по нему и обнаруживает все важное.
В случае function Expression функция не существует, а появляется тогда, когда
процесс исполнения доходит до строчки с это функцией.
*/

before();

function before() {
    console.log("Меня можно вызвать ДО объявления");
}

// after(); - Нельзя!

let after = function() {
    console.log("К счастью или сожалению, меня нельзя вызвать ДО объявления");
}

after();

/*
Отличительная особенность function Declaration - блочная область видимости.
Если объявить функцию Declaration'ом внутри некоторого блока, то снаружи
эту функцию вызвать будет невозможно.
*/
if (true) {
    function inside() {
        console.log("This won't be called in global");
    }
    // inside();
}

// inside(); - Нельзя!

/*
Зато в данной ситуации очень удобными окажутся function Expression!
Объявляем переменную снаружи, а уже в некоем вложенном блоке можем задать функцию.
Теперь функция легко вызывается в глобальном окружении:
*/
let exressionGood;

if (true) {
    exressionGood = function() {
        console.log("Horaay! It really works!");
    }
}
exressionGood();