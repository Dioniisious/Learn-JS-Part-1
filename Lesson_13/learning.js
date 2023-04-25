/*
Циклы в JS бывают 3 основных видов:
    while;
    do...while;
    for.
Как они работают - понятно.

Также понятно что:
    break - прервать работу цикла,
    continue - пропустить конкретную итерацию.

Интересно вот что:
*/
let j = 2;
while (j) {
    console.log(j--);
}
// Т е, это условие, что j > 0

/*
А еще циклы можно называть метками
Это позволяет при вложенности, находясь во внутреннем цикле, выти из основного цикла
И break, и continue поддерживают метки.

Проверим для break:
*/
console.log("Cycle");
main: for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 5; k++) {
        console.log(k);
        if (k == 4) {
            break main;
        }
    }
}
console.log("Breaked!");

// И для continue:
main: for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 5; k++) {
        console.log(i, k);
        if (k == 3) {
            continue main;
        }
    }
}