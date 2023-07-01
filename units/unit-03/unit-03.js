// Task 1
// При натисканні кнопки .btn-1 спрацьовує функція fn1. Функція повинна прочитати вміст .field-1 та порівняти його з числом 4 (порівняння ==). Результат порівняння – true або false виведіть у .output-1.

function f1() {
  let a = document.querySelector(".i-1");
  document.querySelector(".out-1").innerHTML = a.value == 4;
}

document.querySelector(".btn-1").onclick = fn1;

// Task 2
// Дано дві змінні a2_1 і a2_2. При натисканні кнопки .btn-2 запускається функція fn2. Функція повинна порівняти змінні за допомогою if else і вивести в .output-2 більше число. Варіант рівності змінних не розглядається.

let a21 = 1;
let a22 = 3;

function f2() {
  if (a21 > a22) {
    document.querySelector(".out-2").innerHTML = a21;
  } else {
    document.querySelector(".out-2").innerHTML = a22;
  }
}

document.querySelector(".btn-2").onclick = fn2;

// Task 3
// Дано два input - .field-31 і .field-32, обидва - input[type=number]. При натисканні кнопки .btn-3 спрацьовує функція fn3. Функція має порівняти числа з input, вивести в .output-3 більше число.
// Проведіть самостійний тест роботи, введіть пари чисел 4 та 9, 9 та 22, 5 та 111.

function f3() {
  let input1 = document.querySelector(".i-31");
  let input2 = document.querySelector(".i-32");

  const a = parseInt(input1.value);
  const b = parseInt(input2.value);
  if (a > b) {
    document.querySelector(".out-3").innerHTML = a;
  } else if (a < b) {
    document.querySelector(".out-3").innerHTML = b;
  } else if (a === b) {
    document.querySelector(".out-3").innerHTML = "Числа рівні";
  } else {
    document.querySelector(".out-3").innerHTML = "ВВЕДІТЬ ЗНАЧЕННЯ";
  }
}

document.querySelector(".btn-3").onclick = fn3;

// Task 4.
// Користувач вводить у .field-4 рік свого народження. Є кнопка .btn-4, яка запускає функцію fn4.Функція повинна вивести в .output-4 число 1 якщо користувачеві більше або 18 років, і 0 якщо менше.

function f4() {
  let personalAge = document.querySelector(".i-4").value;
  let currentYear = 2023;
  let currentAge = currentYear - personalAge;

  if (currentAge >= 18) {
    document.querySelector(".out-4").innerHTML = Number(true);
  } else {
    document.querySelector(".out-4").innerHTML = Number(false);
  }
}

document.querySelector(".btn-4").onclick = fn4;

// Task 5.
// На сторінці є input з класом .field-5, куди можна ввести число. Є кнопка .btn-5, яка запускає функцію fn5. Функція повинна вивести в .output-5 символ 'm' якщо число менше нуля, 0 якщо число дорівнює нулю і 1 якщо число більше нуля.

function f5() {
  let input1 = document.querySelector(".i-5");
  const a = parseInt(input1.value);

  if (a <= -1) {
    document.querySelector(".out-5").innerHTML = "m";
  } else if (a === 0) {
    document.querySelector(".out-5").innerHTML = 0;
  } else if (a > 0) {
    document.querySelector(".out-5").innerHTML = 1;
  } else {
    document.querySelector(".out-5").innerHTML = "ВВЕДІТЬ ЗНАЧЕННЯ";
  }
}

document.querySelector(".btn-5").onclick = fn5;

// Task 6.
// На сторінці є input.field-6, куди користувач може ввести число. Є кнопка .btn-6, яка запускає функцію fn6. Функція повинна вивести в .output-6 слово 'even' якщо число парне і 'odd' якщо непарне. Для перевірки парності використовується залишок від ділення на 2 (оператор %). Якщо залишок дорівнює нулю – парне, ні – непарне.

function f6() {
  let input6 = document.querySelector(".i-6");
  const a = parseInt(input6.value);
  let even = a % 2;

  if (even === 0) {
    document.querySelector(".out-6").innerHTML = "Even";
  } else if (even > 0 || even < 0) {
    document.querySelector(".out-6").innerHTML = "Odd";
  } else {
    document.querySelector(".out-6").innerHTML = "ВВЕДІТЬ ЗНАЧЕННЯ";
  }
}

document.querySelector(".btn-6").onclick = fn6;

// Task 7.
// Дано два input - .field-7-1 і .field-7-2, обидва - input[type=number]. При натисканні кнопки .btn-7 спрацьовує функція fn7. Функція повинна число з .field-7-1 піднести до ступеня .field-7-2, вивести результат у .output-7. Для піднесення до ступеня можна використовувати ** або Math.pow.

function f7() {
  let input71 = document.querySelector(".i-71");
  let input72 = document.querySelector(".i-72");

  const a = parseInt(input71.value);
  const b = parseInt(input72.value);
  document.querySelector(".out-7").innerHTML = Math.pow(a, b);
}

document.querySelector(".btn-7").onclick = fn7;

// Task 8.
// Дано select.select-8, який містить 3 значення: 1, 2, 3. Дана кнопка btn-8. При натисканні спрацьовує функція fn8. Функція повинна отримати обране в select число, потім за допомогою switch case порівняти його по черзі з 1, 2, 3. І якщо вибране число - 1, то вивести в .output-8 рядок 'one', якщо 2 - 'two', якщо 3 - 'three'.

function f8() {
  let select8 = document.querySelector(".s-8");
  const a = parseInt(select8.value);

  switch (a) {
    case 1:
      document.querySelector(".out-8").innerHTML = "One";
      break;

    case 2:
      document.querySelector(".out-8").innerHTML = "Two";
      break;

    default:
      document.querySelector(".out-8").innerHTML = "Three";
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
  const input9 = document.querySelector(".i-9");
  const roomNumber = parseInt(input9.value);
  let message;

  if (roomNumber >= 1 && roomNumber <= 32) {
    message = "1";
  } else if (roomNumber >= 33 && roomNumber <= 43) {
    message = "2";
  } else if (roomNumber >= 44 && roomNumber <= 64) {
    message = "3";
  } else {
    message = "0";
  }
  document.querySelector(".out-9").innerHTML = message;
}

document.querySelector(".btn-9").onclick = fn9;

// Task 10
// Дано select.select-10. Після натискання кнопки, виведіть value вибраного option в .output-10.

function f10() {
  let select8 = document.querySelector(".s-100");
  const a = select8.value;
  document.querySelector(".out-10").innerHTML = a;
}

document.querySelector(".btn-10").onclick = f10;

// Task 11
// Дано select.select-11. Після зміни стану select (подія onchange) виведіть value вибраного option в .output-11.

function f11() {
  let select11 = document.querySelector(".s-110");
  const a = select11.value;
  document.querySelector(".out-11").innerHTML = a;
}

document.querySelector(".select-110").onchange = f11;

// Task 12
//  Дано input.field-12. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в .output-12 typeof отриманої змінної. typeof дозволяє визначити тип даних.

function f12() {
  let input12 = document.querySelector(".i-120").value;
  let typeInput = typeof input12;
  document.querySelector(".out-12").innerHTML = typeInput;
}

document.querySelector(".btn-12").onclick = f12;

// Task 13
//  Дано input.field-13. На відміну від попереднього завдання – input type number. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в out-13 typeof отриманої змінної. Typeof дозволяє визначити тип даних. Якщо ви правильно все зробили - тип даних буде string! Подумайте, чому так?

function f13() {
  let input13 = document.querySelector(".i-130").value;
  let typeInput = typeof input13;
  document.querySelector(".out-13").innerHTML = typeInput;
}

document.querySelector(".btn-13").onclick = f13;

// Task 14
// Дано input .field-14-1 та .field-14-2, [type=number]. Дано select .select-143, який містить чотири операції - +, -, *, /. Дано кнопку .btn-14, при натисканні на яку спрацьовує функція fn14. Функція виводить в .output-14 результат операції обраної в 3-му select до числа введених у першому і другому input. Наприклад, вибрано 1 13 +, потрібно вивести результат операції 1+13 тобто.

// function f14() {
//   let input141 = document.querySelector(".i-141").value;
//   let input142 = document.querySelector(".i-142").value;
//   let select11 = document.querySelector(".s-143");
//   const a = select11.value;
//   document.querySelector(".out-14").innerHTML = input141 + a + input142;
// }

// document.querySelector(".b-14").onclick = f14;

function f14() {
  let input1 = document.querySelector(".i-141").value;
  let input2 = document.querySelector(".i-142").value;
  const input141 = Number(input1);
  const input142 = Number(input2);
  let select11 = document.querySelector(".s-143").value;
  let result;

  switch (select11) {
    case "+":
      result = input141 + input142;
      break;
    case "-":
      result = input141 - input142;
      break;
    case "*":
      result = input141 * input142;
      break;
    case "/":
      result = input141 / input142;
      break;
    default:
      result = "Введіть значення";
  }
  document.querySelector(".out-14").innerHTML = result;
}

document.querySelector(".btn-14").onclick = f14;

// Task     15
// Дано select .select-15-1 та .select-15-2, кожен з яких містить 1 та 0. Дано select .select-15-3, який містить дві операції - && та || . Дана кнопка .btn-15, при натисканні на яку спрацьовує функція fn15. Функція виводить в .output-15 результат логічних операцій вибраних у третьому select до числа вибраних у першому і другому select. Наприклад, вибрано '1 1 &&', потрібно вивести результат операції '1 && 1', тобто 1 чи 0.

function f15() {
  let select1 = document.querySelector(".s-151").value;
  let select2 = document.querySelector(".s-152").value;
  let select3 = document.querySelector(".s-153").value;
  let result;

  switch (select3) {
    case "&&":
      result = select1 && select2;
      break;
    case "||":
      result = select1 || select2;
      break;
    default:
      result = "Невідома операція";
  }
  document.querySelector(".out-15").innerHTML = result;
}

document.querySelector(".btn-15").onclick = f15;
