// Task 1
// При натисканні кнопки .btn-1 спрацьовує функція fn1. Функція повинна прочитати вміст .field-1 та порівняти його з числом 4 (порівняння ==). Результат порівняння – true або false виведіть у .output-1.

function fn1() {
  const inputData = document.querySelector(".field-1").value;
  const output = document.querySelector(".output-1");

  if (inputData == 4) {
    output.innerHTML = true;
    return;
  }

  output.innerHTML = false;
}

document.querySelector(".btn-1").onclick = fn1;

// Task 2
// Дано дві змінні a2_1 і a2_2. При натисканні кнопки .btn-2 запускається функція fn2. Функція повинна порівняти змінні за допомогою if else і вивести в .output-2 більше число. Варіант рівності змінних не розглядається.
let a2_1 = 45;
let a2_2 = 32;

function fn2() {
  const output = document.querySelector(".output-2");

  if (a2_1 > a2_2) {
    output.innerHTML = a2_1;
  } else {
    output.innerHTML = a2_2;
  }
}

document.querySelector(".btn-2").onclick = fn2;

// Task 3
// Дано два input - .field-31 і .field-32, обидва - input[type=number]. При натисканні кнопки .btn-3 спрацьовує функція fn3. Функція має порівняти числа з input, вивести в .output-3 більше число.
// Проведіть самостійний тест роботи, введіть пари чисел 4 та 9, 9 та 22, 5 та 111.

function fn3() {
  const firstInputValue = Number(document.querySelector(".field-31").value);
  const secondInputValue = Number(document.querySelector(".field-32").value);
  const output = document.querySelector(".output-3");

  if (firstInputValue > secondInputValue) {
    output.innerHTML = firstInputValue;
    return;
  }

  output.innerHTML = secondInputValue;
}

document.querySelector(".btn-3").onclick = fn3;

// Task 4.
// Користувач вводить у .field-4 рік свого народження. Є кнопка .btn-4, яка запускає функцію fn4.Функція повинна вивести в .output-4 число 1 якщо користувачеві більше або 18 років, і 0 якщо менше.

function fn4() {
  // const currentDate = new Date();
  // currentDate.getFullYear() // отримання поточної дати через js

  const currentDate = 2023;
  const userBirthDay = Number(document.querySelector(".field-4").value);
  const output = document.querySelector(".output-4");

  if (currentDate - userBirthDay >= 18) {
    output.innerHTML = 1;
    return;
  }

  output.innerHTML = 0;
}

document.querySelector(".btn-4").onclick = fn4;

// Task 5.
// На сторінці є input з класом .field-5, куди можна ввести число. Є кнопка .btn-5, яка запускає функцію fn5. Функція повинна вивести в .output-5 символ 'm' якщо число менше нуля, 0 якщо число дорівнює нулю і 1 якщо число більше нуля.

function fn5() {
  const inputValue = Number(document.querySelector(".field-5").value);
  const output = document.querySelector(".output-5");

  if (inputValue < 0) {
    output.innerHTML = "m";
  } else if (inputValue === 0) {
    output.innerHTML = 0;
  } else {
    output.innerHTML = 1;
  }
}

document.querySelector(".btn-5").onclick = fn5;

// Task 6.
// На сторінці є input.field-6, куди користувач може ввести число. Є кнопка .btn-6, яка запускає функцію fn6. Функція повинна вивести в .output-6 слово 'even' якщо число парне і 'odd' якщо непарне. Для перевірки парності використовується залишок від ділення на 2 (оператор %). Якщо залишок дорівнює нулю – парне, ні – непарне.

function fn6() {
  const inputValue = Number(document.querySelector(".field-6").value);
  const output = document.querySelector(".output-6");

  if (inputValue % 2 === 0) {
    output.innerHTML = "even";
  } else {
    output.innerHTML = "odd";
  }
}

document.querySelector(".btn-6").onclick = fn6;

// Task 7.
// Дано два input - .field-7-1 і .field-7-2, обидва - input[type=number]. При натисканні кнопки .btn-7 спрацьовує функція fn7. Функція повинна число з .field-7-1 піднести до ступеня .field-7-2, вивести результат у .output-7. Для піднесення до ступеня можна використовувати ** або Math.pow.

function fn7() {
  const exponentBase = Number(document.querySelector(".field-7-1").value);
  const exponent = Number(document.querySelector(".field-7-2").value);
  const output = document.querySelector(".output-7");

  output.innerHTML = Math.pow(exponentBase, exponent);
}

document.querySelector(".btn-7").onclick = fn7;

// Task 8.
// Дано select.select-8, який містить 3 значення: 1, 2, 3. Дана кнопка btn-8. При натисканні спрацьовує функція fn8. Функція повинна отримати обране в select число, потім за допомогою switch case порівняти його по черзі з 1, 2, 3. І якщо вибране число - 1, то вивести в .output-8 рядок 'one', якщо 2 - 'two', якщо 3 - 'three'.

function fn8() {
  const selectValue = Number(document.querySelector(".select-8").value);
  const output = document.querySelector(".output-8");

  switch (selectValue) {
    case 1:
      output.innerHTML = "one";
      break;
    case 2:
      output.innerHTML = "two";
      break;

    default:
      output.innerHTML = "three";
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

function fn9() {
  const inputValue = Number(document.querySelector(".field-9").value);
  const output = document.querySelector(".output-9");

  if (inputValue >= 1 && inputValue <= 32) {
    output.innerHTML = 1;
  } else if (inputValue >= 33 && inputValue <= 43) {
    output.innerHTML = 2;
  } else if (inputValue >= 44 && inputValue <= 64) {
    output.innerHTML = 3;
  } else {
    output.innerHTML = 0;
  }
}

document.querySelector(".btn-9").onclick = fn9;

// Task 10
// Дано select.select-10. Після натискання кнопки, виведіть value вибраного option в .output-10.

function f10() {
  const selectValue = document.querySelector(".select-10").value;
  const output = document.querySelector(".output-10");

  output.innerHTML = selectValue;
}

document.querySelector(".btn-10").onclick = f10;

// Task 11
// Дано select.select-11. Після зміни стану select (подія onchange) виведіть value вибраного option в .output-11.

function f11() {
  const selectValue = document.querySelector(".select-11").value;
  const output = document.querySelector(".output-11");

  output.innerHTML = selectValue;
}

document.querySelector(".select-11").onchange = f11;

// Task 12
//  Дано input.field-12. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в .output-12 typeof отриманої змінної. typeof дозволяє визначити тип даних.

function f12() {
  const inputValue = document.querySelector(".field-12").value;
  const output = document.querySelector(".output-12");

  output.innerHTML = typeof inputValue;
}

document.querySelector(".btn-12").onclick = f12;

// Task 13
//  Дано input.field-13. На відміну від попереднього завдання – input type number. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в out-13 typeof отриманої змінної. Typeof дозволяє визначити тип даних. Якщо ви правильно все зробили - тип даних буде string! Подумайте, чому так?

function f13() {
  const inputValue = document.querySelector(".field-13").value;
  const output = document.querySelector(".output-13");

  output.innerHTML = typeof inputValue;
}

document.querySelector(".btn-13").onclick = f13;

// Task 14
// Дано input .field-14-1 та .field-14-2, [type=number]. Дано select .select-143, який містить чотири операції - +, -, *, /. Дано кнопку .btn-14, при натисканні на яку спрацьовує функція fn14. Функція виводить в .output-14 результат операції обраної в 3-му select до числа введених у першому і другому input. Наприклад, вибрано 1 13 +, потрібно вивести результат операції 1+13 тобто.

function f14() {
  const firstInputValue = Number(document.querySelector(".field-14-1").value);
  const secondInputValue = Number(document.querySelector(".field-14-2").value);
  const selectValue = document.querySelector(".select-143").value;
  const output = document.querySelector(".output-14");

  let result = null;

  switch (selectValue) {
    case "+":
      result = firstInputValue + secondInputValue;
      break;
    case "-":
      result = firstInputValue - secondInputValue;
      break;
    case "*":
      result = firstInputValue * secondInputValue;
      break;
    case "/":
      result = firstInputValue / secondInputValue;
      break;
  }

  output.innerHTML = result;
}

document.querySelector(".btn-14").onclick = f14;

// Task     15
// Дано select .select-15-1 та .select-15-2, кожен з яких містить 1 та 0. Дано select .select-15-3, який містить дві операції - && та || . Дана кнопка .btn-15, при натисканні на яку спрацьовує функція fn15. Функція виводить в .output-15 результат логічних операцій вибраних у третьому select до числа вибраних у першому і другому select. Наприклад, вибрано '1 1 &&', потрібно вивести результат операції '1 && 1', тобто 1 чи 0.

function f15() {
  const firstSelectValue = Number(document.querySelector(".select-15-1").value);
  const secondSelectValue = Number(document.querySelector(".select-15-2").value);
  const operand = document.querySelector(".select-15-3").value;
  const output = document.querySelector(".output-15");

  let result = null;

  switch (operand) {
    case "&&":
      result = firstSelectValue && secondSelectValue;
      break;
    case "||":
      result = firstSelectValue || secondSelectValue;
      break;
  }

  output.innerHTML = result;
}

document.querySelector(".btn-15").onclick = f15;
