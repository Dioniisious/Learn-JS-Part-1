/*
В JS имеется 8 типов данных:
    number - все числа
    BigInt - число по модулю более (2 ** 53 - 1)
    string - строки длиной от 0 до бесконечности
    boolean - логический тип
    null - означает "пусто", назначается человеком
    undefined - означает "значение не было присвоено" 
(значение по умолчанию для переменных, которым не задано значение)
    Symbol - создает уникальные идентификаторы объектов
    Object - объект
*/

// Оператор typeof может вызываться 2 способами и указывает тип переменной:
let str = ""
let int = 1
let big = 1n
let bl = true
let none = null
let udf
let smb = Symbol(0)

console.log(typeof str)
console.log(typeof int)
console.log(typeof big)
console.log(typeof bl)
console.log(typeof none) // null - не объект, просто косяк JS
console.log(typeof udf)
console.log(typeof smb)
console.log(typeof parseInt) // function - входит в тип объектов
console.log(typeof Math)