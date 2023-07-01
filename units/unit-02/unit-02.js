// Task 1.
// Створіть дві змінні a = 7 та b = 9. Виведіть у консоль результат множення a на b.

// Task 2.
// Створіть дві змінні c = 7 та d = 9. Виведіть на сторінку в .output-2 результат ділення c на d.

// Task 3.
//  Створіть дві змінні e = 3 та f = 5. Виведіть на сторінку в .output-3 результат додавання e + f.

// Task 4.
//  Створіть дві змінні e1 = '3' і f1 = 5. Виведіть на сторінку в .output-4 результат додавання e1 + f1. Поясніть відмінність від попереднього результату.

// Task 5.
//  Створіть дві змінні e2 = 3 і f2 = 0. Виведіть на сторінку в .output-5 результат ділення e2 на f2.

// Task 6.
//  Створіть дві змінні e3 = 3 та f3 = 'Hello'. Виведіть на сторінку в .output-6 результат додавання двох змінних.

// Task 7.
//  Створіть дві змінні e4 = 3 та f4 = 'Hello'. Виведіть на сторінку в .output-7 результат множення двох змінних.

// Task 8.
// Після натискання кнопки .btn-8 виконується функція fn8, яка виводить в div.output-8 те, що користувач ввів в input.field-8. Розгляньте код і розберіть роботу скрипта

function fn8() {
  // значення value завжди отримуємо всередині функції
  const data = document.querySelector(".field-8").value; // отримали значення
  // нижче виводимо значення на сторінку
  document.querySelector(".output-8").innerHTML = data;
}

document.querySelector(".btn-8").onclick = fn8;

// Task 9.
// Після натискання кнопки .btn-9 виконується функція fn9, яка виводить в div.output-9 те, що користувач ввів в input.field-9. Додайте очищення input після натискання кнопки.

function fn9() {}

document.querySelector(".btn-9").onclick = fn9;

// Task 10.
// Після натискання на кнопку .btn-10 виконується функція fn10, яка виводить у div.output-10 те, що користувач ввів в input.field-10 помножене на 20.

function fn10() {}

document.querySelector(".btn-10").onclick = fn10;

// Task 11.
// Після натискання на кнопку .btn-11 виконується функція fn11, яка виводить на сторінку в .output-11 число, яке ввів користувач в .field-11 і до нього додане число 55. У цій задачі ми не приводимо до числа значення отримане з input.

function fn11() {}

document.querySelector(".btn-11").onclick = fn11;

// Task 12.
// Після натискання на кнопку виконується функція fn12. Функція повинна отримати дані з input.field-12-1 та .field-12-2 (користувач вводить в них прізвище та ім'я). Після чого вивести в .output-12 рядок 'Hello ім'я прізвище', де ім'я - це ім'я користувача, а прізвище - це введене прізвище.
// Звертаємо увагу на те, що ми працюємо у відповідності до завданням.Hello - з великої літери. Між Hello ім'я один пробіл

function fn12() {}

document.querySelector(".btn-12").onclick = fn12;

// Task 13.
// При натисканні кнопки .btn-13 виконується функція fn13. Функція отримує з input.field-13-1 та input.field-13-2 числа в змінні a та b. Після чого в .output-13 виводить їхню суму. Потрібно перетворити змінні a та b у числа!

function fn13() {}

document.querySelector(".btn-13").onclick = fn13;

// Task 14.
// Після натискання кнопки .btn-14 виконується функція fn14. Вона замінює значення value input.field-14 на рядок 'Go'

function fn14() {}

document.querySelector(".btn-14").onclick = fn14;

// Task 15.
//  Після натискання кнопки .btn-15 виконується функція fn15. Вона встановлює для input.field-15 властивість style.border = "4px solid red".

function fn15() {}

document.querySelector(".btn-15").onclick = fn15;

// Task 16.
// Після натискання кнопки .btn-16 виконується функція fn16. Функція отримує з .field-16-1 та field-16-2 числа. Виведіть у .output-16 суму даних чисел по натисканню кнопки .btn-16. Не переводимо отримані значення з input у число!

function fn16() {}

document.querySelector(".btn-16").onclick = fn16;

// Task 17.
// Після натискання кнопки .btn-17 виконується функція fn17. Функція отримує з .field-17 число. Вивчіть роботу коду та запам'ятайте відмінності. Спробуйте ввести цифри 5, 4zz, zz4, -200, 33.05

function fn17() {
  let a = document.querySelector(".field-17").value;
  document.querySelector(".output-17-1").innerHTML = +a;
  document.querySelector(".output-17-2").innerHTML = parseInt(a, 10);
  document.querySelector(".output-17-3").innerHTML = Number(a);
}

document.querySelector(".btn-17").onclick = fn17;

// Task 18.
// Після натискання кнопки .btn-18 виконується функція fn18. Функція отримує з .field-18 число, яку потірбно присвоїти у змінну a. Виводить в output-18 результат операції parseFloat(a). Спробуйте ввести значення 5, 33.02, 33.9a, -20.01

function fn18() {}

document.querySelector(".btn-18").onclick = fn18;

// Task 19.
// Після натискання кнопки .btn-19 функція fn19 повинна в .output-19 вивести суму двох відʼємних чисел із input.field-19-1 та input.field-19-2.

function fn19() {}

document.querySelector(".btn-19").onclick = fn19;

// Task 20
//  При натисканні на кнопку .btn-20 у .output-20 виводиться число - скільки разів була натиснута кнопка .btn-20.

let count = 0;

function fn20() {
  // порахувати нове значення для count
  // нижче додати вивід в .output-20
}

document.querySelector(".btn-20").onclick = fn20;
