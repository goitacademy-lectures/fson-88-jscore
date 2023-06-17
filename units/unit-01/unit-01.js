// Task 1.
// Виведіть у консоль ваше ім'я. Нагадування – під час роботи, консоль відкрита завжди!
console.log('Oleg');

// Task 2.
//  Виведіть у консоль номер місяця, в якому Ви народилися. Вивчіть чим відрізняється виведення числа та рядка.
console.log(8);

// Task 3.
// Виведіть у консоль рядок: 'Ласкаво '+'запрошуємо '+' на курс'
console.log('Ласкаво ' + 'запрошуємо ' + ' на курс');

// Task 4.
//  За допомогою метода alert() виведіть число 2023. Після спрацювання коду - закоментуйте його, щоб не заважав подальшій розробці
// alert(2023);

// Task 5.
// За допомогою console.log() виведіть результат операції 2023 – 200. Перевірте результат у консолі.
console.log(2023 - 200);

// Task 6.
// На сторінці створено div#six. За допомогою document.getElementById запишіть в div#six текст 'Hello World'.
// console.log(document.getElementById('six'));
document.getElementById('six').innerHTML = 'Hello World';


// Task 7.
// На сторінці створено div#seven. За допомогою document.getElementById запишіть в даний елемент результат множення 12 на 12. Множення можна зробити за допомогою знака зірочки (shift + 8).
document.getElementById('seven').innerHTML = 12*12; 

// Task 8.
// На сторінці створено div.output-8. За допомогою document.querySelector() запишіть текст 'task-8'.

document.querySelector('.output-8').innerHTML = "'task-8'";

// Task 9.
// На сторінці створена верстка:
// <h2>Hello <span class="out-8">everyone</span></h2>
// Замініть за допомогою querySelector() текст всередині span на 'world'
// Тобто, результат має виглядати так: <h2>Hello <span class="out-8">world</span></h2>
document.querySelector("h2 > .output-8").innerHTML = 'world';

// Task 10.
// На сторінці створено div.output-10. За допомогою innerHTML запишіть всередину наступний рядок '<h2>Hi</h2>'.

document.querySelector('.output-10').innerHTML = '<h2>Hi</h2>';
// Task 11.
// На сторінці створено div.output-11. Запишіть всередину рядок '123'. Для запису використовуйте innerHTML. Другою операцією – допишіть у div.output-11 рядок '456'. Для додавання запису застосовуйте +=.
document.querySelector('.output-11').innerHTML = '123';
document.querySelector('.output-11').innerHTML += '456';
// Task 12.
//  На сторінці створено div.output-12. Отримайте його у змінну a. За допомогою innerHTML запишіть змінну всередину a число 3.1415. Вивчіть як у JS пишуться дробні числа - через крапку чи через кому
let a;
a = document.querySelector('.output-12').innerHTML;
a = 3.1415;
document.querySelector('.output-12').innerHTML = a;

// Task 13.
// На сторінці створено div.output-13. Отримайте його у змінну output13. За допомогою innerHTML запишіть рядок: '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">'
//  Зверніть увагу. Вам доведеться вставити рядок, який вже містить лапки. Головне щоб лапки чергувалися.  Тому при вставці оберніть цей рядок одинарними лапками. Якщо все зроблено правильно - на сторінці з'явиться картинка.

let output13;
output13 = document.querySelector(".output-13").innerHTML;
console.log(output13);
document.querySelector(".output-13").innerHTML = '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">';

// Task 14.
//  Створіть дві змінні num1 = 6, num2 = 3. У div.output-14 виведіть результат множення num1 на num2.
const num1 = 6;
const num2 = 3;
document.querySelector(".output-14").innerHTML = num1 * num2;

// Task 15.
// Створіть дві змінні y1 = 6, y2 = 3. У div.output-15 виведіть результат поділу y1 на y2.
const y1 = 6;
const y2 = 3;
document.querySelector(".output-15").innerHTML = y1 / y2;

// Task 16.
//  Створіть дві змінні x1 = Hello, x2 = 5. У div.output-16 виведіть суму x1 + x2. Вивчіть результат операції.
const x1 = 'Helo';
const x2 = 5;
document.querySelector(".output-16").innerHTML = x1 + x2;

// Task 17.
// Отримайте div.output-17 у змінну output17. Виведіть цю змінну в консоль. Вивчіть результат виводу.
const output17 = document.querySelector(".output-17").innerHTML;
console.log(`Variable output17 = "${output17}" , type is ${typeof output17}`);

// Task 18.
// Отримайте div.output-18 у змінну output18. Виведіть цю змінну в консоль. Призначте output18 значення 5 (output18 = 5). Виведіть змінну в консоль. Вивчіть результат виводу.
let output18 = document.querySelector(".output-18").innerHTML;
console.log(output18);
output18 = 5;
console.log(output18);

// Task 19.
// Отримайте div.output-19 у змінну output19. Виведіть у консоль output19.  Тепер отримайте у цю ж змінну output19 блок div з класом output-19-test. Виведіть змінну output19 у консоль. Вивчіть, що змінилося.
let output19 = document.querySelector(".output-19").innerHTML;
console.log(output19);
output19 = document.querySelector(".output-19-test").innerHTML;
console.log(output19);

// Task 20
// Отримайте div.output-20 у змінну output20. За допомогою textContent запишіть у нього рядок '<h2>Hi</h2>'. Вивчіть результат. Подивіться, як цей результат виводу відрізняється від виводу в Task-10.

let output20 = document.querySelector(".output-20").innerHTML;
output20 = '<h2>Hi</h2>';
document.querySelector(".output-20").innerHTML = output20;

