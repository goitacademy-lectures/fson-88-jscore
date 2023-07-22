// Task 1
//  Напишіть функцію fn1, яка при натисканні кнопки виводить у .output-1 змінну number1.

const number1 = 15;
const out_1 = document.querySelector(".output-1");

function fn1() {
  out_1.innerHTML = number1; 
}

document.querySelector(".btn-1").onclick = fn1;

// Task 2.
// Покращимо код із Task 1. Зараз функція лише виводить змінну в заданий блок. Давайте зробимо так, щоб функція була більш гнучкою. Нехай тепер функція fn2 повертає (return) змінну number2. Оскільки функція повертає змінну, то ім'я функції із дужками (виклик функції) можна вбудовувати у вирази. Зверніть увагу, як тепер змінюється виклик функції.

const number2 = 15;

function fn2() {
  return number2;
}

document.querySelector(".btn-2").onclick = function () {
  document.querySelector(".output-2").textContent = fn2();
  // Перевірте результат роботи виразів нижче в консолі
  5 + fn2(); // має вивести 20
  6 * fn2(); // має вивести 90
  fn2() * fn2() * fn2(); // 3375
};

// Task 3.
//  Наша попередня функція, все ще сильно залежна від зовнішніх змінних. Давайте зробимо її універсальнішою. Нехай функція fn3 приймає 2 аргументи та повертає їх добуток. Допишіть код функції так, щоб вона повертала добуток двох чисел, переданих їй як аргументи a, b. Протестуємо функцію на двох прикладах, за допомогою кнопок .btn-3-1 та .btn-3-2.

function fn3(a, b) {
  return a * b;
}

document.querySelector(".btn-3-1").onclick = function () {
  const output = document.querySelector(".output-3-1");
  output.textContent = fn3(4, 4);
  // як видно з прикладу, ми можемо всередину передати будь-які числа і fn3 їх перемножить і поверне.
};
document.querySelector(".btn-3-2").onclick = function () {
  const output = document.querySelector(".output-3-2");
  output.textContent = fn3(7, 8);
};

// Task 4
// Напишіть функцію fn4, яка приймає ваш рік народження і обчислює (повертає) ваш вік. Використайте конструктор new Date() і його метод getFullYear()

function fn4(youYear) {
  const dataToday = new Date();
  const yearToday = dataToday.getFullYear(); 

  return yearToday - youYear;
}

document.querySelector(".btn-4").onclick = function () {
  document.querySelector(".output-4").textContent = fn4(1970); // тут можна вказати свій вік
};

// Task 5
// Напишіть функцію fn5, яка приймає ваше ім'я як параметр і повертає число символів у ньому, де name - це ім'я прийняте як параметр. Довжину (число символів) можна порахувати за допомогою властивості length.

function fn5(youName) {
  return `${youName} ${youName.length}`
}

document.querySelector(".btn-5").onclick = function () {
  document.querySelector(".output-5").textContent = fn5("Oleg"); // тут можна вказати своє ім'я
};

// Task 6
// Напишіть функцію fn6, яка приймає 2 числа і повертає випадкове ціле число від першого до другого прийнятого параметра. Це перше завдання, вирішення якого потрібно знайти в Google.

function fn6(arg1, arg2) {
  return Math.round(Math.random() * (arg1 - arg2) + arg2);
}

document.querySelector(".btn-6").onclick = function () {
  document.querySelector(".output-6").textContent = fn6(100, 107); // виклик функції
};

// Task 7
// Напишіть функцію fn7, яка повертає випадковий колір у форматі rgb(x, y, z) (рядок). Де x, y, z – випадкові числа в діапазоні [0, 255].

function fn7() {
  // Отже, одне із цікавих завдань.
  // Нам потрібно зробити такий рядок, наприклад:
  // rgb(33, 123, 255) - числа можуть бути будь-які від 0 до 255
  // У вас є функція fn6, яка може генерувати випадкові цілі числа в потрібному діапазоні, давайте скористаємося нею
  const redColor = Math.round(Math.random() * 255);
  const greenColor = Math.round(Math.random() * 255);
  const blueColor = Math.round(Math.random() * 255);
  return `rgb(${redColor}, ${greenColor}, ${blueColor})`
}

document.querySelector(".btn-7").onclick = function () {
  document.querySelector(".output-7").style.background = fn7(); // виклик функції
};

// Task 8
// Напишіть функцію fn8, яка приймає рядок як параметр і повертає результат з очищеними пробілами на початку та в кінці рядка. Рядок, який приймає функція "    JavaScriptIsMyJam    ", а повертає санітізований рядок JavaScriptIsMyJam. Для видалення пробілів використайте метод trim().

function fn8(inputString) {
  return inputString.trim();
}

document.querySelector(".btn-8").onclick = function () {
  let s = "            JavaScriptIsMyJam            ";
  console.log(s);
  console.log(fn8(s));
};

// Task 9
//  Напишіть функцію fn9, яка приймає число та повертає true, якщо число парне, і false якщо не парне.

function fn9(Arg) {
  return Arg % 2 === 0;
}

document.querySelector(".btn-9").onclick = function () {
  document.querySelector(".output-9").textContent = fn9(14); // виклик функції
};

// Task 10
// Створіть функцію fn10, яка приймає 2 числа і повертає більше з них. У разі рівності - перше.

function fn10(arg1, arg2) {
  return arg1 >= arg2 ? arg1 : arg2;
}

document.querySelector(".btn-10").onclick = function () {
  document.querySelector(".output-10").textContent = fn10(9, 9); // виклик функції
};
