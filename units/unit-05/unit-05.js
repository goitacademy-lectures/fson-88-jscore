// Task 1
//  Створіть масив array1, що містить рядки, числа, булеві значення. Виведіть його в .output-1. Виводимо по натисканню кнопки .btn-1.
// змінну оголошуємо тут
const array1 = ["hello world", 20, true]; // ініціалізація літерала масива
const out_1 = document.querySelector(".output-1");

function fn1() {
  out_1.innerHTML = array1; // будемо виводити таким способом
}

document.querySelector(".btn-1").onclick = fn1;

// Task 2
// Створіть масив array2, який містить рядки, числа, булеві значення. Виведіть його в div.output-2. Використовуйте шаблонний рядок для виведення з коду JS. Виводимо по натисканню кнопки .btn-2.
const array2 = ["hello world", 20, true];
const out_2 = document.querySelector(".output-2");
// змінну оголошуємо тут

function fn2() {
  out_2.innerHTML = `${array2}`;
}

document.querySelector(".btn-2").onclick = fn2;

// Task 3
// Створіть масив array3, заповніть його будь-якими значеннями. Виведіть довжину масиву.
// Виводимо по натисканню кнопки .btn-3
// Виводимо в .output-3
const array3 = ["hello world", 20, true];
const out_3 = document.querySelector(".output-3");
// змінну оголошуємо тут

function fn3() {
  out_3.innerHTML = array3.length;
}

document.querySelector(".btn-3").onclick = fn3;

// Task 4
//  Створіть масив array4. Виведіть нульовий, третій, восьмий елемент масиву в .output-4 через пробіл.
const array4 = [2, 3, 1, 4, 5, 6, 8, 9, 55, , 22];
const out_4 = document.querySelector(".output-4");
// змінну оголошуємо тут

function fn4() {
  console.log(array4[0]);
  console.log(array4[2]);
  console.log(array4[7]);
  let res = `${array4[0]} + ${array4[2]} + ${array4[7]}`;
 out_4.innerHTML = res;
}

document.querySelector(".btn-4").onclick = fn4;

// Task 5
//  Створіть масив чисел array5 довжина якого більше 5. Виведіть суму нульового, другого та третього елементів масиву
const array5 = [2, 3, 1, 4, 5, 6, 8, 9, 55, 22];
const out_5 = document.querySelector(".output-5");

function fn5() {
  let res = array5[0] + array5[2] + array5[3];
out_5.innerHTML = res;
}

document.querySelector(".btn-5").onclick = fn5;

// Task 6
//  Створіть масив array6, який містить ваше ім'я, знак зодіаку, день народження та місяць народження. Виведіть масив на сторінку в div.output-6. Роздільник - пробіл.
const array6 = ['Kira','Aries', 4, 4];
const out_6 = document.querySelector(".output-6");

function fn6() {
  let string = '';
  // out_6.innerHTML = array6.join(' ');
for (let i = 0; i < array6.length; i += 1) {
  const element = array6[i];
  string += `${element} `;
  out_6.innerHTML = string;
}
}

document.querySelector(".btn-6").onclick = fn6;

// Task 7
// Додайте до масиву array7 значення 'vietnam' з індексом 7, 'turkey' з індексом 6, 'italy' з індексом 5. Додавання елементів зробіть у fn7. Виведіть масив на сторінку в .output-7. Роздільник - пробіл.

const array7 = ["china", "india", "brazil", "japan", "egypt"];
const out_7 = document.querySelector(".output-7");

function fn7() {
  array7[7] = 'vietnam';
  array7[6] = 'turkey';
  array7[5] = 'italy';
  console.log(array7);

  out_7.innerHTML = array7.join(' ');
}

document.querySelector(".btn-7").onclick = fn7;

// Task 8
// Додайте в масив array8 третій (індекс 3) елемент рівний 3.14, четвертий (індекс 4) елемент рівний 17, шостий елемент (індекс 6) рівний 5. Виведіть масив в .output-8. Розділювач – дефіс. У .output-8-1 виведіть довжину масиву array8.

const array8 = [];
const out_8 = document.querySelector(".output-8-1");

function fn8() {
  array8[3] = 3.14;
  array8[4] = 17;
  array8[6] = 5;

  out_8.innerHTML = array8.join('-').length;
}

document.querySelector(".btn-8").onclick = fn8;

// Task 9
// Виведіть останній елемент масиву array9. Виведення останнього елемента – реалізуйте із використанням індексу. Щоб розрахувати індекс останнього елемента – використовуйте довжину імасиву.

const array9 = [100, 200, 300, 400, 700, 121];
const out_9 = document.querySelector(".output-9");

function fn9() {
out_9.innerHTML = array9[array9.length-1];
}

document.querySelector(".btn-9").onclick = fn9;

// Task 10
// Виведіть суму першого (індекс 1) та останнього елементів масиву array10 у блок .output-10. Індекс останнього елемента масиву не вказуйте безпосередньо, а обчислюйте.

const array10 = [100, 200, 300, 400, 700, 121];
const out_10 = document.querySelector(".output-10");

function fn10() {
out_10.innerHTML = array10[0] + array10[array10.length-1];
}

document.querySelector(".btn-10").onclick = fn10;

// Task 11
// Напишіть функцію, яка змінює місцями другий (індекс 2) і четвертий (індекс 4) елементи масиву array11 і виводить його в .output-11. Роздільник - пробіл.

const array11 = [2, 3, 4, 5, 6, 7];
const out_11 = document.querySelector(".output-11");

function fn11() {
  array11[1] = array11[3];
  
out_11.innerHTML = array11.join(" ");
}

document.querySelector(".btn-11").onclick = fn11;

// Task 12
// Напишіть функцію fn12, яка змінює місцями нульовий та останній елемент масиву array12 і виводить його у .output-12. Роздільник - пробіл. Останній елемент вирахувати через довжину масиву.

const array12 = ["list", "test", "class", "west", "best"];
const out_12 = document.querySelector(".output-12");

function fn12() {
  array12[0] = array12[array12.length - 1];
  
out_12.innerHTML = array12.join(" ");
}

document.querySelector(".btn-12").onclick = fn12;

// Task 13 
// Виведіть масив array13 в .output-13 у форматі індекс пробіл значення пробіл.

const array13 = ["list", "test", "class", "west", "best"];


function fn13() {
  const output = document.querySelector(".output-13");
  let markup = "";

  for (let i = 0; i < array13.length; i += 1) {
    const element = array13[i];

    markup += `${i} ${element} `;
  }
   output.innerHTML = markup;
}


document.querySelector(".btn-13").onclick = fn13;

// Task 14
//  Використовуючи цикл, виведіть на сторінку масив array14 у зворотному порядку. Роздільник - пробіл.

const array14 = [1, 2, 3, "poly", 66];
const out_14 = document.querySelector(".output-14");

function fn14() {
  
  out_14.innerHTML = array14.reverse().join(" ");
}

document.querySelector(".btn-14").onclick = fn14;

// Task 15 ..((
// Використовуючи цикл, виведіть на сторінку елементи масиву array15, які більше нуля. Роздільник - пробіл.

const array15 = [8, 12, 2, 5, -4, 0, 6, 22, -9, 13, 78, -12];


function fn15() {
  const output = document.querySelector(".output-15");
  let markup = "";

  for (const item of array15) {
    if (item > 0) {
      markup += `${item} `;
    }
  }
    output.innerHTML = markup;
}

document.querySelector(".btn-15").onclick = fn15;

// Task 16
// Виконайте перебір масиву array16. Парні елементи додайте в масив array16_even, непарні в array16_odd. Протестуйте завдання на повторний запуск. Виведіть array16_odd у div.output-16-odd, а array16_even у div.output-16-even. Роздільник - пробіл.

const array16 = [8, 12, 2, 5, -4, 0, 6, 22, -9, 13, 78, -12];
const array16_odd = [];
const array16_even = [];

  
function fn16() {
 const outputEven = document.querySelector(".output-16-even");
  const outputOdd = document.querySelector(".output-16-odd");

  if (array16_odd.length !== 0 && array16_even.length !== 0) {
    return;
  }

  for (let i = 0; i < array16.length; i += 1) {
    const currentNumber = array16[i];

    if (currentNumber % 2 === 0) {
      array16_even.push(currentNumber);
    } else {
      array16_odd.push(currentNumber);
    }
  }

  outputEven.innerHTML = array16_even.join(" ");
  outputOdd.innerHTML = array16_odd.join(" ");
  }


document.querySelector(".btn-16").onclick = fn16;

// Task 17
// Використовуючи цикл, виведіть в .output-17 кількість елементів array17, значення яких більше 3. Для розрахунку використовуйте цикл і змінну лічильник.

const array17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
const out_17 = document.querySelector(".output-17");

function fn17() {
 let count = 0;

  for (const currentNumber of array17) {
    if (currentNumber > 3) {
      count += 1;
    }
  }
  out_17.innerHTML = count;
}

document.querySelector(".btn-17").onclick = fn17;

// Task 18
// Використовуючи цикл, виведіть в .output-18 значення найбільшого числа масиву array18.

const array18 = [15, 24, 13, 78, 21, 4, 45, 67];
const out_18 = document.querySelector(".output-18");

function fn18() {
  let a = array18[0];
  for (let index = 0; index < array18.length; index += 1) {
    const element = array18[index];
    if (a < element) {
      a = element
    }
  }
  out_18.innerHTML = a;
}

document.querySelector(".btn-18").onclick = fn18;

// Task 19
// Виведіть у .output-19 індекс мінімального числа в масиві array19

const array19 = [15, 424, 313, 78, 241, 4, 45, 67];
const out_19 = document.querySelector(".output-19");

function fn19() {

  let markup = "";
  let a = array19[0];

  for (let i = 0; i < array19.length; i += 1) {
    const element = array19[i];
    if (a > element)
    markup += `${i} `;
  }
   out_19.innerHTML = markup;
}

document.querySelector(".btn-19").onclick = fn19;

// Task 20
// Виведіть у .output-20 суму елементів у масиві array20.

const array20 = [4, 5, 6, 7, 8, 9, 10];
const out_20 = document.querySelector(".output-20");

function fn20() {
  let total = 0; 
  for (const item of array20) {
    total += item;
  }
  out_20.innerHTML = total;
}

document.querySelector(".btn-20").onclick = fn20;
