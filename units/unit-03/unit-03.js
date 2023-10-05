// Task 1
// При натисканні кнопки .btn-1 спрацьовує функція fn1. Функція повинна прочитати вміст .field-1 та порівняти його з числом 4 (порівняння ==). Результат порівняння – true або false виведіть у .output-1.

function fn1() {
  const f1 = document.querySelector(".field-1").value;
  document.querySelector(".output-1").innerHTML = f1 == 4;
}

document.querySelector(".btn-1").onclick = fn1;

// Task 2
// Дано дві змінні a2_1 і a2_2. При натисканні кнопки .btn-2 запускається функція fn2. Функція повинна порівняти змінні за допомогою if else і вивести в .output-2 більше число. Варіант рівності змінних не розглядається.

let a2_1 = 15;
let a2_2 = 7;
const sum = 0;
function fn2() {
  if (a2_1 < a2_2) {
    document.querySelector(".output-2").innerHTML = a2_2;
  } else {
    document.querySelector(".output-2").innerHTML = a2_1;
  }
}

document.querySelector(".btn-2").onclick = fn2;

// Task 3
// Дано два input - .field-31 і .field-32, обидва - input[type=number]. При натисканні кнопки .btn-3 спрацьовує функція fn3. Функція має порівняти числа з input, вивести в .output-3 більше число.
// Проведіть самостійний тест роботи, введіть пари чисел 4 та 9, 9 та 22, 5 та 111.

function fn3() {
  const input31 = Number(document.querySelector(".field-3-1").value);
  const input32 = Number(document.querySelector(".field-3-2").value);

  const output3 = document.querySelector(".output-3");

  if (input31 < input32) {
    output3.innerHTML = input32;
    return;
  }
  output3.innerHTML = input31;
}

document.querySelector(".btn-3").onclick = fn3;

// Task 4.
// Користувач вводить у .field-4 рік свого народження. Є кнопка .btn-4, яка запускає функцію fn4.Функція повинна вивести в .output-4 число 1 якщо користувачеві більше або 18 років, і 0 якщо менше.

function fn4() {
  const currentYear = 2023;
  const setYear = Number(document.querySelector(".field-4").value);
  const output4 = document.querySelector(".output-4");

  if (currentYear - setYear >= 18) {
    output4.innerHTML = 1;
    return;
  }
  output4.innerHTML = 0;
}

document.querySelector(".btn-4").onclick = fn4;

// Task 5.
// На сторінці є input з класом .field-5, куди можна ввести число. Є кнопка .btn-5, яка запускає функцію fn5. Функція повинна вивести в .output-5 символ 'm' якщо число менше нуля, 0 якщо число дорівнює нулю і 1 якщо число більше нуля.

function fn5() {
  const input5 = document.querySelector(".field-5").value;
  const output5 = document.querySelector(".output-5");

  if (input5 < 0) {
    output5.innerHTML = "below";
  } else if (input5 > 0) {
    output5.innerHTML = "above";
  } else {
    output5.innerHTML = "zero";
  }
}

document.querySelector(".btn-5").onclick = fn5;

// Task 6.
// На сторінці є input.field-6, куди користувач може ввести число. Є кнопка .btn-6, яка запускає функцію fn6. Функція повинна вивести в .output-6 слово 'even' якщо число парне і 'odd' якщо непарне. Для перевірки парності використовується залишок від ділення на 2 (оператор %). Якщо залишок дорівнює нулю – парне, ні – непарне.

function fn6() {
  const value6 = document.querySelector(".field-6").value;
  const output6 = document.querySelector(".output-6");
  if (value6 % 2 === 0) {
    output6.innerHTML = "even";
    return;
  }
  output6.innerHTML = "odd";
}

document.querySelector(".btn-6").onclick = fn6;

// Task 7.
// Дано два input - .field-7-1 і .field-7-2, обидва - input[type=number]. При натисканні кнопки .btn-7 спрацьовує функція fn7. Функція повинна число з .field-7-1 піднести до ступеня .field-7-2, вивести результат у .output-7. Для піднесення до ступеня можна використовувати ** або Math.pow.

function fn7() {
  const value71 = Number(document.querySelector(".field-7-1").value);
  const value72 = Number(document.querySelector(".field-7-2").value);
  document.querySelector(".output-7").innerHTML = Math.pow(value71, value72);
}

document.querySelector(".btn-7").onclick = fn7;

// Task 8.
// Дано select.select-8, який містить 3 значення: 1, 2, 3. Дана кнопка btn-8. При натисканні спрацьовує функція fn8. Функція повинна отримати обране в select число, потім за допомогою switch case порівняти його по черзі з 1, 2, 3. І якщо вибране число - 1, то вивести в .output-8 рядок 'one', якщо 2 - 'two', якщо 3 - 'three'.

function fn8() {
  const value8 = Number(document.querySelector(".select-8").value);
  const output8 = document.querySelector(".output-8");
  switch (value8) {
    case 1:
      output8.innerHTML = "one";
      break;
    case 2:
      output8.innerHTML = "two";
      break;
    case 3:
      output8.innerHTML = "three";
      break;
  }
}

document.querySelector(".btn-8").onclick = fn8;

// Task 9
//  Є input.field-9, куди користувач може ввести номер квартири. Є кнопка .btn-9, яка запускає функцію fn9. Функція має вивести в .output-9 номер під'їзду, де знаходиться квартира.
//  якщо від 1 (включно) до 32 (включно) - вивести цифру 1
//  якщо від 33 (включно) до 43 (включно) - вивести 2
//  якщо від 44 (включно) до 64 (включно) - то 3
//  інакше вивести 0

function fn9() {
  const value9 = Number(document.querySelector(".field-9").value);
  const output9 = document.querySelector(".output-9");
  if (value9 >= 1 && value9 <= 32) {
    output9.innerHTML = 1;
  } else if (value9 >= 33 && value9 <= 43) {
    output9.innerHTML = 2;
  } else if (value9 >= 44 && value9 <= 64) {
    output9.innerHTML = 3;
  } else {
    output9.innerHTML = 0;
  }
}

document.querySelector(".btn-9").onclick = fn9;

// Task 10
// Дано select.select-10. Після натискання кнопки, виведіть value вибраного option в .output-10.

function f10() {
  const value10 = document.querySelector(".select-10").value;
  document.querySelector(".output-10").innerHTML = value10;
}

document.querySelector(".btn-10").onclick = f10;

// Task 11
// Дано select.select-11. Після зміни стану select (подія onchange) виведіть value вибраного option в .output-11.

function f11() {
  const value11 = document.querySelector(".select-11").value;
  document.querySelector(".output-11").innerHTML = value11;
}

document.querySelector(".select-11").onchange = f11;

// Task 12
//  Дано input.field-12. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в .output-12 typeof отриманої змінної. typeof дозволяє визначити тип даних.

function f12() {
  const value12 = document.querySelector(".field-12").value;
  document.querySelector(".output-12").innerHTML = typeof value12;
}

document.querySelector(".btn-12").onclick = f12;

// Task 13
//  Дано input.field-13. На відміну від попереднього завдання – input type number. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в out-13 typeof отриманої змінної. Typeof дозволяє визначити тип даних. Якщо ви правильно все зробили - тип даних буде string! Подумайте, чому так?

function f13() {
  const value13 = document.querySelector(".field-13").value;
  document.querySelector(".output-13").innerHTML = typeof value13;
}

document.querySelector(".btn-13").onclick = f13;

// Task 14
// Дано input .field-14-1 та .field-14-2, [type=number]. Дано select .select-143, який містить чотири операції - +, -, *, /. Дано кнопку .btn-14, при натисканні на яку спрацьовує функція fn14. Функція виводить в .output-14 результат операції обраної в 3-му select до числа введених у першому і другому input. Наприклад, вибрано 1 13 +, потрібно вивести результат операції 1+13 тобто.

function f14() {
  const value141 = Number(document.querySelector(".field-14-1").value);
  const value142 = Number(document.querySelector(".field-14-2").value);
  const select = document.querySelector(".select-14").value;
  const output14 = document.querySelector(".output-14");

  let result = 0;

  switch (select) {
    case "+":
      result = value141 + value142;
      break;
    case "-":
      result = value141 - value142;
      break;
    case "*":
      result = value141 * value142;
      break;
    case "/":
      result = value141 / value142;
      break;
  }
  output14.innerHTML = result;
}

document.querySelector(".btn-14").onclick = f14;

// Task     15
// Дано select .select-15-1 та .select-15-2, кожен з яких містить 1 та 0. Дано select .select-15-3, який містить дві операції - && та || . Дана кнопка .btn-15, при натисканні на яку спрацьовує функція fn15. Функція виводить в .output-15 результат логічних операцій вибраних у третьому select до числа вибраних у першому і другому select. Наприклад, вибрано '1 1 &&', потрібно вивести результат операції '1 && 1', тобто 1 чи 0.

function f15() {
  const value1 = document.querySelector(".select-15-1").value;
  const value2 = document.querySelector(".select-15-2").value;
  const select = document.querySelector(".select-15-3").value;
  const output = document.querySelector(".output-15");

  let result = null;

  switch (select) {
    case "&&":
      result = value1 && value2;
      break;
    case "||":
      result = value1 || value2;
      break;
  }
  output.innerHTML = result;
}

document.querySelector(".btn-15").onclick = f15;
