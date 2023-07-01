const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let arr = [];
for (const product of products)
  if (propName === "name") {
  arr.push(product.name)
  };
return arr;
  for (const product of products)
   if (propName === 'price') {
  arr.push(product.price)
  };
return arr;
  for (const product of products)
   if (propName === 'quantity') {
  arr.push(product.quantity)
  };
return arr;
    return [];
    
    
  // Change code above this line
}
// Task 1.
// Виведіть у консоль ваше ім'я. Нагадування – під час роботи, консоль відкрита завжди!
// console.log();

// Change code above this line

// Task 2.
//  Виведіть у консоль номер місяця, в якому Ви народилися. Вивчіть чим відрізняється виведення числа та рядка.

// Task 3.
// Виведіть у консоль рядок: 'Ласкаво '+'запрошуємо '+' на курс'

// Task 4.
//  За допомогою метода alert() виведіть число 2023. Після спрацювання коду - закоментуйте його, щоб не заважав подальшій розробці

// Task 5.
// За допомогою console.log() виведіть результат операції 2023 – 200. Перевірте результат у консолі.

// Task 6.
// На сторінці створено div#six. За допомогою document.getElementById запишіть в div#six текст 'Hello World'.

// Task 7.
// На сторінці створено div#seven. За допомогою document.getElementById запишіть в даний елемент результат множення 12 на 12. Множення можна зробити за допомогою знака зірочки (shift + 8).

// Task 8.
// На сторінці створено div.output-8. За допомогою document.querySelector() запишіть текст 'task-8'.

// Task 9.
// На сторінці створена розмітка:
// <h2>Hello <span class="output-8">everyone</span></h2>
// Замініть за допомогою querySelector() текст всередині span на 'world'
// Тобто, результат має виглядати так: <h2>Hello <span class="output-8">world</span></h2>

// Task 10.
// На сторінці створено div.output-10. За допомогою innerHTML запишіть всередину наступний рядок '<h2>Hi</h2>'.

// Task 11.
// На сторінці створено div.output-11. Запишіть всередину рядок '123'. Для запису використовуйте innerHTML. Другою операцією – допишіть у div.output-11 рядок '456'. Для додавання запису застосовуйте +=.

// Task 12.
//  На сторінці створено div.output-12. Отримайте його у змінну a. За допомогою innerHTML запишіть змінну всередину a число 3.1415. Вивчіть як у JS пишуться дробні числа - через крапку чи через кому

// Task 13.
// На сторінці створено div.output-13. Отримайте його у змінну output13. За допомогою innerHTML запишіть рядок: '<img src="https://media.giphy.com/media/7AyIKaV7uEeIw/giphy.gif" alt="Hello from mr.Bin" />'
//  Зверніть увагу. Вам доведеться вставити рядок, який вже містить лапки. Головне щоб лапки чергувалися.  Тому при вставці оберніть цей рядок одинарними лапками. Якщо все зроблено правильно - на сторінці з'явиться картинка.

// Task 14.
//  Створіть дві змінні num1 = 6, num2 = 3. У div.output-14 виведіть результат множення num1 на num2.

// Task 15.
// Створіть дві змінні y1 = 6, y2 = 3. У div.output-15 виведіть результат поділу y1 на y2.

// Task 16.
//  Створіть дві змінні x1 = Hello, x2 = 5. У div.output-16 виведіть суму x1 + x2. Вивчіть результат операції.

// Task 17.
// Отримайте div.output-17 у змінну output17. Виведіть цю змінну в консоль. Вивчіть результат виводу.

// Task 18.
// Отримайте div.output-18 у змінну output18. Виведіть цю змінну в консоль. Призначте output18 значення 5 (output18 = 5). Виведіть змінну в консоль. Вивчіть результат виводу.

// Task 19.
// Отримайте div.output-19 у змінну output19. Виведіть у консоль output19.  Тепер отримайте у цю ж змінну output19 блок div з класом output-19-test. Виведіть змінну output19 у консоль. Вивчіть, що змінилося.

// Task 20
// Отримайте div.output-20 у змінну output20. За допомогою textContent запишіть у нього рядок '<h2>Hi</h2>'. Вивчіть результат. Подивіться, як цей результат виводу відрізняється від виводу в Task-10.
