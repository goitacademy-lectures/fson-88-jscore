// Task 1
// При натисканні кнопки .b-1 спрацьовує функцію f1. Функція повинна прочитати вміст .i-1 та порівняти його з числом 4 (порівняння ==). Результат порівняння – true або false виведіть у .out-1.

function f1() {
    const a = document.querySelector(".i-1");
    document.querySelector(".out-1").innerHTML = Boolean(a.value == 4);
}

document.querySelector(".b-1").onclick = f1;

// Task 2
// Дано дві змінні a21 і a22. При натисканні кнопки .b-2 запускається функція f2. Функція повинна порівняти змінні за допомогою if else і вивести в .out-2 більше число. Варіант рівності змінних не розглядається.

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

document.querySelector(".b-2").onclick = f2;

// Task 3
// Дано два input - .i-31 і .i-32, обидва - input[type=number]. При натисканні кнопки .b-3 спрацьовує функція f3. Функція має порівняти числа з input, вивести в .out-3 більше число.
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

document.querySelector(".b-3").onclick = f3;

// Task 4.
// Користувач вводить у .i-4 рік свого народження. Є кнопка .b-4, яка запускає функцію f4.Функція повинна вивести в .out-4 число 1 якщо користувачеві більше або 18 років, і 0 якщо менше.

function f4() {
    let age = document.querySelector(".i-4");
    age = Number(age.value);
    if (age >= 18) {
        document.querySelector(".out-4").innerHTML = 1;
    } else {
        document.querySelector(".out-4").innerHTML = 0;
    }
}

document.querySelector(".b-4").onclick = f4;

// Task 5.
// На сторінці є input з класом .i-5, куди можна ввести число. Є кнопка b-5, яка запускає функцію f5. Функція повинна вивести в .out-5 символ 'm' якщо число менше нуля, 0 якщо число дорівнює нулю і 1 якщо число більше нуля.

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

document.querySelector(".b-5").onclick = f5;

// Task 6.
// На сторінці є input із класом .i-6, куди користувач може ввести число. Є кнопка .b-6, яка запускає функцію f6. Функція повинна вивести в .out-6 слово even якщо число парне і odd якщо непарне. Для перевірки парності використовується залишок від ділення на 2 (оператор %). Якщо залишок дорівнює нулю – парне, ні – непарне.

function f6() {
        let number = document.querySelector(".i-6");
    number = Number(number.value);
    if (number % 2 === 0) {
        document.querySelector(".out-6").innerHTML = "even";
    } else {
        document.querySelector(".out-6").innerHTML = "odd";
    }
}

document.querySelector(".b-6").onclick = f6;

// Task 7.
// Дано два input - .i-71 і .i-72, обидва - input[type=number]. При натисканні кнопки .b-7 спрацьовує функція f7. Функція повинна число з .i-71 піднести до ступеня .i-72, вивести результат у .out-7. Для піднесення до ступеня можна використовувати ** або Math.pow.

function f7() {
    let a = document.querySelector(".i-71");
    a = Number(a.value);
    let b = document.querySelector(".i-72");
    b = Number(b.value);
    document.querySelector(".out-7").innerHTML = a ** b;
}

document.querySelector(".b-7").onclick = f7;

// Task 8.
// Дано select s-8, який містить 3 значення: 1, 2, 3. Дана кнопка b-8. При натисканні спрацьовує функція f8. Функція повинна отримати обране в select число, потім за допомогою switch case порівняти його по черзі з 1, 2, 3. І якщо вибране число - 1, то вивести в .out-8 рядок one, якщо 2 - two, якщо 3 - three.

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

document.querySelector(".b-8").onclick = f8;

// Task 9
//  Є input з класом .i-9, куди користувач може ввести номер квартири. Є кнопка .b-9, яка запускає функцію f9. Функція має вивести в .out-9 номер під'їзду, де знаходиться квартира.
//  якщо від 1 включно до 32 включно - вивести цифру 1
//  якщо від 33 (включно) до 43 (включно) - вивести 2
//  якщо від 44 (включно) до 64 (включно) – то 3
//  інакше вивести 0.

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

document.querySelector(".b-9").onclick = f9;

// Task 10
// Дано select .s-100. Після натискання кнопки, виведіть value вибраного option в .out-10.

function f10() {
    let v = document.querySelector(".s-100");
    
    document.querySelector(".out-10").innerHTML = v.value;
}

document.querySelector(".b-10").onclick = f10;

// Task 11
// Дано select .s-110. Після зміни стану select (подія onchange) виведіть value вибраного option в .out-11.

function f11() {
    let select = document.querySelector(".s-110");
    document.querySelector(".out-11").innerHTML = select.value;
}

document.querySelector(".s-110").onchange = f11;

// Task 12
//  Дано input .i-120. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в .out-12 typeof отриманої змінної. Typeof дозволяє визначити тип даних.

////Під питанням !!!!!!!!!

function f12() {
    let input = document.querySelector(".i-120");
    let b = input.value;
    document.querySelector(".out-12").innerHTML = typeof b;
}
document.querySelector(".b-12").onclick = f12;

    
/// Теж не дуже зрозуміло !!!!!!
// Task 13
//  Дано input i-130. На відміну від попереднього завдання – input type number. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в out-13 typeof отриманої змінної. Typeof дозволяє визначити тип даних. Якщо ви правильно все зробили - тип даних буде string! Подумайте, чому так?

function f13() {
    let input = document.querySelector(".i-130");
    let a = input.value;
    document.querySelector(".out-13").innerHTML = typeof a;
}

document.querySelector(".b-13").onclick = f13;

// Task 14
// Дано input .i-141 та .i-142, [type=number]. Дано select .s-143, який містить чотири операції - +, -, *, /. Дано кнопку b-14, при натисканні на яку спрацьовує функція f14. Функція виводить в .out-14 результат операції обраної в 3-му select до числа введених у першому і другому input. Наприклад, вибрано 1 13 +, потрібно вивести результат операції 1+13 тобто.

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

document.querySelector(".b-14").onclick = f14;

// Task     15
// Дано select .s-151 та .s-152, кожен з яких містить 1 та 0. Дано select .s-153, який містить дві операції - && та || . Дана кнопка .b-15, при натисканні на яку спрацьовує функція f15. Функція виводить в .out-15 результат логічних операцій вибраних у третьому select до числа вибраних у першому і другому select. Наприклад, вибрано 1 1 &&, потрібно вивести результат операції 1&&1 тобто. 1 чи 0.

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

document.querySelector(".b-15").onclick = f15;
