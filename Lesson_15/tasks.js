/*
№ 1
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
Есть ли хоть одно отличие в поведении этого варианта?
*/
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
}

// Отличие есть: функция просто будет выводить true/false, когда age <= 18, в зависимости от того, куда нажал на окне


/*
№ 2
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
    Используя оператор ?
    Используя оператор ||
*/
// Через ?
function checkAge(age) {
    let result = (age > 18) ? true : confirm('Родители разрешили?');
    return result;
}

// Через ||
function checkAge(age) {
    let result = (age > 18) || confirm('Родители разрешили?');
    return result;
}


/*
№ 3
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/
function min(z, y) {
    let answer = (z > y) ? y : z;
    return answer;
}
console.log( min(2, 5) == 2 );
console.log( min(3, -1) == -1 );
console.log( min(1, 1) == 1 );


/*
№ 4
Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
*/
function pow(x, n) {
    return x ** n;
}
console.log( pow(3, 2) == 9 );
console.log( pow(3, 3) == 27 );
console.log( pow(1, 100) == 1 );