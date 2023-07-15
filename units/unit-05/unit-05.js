// Task 1
//  Створіть масив array1, що містить рядки, числа, булеві значення. Виведіть його в .output-1. Виводимо по натисканню кнопки .btn-1.
// змінну оголошуємо тут
const array1 = ['hello', 20, true]; // ініціалізація літерала масива
const out_1 = document.querySelector('.out-1');

function fn1() {
  out_1.innerHTML = array1; // будемо виводити таким способом
}

document.querySelector('.btn-1').onclick = fn1;

// Task 2
// Створіть масив array2, який містить рядки, числа, булеві значення. Виведіть його в div.output-2. Використовуйте шаблонний рядок для виведення з коду JS. Виводимо по натисканню кнопки .btn-2.

// змінну оголошуємо тут
const array2 = ['hello', 20, true]; // ініціалізація літерала масива
const out_2 = document.querySelector('.output-2');

function fn2() {
  out_2.innerHTML = `${array2}`;
}

document.querySelector('.btn-2').onclick = fn2;

// Task 3
// Створіть масив array3, заповніть його будь-якими значеннями. Виведіть довжину масиву.
// Виводимо по натисканню кнопки .btn-3
// Виводимо в .output-3

// змінну оголошуємо тут
const array3 = ['hello', 20, true]; // ініціалізація літерала масива
const out_3 = document.querySelector('.output-3');

function fn3() {
  out_3.innerHTML = array3.length;
}

document.querySelector('.btn-3').onclick = fn3;

// Task 4
//  Створіть масив array4. Виведіть нульовий, третій, восьмий елемент масиву в .output-4 через пробіл.

// змінну оголошуємо тут
const array4 = [2, 3, 1, 4, 5, 6, 8, 9, 55, , 22]; // ініціалізація літерала масива
const out_4 = document.querySelector('.output-4');

function fn4() {
  console.log(array4);
  console.log(array4[array4.length - 2]);
}

document.querySelector('.btn-4').onclick = fn4;

// Task 5
//  Створіть масив чисел array5 довжина якого більше 5. Виведіть суму нульового, другого та третього елементів масиву
const array5 = [2, 3, 1, 4, 5, 6, 8, 9, 55, 22]; // ініціалізація літерала масива
const out_5 = document.querySelector('.output-5');

function fn5() {
  let result = array5[0] + array5[2] + array5[3];
  out_5.innerHTML = result;
}
document.querySelector('.btn-5').onclick = fn5;

// Task 6
//  Створіть масив array6, який містить ваше ім'я, знак зодіаку, день народження та місяць народження. Виведіть масив на сторінку в div.output-6. Роздільник - пробіл.
const array6 = ['Alex', 'lion', 22, 8]; // ініціалізація літерала масива
const out_6 = document.querySelector('.output-6');

function fn6() {
  // out_6.innerHTML = array6.join(' ');

  let string = '';

  for (let i = 0; i < array6.length; i++) {
    const element = array6[i];
    // string += element + ' ';
    string += `${element} `;
  }

  console.log(string);
}

document.querySelector('.btn-6').onclick = fn6;

// Task 7
// Додайте до масиву array7 значення 'vietnam' з індексом 7, 'turkey' з індексом 6, 'italy' з індексом 5. Додавання елементів зробіть у fn7. Виведіть масив на сторінку в .output-7. Роздільник - пробіл.

const array7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
const output7 = document.querySelector('.output-7');

function fn7() {
  array7[7] = 'vietnam';
  array7[6] = 'turkey';
  array7[5] = 'italy';

  console.log(array7);
  output7.innerHTML = array7.join(' ');
}

document.querySelector('.btn-7').onclick = fn7;

// Task 8
// Додайте в масив array8 третій (індекс 3) елемент рівний 3.14, четвертий (індекс 4) елемент рівний 17, шостий елемент (індекс 6) рівний 5. Виведіть масив в .output-8. Розділювач – дефіс. У .output-8-1 виведіть довжину масиву array8.

const array8 = [];

function fn8() {}

document.querySelector('.btn-8').onclick = fn8;

// Task 9
// Виведіть останній елемент масиву array9. Виведення останнього елемента – реалізуйте із використанням індексу. Щоб розрахувати індекс останнього елемента – використовуйте довжину імасиву.

const array9 = [100, 200, 300, 400, 700, 121];

function fn9() {}

document.querySelector('.btn-9').onclick = fn9;

// Task 10
// Виведіть суму першого (індекс 1) та останнього елементів масиву array10 у блок .output-10. Індекс останнього елемента масиву не вказуйте безпосередньо, а обчислюйте.

const array10 = [100, 200, 300, 400, 700, 121];

function fn10() {}

document.querySelector('.btn-10').onclick = fn10;

// Task 11
// Напишіть функцію, яка змінює місцями другий (індекс 2) і четвертий (індекс 4) елементи масиву array11 і виводить його в .output-11. Роздільник - пробіл.

const array11 = [2, 3, 4, 5, 6, 7];

function fn11() {}

document.querySelector('.btn-11').onclick = fn11;

// Task 12
// Напишіть функцію fn12, яка змінює місцями нульовий та останній елемент масиву array12 і виводить його у .output-12. Роздільник - пробіл. Останній елемент вирахувати через довжину масиву.

const array12 = ['list', 'test', 'class', 'west', 'best'];

function fn12() {}

document.querySelector('.btn-12').onclick = fn12;

// Task 13
// Виведіть масив array13 в .output-13 у форматі індекс пробіл значення пробіл.

const array13 = ['list', 'test', 'class', 'west', 'best'];

function fn13() {}

document.querySelector('.btn-13').onclick = fn13;

// Task 14
//  Використовуючи цикл, виведіть на сторінку масив array14 у зворотному порядку. Роздільник - пробіл.

const array14 = [1, 2, 3, 'poly', 66];

function fn14() {}

document.querySelector('.btn-14').onclick = fn14;

// Task 15
// Використовуючи цикл, виведіть на сторінку елементи масиву array15, які більше нуля. Роздільник - пробіл.

const array15 = [8, 12, 2, 5, -4, 0, 6, 22, -9, 13, 78, -12];

function fn15() {}

document.querySelector('.btn-15').onclick = fn15;

// Task 16
// Виконайте перебір масиву array16. Парні елементи додайте в масив array16_even, непарні в array16_odd. Протестуйте завдання на повторний запуск. Виведіть array16_odd у div.output-16-odd, а array16_even у div.output-16-even. Роздільник - пробіл.

const array16 = [8, 12, 2, 5, -4, 0, 6, 22, -9, 13, 78, -12];
const array16_odd = [];
const array16_even = [];

function fn16() {}

document.querySelector('.btn-16').onclick = fn16;

// Task 17
// Використовуючи цикл, виведіть в .output-17 кількість елементів array17, значення яких більше 3. Для розрахунку використовуйте цикл і змінну лічильник.

const array17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function fn17() {}

document.querySelector('.btn-17').onclick = fn17;

// Task 18
// Використовуючи цикл, виведіть в .output-18 значення найбільшого числа масиву array18.

const array18 = [15, 24, 13, 78, 21, 4, 45, 67];

function fn18() {}

document.querySelector('.btn-18').onclick = fn18;

// Task 19
// Виведіть у .output-19 індекс мінімального числа в масиві array19

const array19 = [15, 424, 313, 78, 241, 4, 45, 67];

function fn19() {}

document.querySelector('.btn-19').onclick = fn19;

// Task 20
// Виведіть у .output-20 суму елементів у масиві array20.

const array20 = [4, 5, 6, 7, 8, 9, 10];

function fn20() {}

document.querySelector('.btn-20').onclick = fn20;
