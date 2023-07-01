// Task 1
// При натисканні кнопки .btn-1 спрацьовує функція fn1. Функція повинна прочитати вміст .field-1 та порівняти його з числом 4 (порівняння ==). Результат порівняння – true або false виведіть у .output-1.

function f1() {
    const a = document.querySelector(".i-1");
    document.querySelector(".out-1").innerHTML = Boolean(a.value == 4);
}

document.querySelector(".btn-1").onclick = fn1;

// Task 2
// Дано дві змінні a2_1 і a2_2. При натисканні кнопки .btn-2 запускається функція fn2. Функція повинна порівняти змінні за допомогою if else і вивести в .output-2 більше число. Варіант рівності змінних не розглядається.

let a21 = 1;
let a22 = 5;
let result;

function f2() {
    if (a21 < a22) {
        result = a22;
    } else {
        result = a21;
    }

    document.querySelector('.out-2').innerHTML = Number(result);
}

document.querySelector(".btn-2").onclick = fn2;

// Task 3
// Дано два input - .field-31 і .field-32, обидва - input[type=number]. При натисканні кнопки .btn-3 спрацьовує функція fn3. Функція має порівняти числа з input, вивести в .output-3 більше число.
// Проведіть самостійний тест роботи, введіть пари чисел 4 та 9, 9 та 22, 5 та 111.

function f3() {
    let a = document.querySelector(".i-31");
    a = Number(a.value);
    let b = document.querySelector(".i-32");
    b = Number(b.value);
    let c;
    
    if (a > b) {
        c = a;
    } else {
        c = b;
    }
 
  document.querySelector(".out-3").innerHTML = c;
}

document.querySelector(".btn-3").onclick = fn3;

// Task 4.
// Користувач вводить у .field-4 рік свого народження. Є кнопка .btn-4, яка запускає функцію fn4.Функція повинна вивести в .output-4 число 1 якщо користувачеві більше або 18 років, і 0 якщо менше.

function f4() {
    let age = document.querySelector(".i-4");
    age = Number(age.value);
    if (age >= 18) {
        document.querySelector(".out-4").innerHTML = 1;
    } else {
        document.querySelector(".out-4").innerHTML = 0;
    }
}

document.querySelector(".btn-4").onclick = fn4;

// Task 5.
// На сторінці є input з класом .field-5, куди можна ввести число. Є кнопка .btn-5, яка запускає функцію fn5. Функція повинна вивести в .output-5 символ 'm' якщо число менше нуля, 0 якщо число дорівнює нулю і 1 якщо число більше нуля.

function f5() {
    let number = document.querySelector(".i-5");
    number = Number(number.value);
    if (number < 0) {
        document.querySelector(".out-5").innerHTML = "m";
    } else if (number === 0) {
        document.querySelector(".out-5").innerHTML = 0;
    } else {
        document.querySelector(".out-5").innerHTML = 1;
    }
}

document.querySelector(".btn-5").onclick = fn5;

// Task 6.
// На сторінці є input.field-6, куди користувач може ввести число. Є кнопка .btn-6, яка запускає функцію fn6. Функція повинна вивести в .output-6 слово 'even' якщо число парне і 'odd' якщо непарне. Для перевірки парності використовується залишок від ділення на 2 (оператор %). Якщо залишок дорівнює нулю – парне, ні – непарне.

function f6() {
        let number = document.querySelector(".i-6");
    number = Number(number.value);
    if (number % 2 === 0) {
        document.querySelector(".out-6").innerHTML = "even";
    } else {
        document.querySelector(".out-6").innerHTML = "odd";
    }
}

document.querySelector(".btn-6").onclick = fn6;

// Task 7.
// Дано два input - .field-7-1 і .field-7-2, обидва - input[type=number]. При натисканні кнопки .btn-7 спрацьовує функція fn7. Функція повинна число з .field-7-1 піднести до ступеня .field-7-2, вивести результат у .output-7. Для піднесення до ступеня можна використовувати ** або Math.pow.

function f7() {
    let a = document.querySelector(".i-71");
    a = Number(a.value);
    let b = document.querySelector(".i-72");
    b = Number(b.value);
    document.querySelector(".out-7").innerHTML = a ** b;
}

document.querySelector(".btn-7").onclick = fn7;

// Task 8.
// Дано select.select-8, який містить 3 значення: 1, 2, 3. Дана кнопка btn-8. При натисканні спрацьовує функція fn8. Функція повинна отримати обране в select число, потім за допомогою switch case порівняти його по черзі з 1, 2, 3. І якщо вибране число - 1, то вивести в .output-8 рядок 'one', якщо 2 - 'two', якщо 3 - 'three'.

function f8() {
    let a = document.querySelector(".s-8");
    a = Number(a.value);
    switch (a) {
        case 1:
            document.querySelector(".out-8").innerHTML = "one";
            break;
        case 2:
            document.querySelector(".out-8").innerHTML = "two";
            break;
        case 3:
            document.querySelector(".out-8").innerHTML = "three";
            break;
    }
}

document.querySelector(".btn-8").onclick = fn8;

// Task 9
//  Є input.field-9, куди користувач може ввести номер квартири. Є кнопка .btn-9, яка запускає функцію fn9. Функція має вивести в .output-9 номер під'їзду, де знаходиться квартира.
//  якщо від 1 (включно) до 32 (включно) - вивести цифру 1
//  якщо від 33 (включно) до 43 (включно) - вивести 2
//  якщо від 44 (включно) до 64 (включно) – то 3
//  інакше вивести 0

function f9() {
    let n = document.querySelector(".i-9");
    n = Number(n.value);
    if (n >= 1 && n <= 32) {
        document.querySelector(".out-9").innerHTML = 1;
    } else if (n >= 33 && n <= 43) {
        document.querySelector(".out-9").innerHTML = 2;
    } else if (n >= 44 && n <= 64) {
        document.querySelector(".out-9").innerHTML = 3;
    } else {
        document.querySelector(".out-9").innerHTML = 0;
    }
}

document.querySelector(".btn-9").onclick = fn9;

// Task 10
// Дано select.select-10. Після натискання кнопки, виведіть value вибраного option в .output-10.

function f10() {
    let v = document.querySelector(".s-100");
    
    document.querySelector(".out-10").innerHTML = v.value;
}

document.querySelector(".btn-10").onclick = f10;

// Task 11
// Дано select.select-11. Після зміни стану select (подія onchange) виведіть value вибраного option в .output-11.

function f11() {
    let select = document.querySelector(".s-110");
    document.querySelector(".out-11").innerHTML = select.value;
}

document.querySelector(".select-110").onchange = f11;

// Task 12
//  Дано input.field-12. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в .output-12 typeof отриманої змінної. typeof дозволяє визначити тип даних.

////Під питанням !!!!!!!!!

function f12() {
    let input = document.querySelector(".i-120");
    let b = input.value;
    document.querySelector(".out-12").innerHTML = typeof b;
}
document.querySelector(".b-12").onclick = f12;

    
/// Теж не дуже зрозуміло !!!!!!
// Task 13
//  Дано input.field-13. На відміну від попереднього завдання – input type number. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в out-13 typeof отриманої змінної. Typeof дозволяє визначити тип даних. Якщо ви правильно все зробили - тип даних буде string! Подумайте, чому так?

function f13() {
    let input = document.querySelector(".i-130");
    let a = input.value;
    document.querySelector(".out-13").innerHTML = typeof a;
}

document.querySelector(".btn-13").onclick = f13;

// Task 14
// Дано input .field-14-1 та .field-14-2, [type=number]. Дано select .select-143, який містить чотири операції - +, -, *, /. Дано кнопку .btn-14, при натисканні на яку спрацьовує функція fn14. Функція виводить в .output-14 результат операції обраної в 3-му select до числа введених у першому і другому input. Наприклад, вибрано 1 13 +, потрібно вивести результат операції 1+13 тобто.

function f14() {
    let s = document.querySelector(".s-143");
    s = s.value;
    let a = document.querySelector(".i-141");
    a = Number(a.value);
    let b = document.querySelector(".i-142");
    b = Number(b.value);
    switch (s) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
    }
    document.querySelector(".out-14").innerHTML = result;
}

document.querySelector(".btn-14").onclick = f14;

// Task     15
// Дано select .select-15-1 та .select-15-2, кожен з яких містить 1 та 0. Дано select .select-15-3, який містить дві операції - && та || . Дана кнопка .btn-15, при натисканні на яку спрацьовує функція fn15. Функція виводить в .output-15 результат логічних операцій вибраних у третьому select до числа вибраних у першому і другому select. Наприклад, вибрано '1 1 &&', потрібно вивести результат операції '1 && 1', тобто 1 чи 0.

function f15() {
    let a = document.querySelector(".s-151");
    a = Number(a.value);
    let b = document.querySelector(".s-152");
    b = Number(b.value);
    let c = document.querySelector(".s-153");
    c = c.value;
    let result;
    if (c = "&&") {
        result = a && b;
    } else if (с = "||") {
        result = a || b;
    }
    document.querySelector(".out-15").innerHTML = result;
}

document.querySelector(".btn-15").onclick = f15;
