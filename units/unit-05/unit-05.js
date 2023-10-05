// Task 1
//  Створіть масив array1, що містить рядки, числа, булеві значення. Виведіть його в .output-1. Виводимо по натисканню кнопки .btn-1.
// змінну оголошуємо тут
const array1 = ["flkj", false, 50]; // ініціалізація літерала масива
const out_1 = document.querySelector(".output-1");

function fn1() {
  out_1.innerHTML = array1; // будемо виводити таким способом
}

document.querySelector(".btn-1").onclick = fn1;

// Task 2
// Створіть масив array2, який містить рядки, числа, булеві значення. Виведіть його в div.output-2. Використовуйте шаблонний рядок для виведення з коду JS. Виводимо по натисканню кнопки .btn-2.

// змінну оголошуємо тут
const array2 = ["m", 20, true];

function fn2() {
  let string = `${array2}`;
  document.querySelector(".output-2").innerHTML = string;
}

document.querySelector(".btn-2").onclick = fn2;

// Task 3
// Створіть масив array3, заповніть його будь-якими значеннями. Виведіть довжину масиву.
// Виводимо по натисканню кнопки .btn-3
// Виводимо в .output-3

// змінну оголошуємо тут
let array3 = [2, 5, 2, 5, 1];
const out3 = document.querySelector(".output-3");

function fn3() {
  out3.innerHTML = array3.length;
}

document.querySelector(".btn-3").onclick = fn3;

// Task 4
//  Створіть масив array4. Виведіть нульовий, третій, восьмий елемент масиву в .output-4 через пробіл.

// змінну оголошуємо тут
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const out4 = document.querySelector(".output-4");
function fn4() {
  out4.innerHTML = `${array4[0]} ${array4[2]} ${array4[7]}`;
}

document.querySelector(".btn-4").onclick = fn4;

// Task 5
//  Створіть масив чисел array5 довжина якого більше 5. Виведіть суму нульового, другого та третього елементів масиву
let array5 = [10, 5, 2, 55, 1, 8, 9];
const out5 = document.querySelector(".output-5");
function fn5() {
  out5.innerHTML = array5[0] + array5[2] + array5[3];
}

document.querySelector(".btn-5").onclick = fn5;

// Task 6
//  Створіть масив array6, який містить ваше ім'я, знак зодіаку, день народження та місяць народження. Виведіть масив на сторінку в div.output-6. Роздільник - пробіл.
let array6 = ["svitl", "skorp", 24, 10];
const out6 = document.querySelector(".output-6");
function fn6() {
  // out6.innerHTML = array6.join(" ");
  let string = "";
  for (let i = 0; i < array6.length; i++) {
    const element = array6[i];
    string += `${element} `;
    out6.innerHTML = string;
  }
}

document.querySelector(".btn-6").onclick = fn6;

// Task 7
// Додайте до масиву array7 значення 'vietnam' з індексом 7, 'turkey' з індексом 6, 'italy' з індексом 5. Додавання елементів зробіть у fn7. Виведіть масив на сторінку в .output-7. Роздільник - пробіл.

const array7 = ["china", "india", "brazil", "japan", "egypt"];
const out7 = document.querySelector(".output-7");
function fn7() {
  array7[7] = "vietnam";
  array7[6] = "turkey";
  array7[5] = "italy";
  // out7.innerHTML = array7.join(" ");

  let string = "";
  for (let i = 0; i < array7.length; i += 1) {
    const elem = array7[i];
    string += `${elem} `;
  }
  out7.innerHTML = string;
}

document.querySelector(".btn-7").onclick = fn7;

// Task 8
// Додайте в масив array8 третій (індекс 3) елемент рівний 3.14, четвертий (індекс 4) елемент рівний 17, шостий елемент (індекс 6) рівний 5. Виведіть масив в .output-8. Розділювач – дефіс. У .output-8-1 виведіть довжину масиву array8.

const array8 = [];
const out8 = document.querySelector(".output-8");
const out81 = document.querySelector(".output-8-1");

function fn8() {
  array8[3] = 3.14;
  array8[4] = 17;
  array8[6] = 5;

  out8.innerHTML = array8.join("-");
  out81.innerHTML = array8.length;
}

document.querySelector(".btn-8").onclick = fn8;

// Task 9
// Виведіть останній елемент масиву array9. Виведення останнього елемента – реалізуйте із використанням індексу. Щоб розрахувати індекс останнього елемента – використовуйте довжину імасиву.

const array9 = [100, 200, 300, 400, 700, 121];

function fn9() {
  document.querySelector(".output-9").innerHTML = array9[array9.length - 1];
}

document.querySelector(".btn-9").onclick = fn9;

// Task 10
// Виведіть суму першого (індекс 1) та останнього елементів масиву array10 у блок .output-10. Індекс останнього елемента масиву не вказуйте безпосередньо, а обчислюйте.

const array10 = [100, 200, 300, 400, 700, 121];

function fn10() {
  document.querySelector(".output-10").innerHTML =
    array10[1] + array10[array10.length - 1];
}

document.querySelector(".btn-10").onclick = fn10;

// Task 11
// Напишіть функцію, яка змінює місцями другий (індекс 2) і четвертий (індекс 4) елементи масиву array11 і виводить його в .output-11. Роздільник - пробіл.

const array11 = [2, 3, 4, 5, 6, 7];

function fn11() {
  const deletedElem = array11.splice(2, 1, array11[4]);
  array11.splice(4, 1, deletedElem);
  document.querySelector(".output-11").innerHTML = array11;
}

document.querySelector(".btn-11").onclick = fn11;

// Task 12
// Напишіть функцію fn12, яка змінює місцями нульовий та останній елемент масиву array12 і виводить його у .output-12. Роздільник - пробіл. Останній елемент вирахувати через довжину масиву.

const array12 = ["list", "test", "class", "west", "best"];

function fn12() {
  const lastIdx = array12.length - 1;
  const deletedElem = String(array12.splice(0, 1, array12[lastIdx]));
  array12.splice(lastIdx, 1, deletedElem);

  document.querySelector(".output-12").innerHTML = array12.join(" ");
}

document.querySelector(".btn-12").onclick = fn12;

// Task 13
// Виведіть масив array13 в .output-13 у форматі індекс пробіл значення пробіл.

const array13 = ["list", "test", "class", "west", "best"];

function fn13() {
  let string = "";
  for (const item of array13) {
    string += `${item} ${array13.indexOf(item)} `;
  }
  document.querySelector(".output-13").innerHTML = string;
}

document.querySelector(".btn-13").onclick = fn13;

// Task 14
//  Використовуючи цикл, виведіть на сторінку масив array14 у зворотному порядку. Роздільник - пробіл.

const array14 = [1, 2, 3, "poly", 66];

function fn14() {
  document.querySelector(".output-14").innerHTML = array14.reverse().join(" ");
}

document.querySelector(".btn-14").onclick = fn14;

// Task 15
// Використовуючи цикл, виведіть на сторінку елементи масиву array15, які більше нуля. Роздільник - пробіл.

const array15 = [8, 12, 2, 5, -4, 0, 6, 22, -9, 13, 78, -12];

function fn15() {
  let string = "";
  for (const item of array15) {
    if (item > 0) {
      string += item + " ";
    }
  }
  document.querySelector(".output-15").innerHTML = string;
}

document.querySelector(".btn-15").onclick = fn15;

// Task 16
// Виконайте перебір масиву array16. Парні елементи додайте в масив array16_even, непарні в array16_odd. Протестуйте завдання на повторний запуск. Виведіть array16_odd у div.output-16-odd, а array16_even у div.output-16-even. Роздільник - пробіл.

const array16 = [8, 12, 2, 5, -4, 0, 6, 22, -9, 13, 78, -12];
const array16_odd = [];
const array16_even = [];

function fn16() {
  for (const item of array16) {
    item % 2 === 0 ? array16_even.push(item) : array16_odd.push(item);
  }
  document.querySelector(".output-16-even").innerHTML = array16_even.join(" ");
  document.querySelector(".output-16-odd").innerHTML = array16_odd.join(" ");
}

document.querySelector(".btn-16").onclick = fn16;

// Task 17
// Використовуючи цикл, виведіть в .output-17 кількість елементів array17, значення яких більше 3. Для розрахунку використовуйте цикл і змінну лічильник.

const array17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function fn17() {
  let counter = 0;
  for (const item of array17) {
    if (item > 3) {
      counter += 1;
    }
    document.querySelector(".output-17").innerHTML = counter;
  }
}

document.querySelector(".btn-17").onclick = fn17;

// Task 18
// Використовуючи цикл, виведіть в .output-18 значення найбільшого числа масиву array18.

const array18 = [15, 24, 13, 78, 21, 4, 45, 67];

function fn18() {
  let largestNumber = array18[0];
  for (const item of array18) {
    if (item > largestNumber) largestNumber = item;
  }
  document.querySelector(".output-18").innerHTML = largestNumber;
}

document.querySelector(".btn-18").onclick = fn18;

// Task 19
// Виведіть у .output-19 індекс мінімального числа в масиві array19

const array19 = [15, 424, 313, 78, 241, 4, 45, 67];

function fn19() {
  let smallestNumber = array19[0];
  for (const item of array19) {
    if (item < smallestNumber) {
      smallestNumber = item;
    }
  }
  document.querySelector(".output-19").innerHTML =
    array19.indexOf(smallestNumber);
}

document.querySelector(".btn-19").onclick = fn19;

// Task 20
// Виведіть у .output-20 суму елементів у масиві array20.

const array20 = [4, 5, 6, 7, 8, 9, 10];

function fn20() {
  let sum = 0;
  for (const item of array20) {
    sum += item;
  }
  document.querySelector(".output-20").innerHTML = sum;
}

document.querySelector(".btn-20").onclick = fn20;
