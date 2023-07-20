// Task 1
//  Створіть масив array1, що містить рядки, числа, булеві значення. Виведіть його в .output-1. Виводимо по натисканню кнопки .btn-1.
// змінну оголошуємо тут
const array1 = ["a","cd",3,4,5,true,false]; // ініціалізація літерала масива
const out_1 = document.querySelector(".output-1");

function fn1() {
  out_1.innerHTML = array1; // будемо виводити таким способом
}

document.querySelector(".btn-1").onclick = fn1;

// Task 2
// Створіть масив array2, який містить рядки, числа, булеві значення. Виведіть його в div.output-2. Використовуйте шаблонний рядок для виведення з коду JS. Виводимо по натисканню кнопки .btn-2.

// змінну оголошуємо тут
const array2 = ["a","cd",3,4,5,true,false]; // ініціалізація літерала масива
const out_2 = document.querySelector(".output-2");
let rezult2 = '';

function fn2() {
  array2.forEach(element => rezult2 += `${element} `);
  out_2.innerHTML = rezult2;
}
  
document.querySelector(".btn-2").onclick = fn2;

// Task 3
// Створіть масив array3, заповніть його будь-якими значеннями. Виведіть довжину масиву.
// Виводимо по натисканню кнопки .btn-3
// Виводимо в .output-3

// змінну оголошуємо тут
const array3 = ["a", "cd", 3, 4, 5, true, false];
const out_3 = document.querySelector(".output-3");

function fn3() {
  out_3.innerHTML = array3.length;
}

document.querySelector(".btn-3").onclick = fn3;

// Task 4
//  Створіть масив array4. Виведіть нульовий, третій, восьмий елемент масиву в .output-4 через пробіл.

// змінну оголошуємо тут
const array4 = ["a", "cd", 3, 4, 5, true, false, 9, 10, 20];
const array4sort = [0, 3, 8];
const out_4 = document.querySelector(".output-4");


function fn4() {
  const rezult4 = array4sort.reduce((acum4, item) => acum4 += `${array4[item]} `, '');
  out_4.innerHTML = rezult4;
}

document.querySelector(".btn-4").onclick = fn4;

// Task 5
//  Створіть масив чисел array5 довжина якого більше 5. Виведіть суму нульового, другого та третього елементів масиву
const array5 = [7, 14, 3, 4, 5, 101, 103, 9, 10, 20];
const arrayNeed5 = [0, 2, 3];
const out_5 = document.querySelector(".output-5");
function fn5() {
  const rezult5 = arrayNeed5.reduce((acum5, item) => acum5 += array5[item], 0);
  out_5.innerHTML = rezult5;
}

document.querySelector(".btn-5").onclick = fn5;

// Task 6
//  Створіть масив array6, який містить ваше ім'я, знак зодіаку, день народження та місяць народження. Виведіть масив на сторінку в div.output-6. Роздільник - пробіл.
const array6 = ['Oleg', 'lion', 8, 14];
const out_6 = document.querySelector(".output-6");

function fn6() {
  const rezult6 = array6.join(" ");
  out_6.innerHTML = rezult6;
}

document.querySelector(".btn-6").onclick = fn6;

// Task 7
// Додайте до масиву array7 значення 'vietnam' з індексом 7, 'turkey' з індексом 6, 'italy' з індексом 5. Додавання елементів зробіть у fn7. Виведіть масив на сторінку в .output-7. Роздільник - пробіл.

const array7 = ["china", "india", "brazil", "japan", "egypt"];
const arrayExtend7 = ['italy', 'turkey', 'vietnam'];
const out_7 = document.querySelector(".output-7");

function fn7() {
  const rezult7 = array7.concat(arrayExtend7).join(" ");
  out_7.innerHTML = rezult7;
}

document.querySelector(".btn-7").onclick = fn7;

// Task 8
// Додайте в масив array8 третій (індекс 3) елемент рівний 3.14, четвертий (індекс 4) елемент рівний 17, шостий елемент (індекс 6) рівний 5. Виведіть масив в .output-8. Розділювач – дефіс. У .output-8-1 виведіть довжину масиву array8.

const array8 = [];
const out_8 = document.querySelector(".output-8");
const out_81 = document.querySelector(".output-8-1");

function fn8() {
  array8[3] = 3.14;
  array8[4] = 17;
  array8[6] = 5;
  out_8.innerHTML = array8.join('-');
  out_81.innerHTML = array8.length;
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
  out_10.innerHTML = array10[1] + array10[array10.length - 1];
}

document.querySelector(".btn-10").onclick = fn10;

// Task 11
// Напишіть функцію, яка змінює місцями другий (індекс 2) і четвертий (індекс 4) елементи масиву array11 і виводить його в .output-11. Роздільник - пробіл.
function swap(array, item1, item2) {
  const rezerv = array[item1];
  array[item1] = array[item2];
  array[item2] = rezerv;
}

const array11 = [2, 3, 4, 5, 6, 7];
const out_11 = document.querySelector(".output-11")

function fn11() {
  swap(array11, 2, 4);
  out_11.innerHTML = array11.join(' ');
}

document.querySelector(".btn-11").onclick = fn11;

// Task 12
// Напишіть функцію fn12, яка змінює місцями нульовий та останній елемент масиву array12 і виводить його у .output-12. Роздільник - пробіл. Останній елемент вирахувати через довжину масиву.

const array12 = ["list", "test", "class", "west", "best"];
const out_12 = document.querySelector(".output-12");
function fn12() {
  swap(array12, 0, array12.length - 1);
  out_12.innerHTML = array12.join(" ");
}

document.querySelector(".btn-12").onclick = fn12;

// Task 13
// Виведіть масив array13 в .output-13 у форматі індекс пробіл значення пробіл.

const array13 = ["list", "test", "class", "west", "best"];
const out_13 = document.querySelector(".output-13");

function fn13() {
  const rezult13 = array13.reduce((akum, elem, idx) => akum += `${idx} ${elem} `, '');
  out_13.innerHTML = rezult13;
}

document.querySelector(".btn-13").onclick = fn13;

// Task 14
//  Використовуючи цикл, виведіть на сторінку масив array14 у зворотному порядку. Роздільник - пробіл.

const array14 = [1, 2, 3, "poly", 66];
const out_14 = document.querySelector(".output-14");

function fn14() {
  let rezult14 = '';
  for (let i = array14.length - 1; i >= 0; i -= 1){
    rezult14 += array14[i] + ' ';
  }
  out_14.innerHTML = rezult14;
}

document.querySelector(".btn-14").onclick = fn14;

// Task 15
// Використовуючи цикл, виведіть на сторінку елементи масиву array15, які більше нуля. Роздільник - пробіл.

const array15 = [8, 12, 2, 5, -4, 0, 6, 22, -9, 13, 78, -12];
const out_15 = document.querySelector(".output-15");

function fn15() {
  let rezult15 = '';
  for (item of array15) {
    if (item > 0) rezult15 += item + ' ';
  }
 out_15.innerHTML = rezult15; 
}

document.querySelector(".btn-15").onclick = fn15;

// Task 16
// Виконайте перебір масиву array16. Парні елементи додайте в масив array16_even, непарні в array16_odd. Протестуйте завдання на повторний запуск. Виведіть array16_odd у div.output-16-odd, а array16_even у div.output-16-even. Роздільник - пробіл.

const array16 = [8, 12, 2, 5, -4, 0, 6, 22, -9, 13, 78, -12];
const array16_odd = [];
const array16_even = [];
const out_16odd = document.querySelector(".output-16-odd");
const out_16even = document.querySelector(".output-16-even");

function fn16() {
  for (elem of array16) {
    if (elem % 2 === 0) {
      array16_even.push(elem);
    } else {
      array16_odd.push(elem);
    }
  }
  out_16odd.innerHTML = array16_odd.join(' ');
  out_16even.innerHTML = array16_even.join(' ');
}

document.querySelector(".btn-16").onclick = fn16;

// Task 17
// Використовуючи цикл, виведіть в .output-17 кількість елементів array17, значення яких більше 3. Для розрахунку використовуйте цикл і змінну лічильник.

const array17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
const out_17 = document.querySelector(".output-17");

function fn17() {
  let rezult17 = 0;
  for (item of array17) {
    rezult17 += item > 3 ? 1 : 0; 
  }
   out_17.innerHTML = rezult17; 
}

document.querySelector(".btn-17").onclick = fn17;

// Task 18
// Використовуючи цикл, виведіть в .output-18 значення найбільшого числа масиву array18.

const array18 = [15, 24, 13, 78, 21, 4, 45, 67];
const out_18 = document.querySelector(".output-18")

function fn18() {
  let rezult18 = array18[0];
  for (elem of array18) {
    if (elem > rezult18) rezult18 = elem;
  }
  out_18.innerHTML = rezult18;
}

document.querySelector(".btn-18").onclick = fn18;

// Task 19
// Виведіть у .output-19 індекс мінімального числа в масиві array19

const array19 = [15, 424, 313, 78, 241, 4, 45, 67];
const out_19 = document.querySelector(".output-19");

function fn19() {
  let min19 = array19[0];
  for (const item of array19) {
    if (item < min19) min19 = item;
  }
  const rezult19 = array19.indexOf(min19);
  out_19.innerHTML = rezult19;
}

document.querySelector(".btn-19").onclick = fn19;

// Task 20
// Виведіть у .output-20 суму елементів у масиві array20.

const array20 = [4, 5, 6, 7, 8, 9, 10];
const out_20 = document.querySelector(".output-20");

function fn20() {
  const summa20 = array20.reduce((akum, elem) => akum += elem, 0);
  out_20.innerHTML = summa20;
}

document.querySelector(".btn-20").onclick = fn20;
