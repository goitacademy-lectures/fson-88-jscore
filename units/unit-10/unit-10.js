// Task 1 ============================================
/* Даний інпут .i-1. Напишіть функцію t1, яка виводить у .out-1 символ і повертає його. У всіх наступних завданнях – працюємо з латиницею та цифрами. */

function t1(event) {
  const output = document.querySelector(".out-1");

  console.log(event);

  output.textContent = event.key;
}

document.querySelector(".i-1").onkeydown = t1;

// Task 2 ============================================
/* Даний інпут .i-2. Напишіть функцію t2, яка за подією onkeypress виводить в out-2 числовий код символу (event.keyCode). */

function t2(event) {
  const output = document.querySelector(".out-2");

  console.log(event);
  console.log(event.keyCode);

  output.textContent = event.keyCode;
}

document.querySelector(".i-2").onkeypress = t2;

// Task 3 ============================================
/* Даний інпут .i-3. Напишіть функцію t3, яка виводить на сторінку true якщо введено символ і false якщо цифра. Для визначення – використовуйте keyCode. */

function t3(event) {
  console.log(event);
  const output = document.querySelector(".out-3");
  const result = event.keyCode >= 48 && event.keyCode <= 57 ? false : true;

  output.textContent = result;
}

document.querySelector(".i-3").onkeypress = t3;

// Task 4 ============================================
/*  Даний інпут .i-4. Напишіть функцію t4, яка виводить у .out-4 лише символи у нижньому регістрі. Тобто, ввели ab4Bci у .out-4 отримуємо ab4ci. */

function t4(event) {
  console.log(event.keyCode);
  console.log(event.keyCode);
  const output = document.querySelector(".out-4");
  const normalizeValue = event.target.value.toLowerCase();

  output.textContent = normalizeValue;
}

document.querySelector(".i-4").onkeypress = t4;

// Task 5 ============================================
/*  Даний інпут .i-5. Напишіть функцію t5, яка виводить у .out-5 всі символи у верхньому регістрі. Тобто. Користувач ввів AbCd і функція виведе ABCD. */

function t5(event) {
  const output = document.querySelector(".out-5");
  const normalizeValue = event.target.value.toUpperCase();

  output.textContent = normalizeValue;
}

document.querySelector(".i-5").onkeydown = t5;

// Task 6 ============================================
/*  Даний інпут .i-6. Напишіть функцію t6, яка дозволяє вводити до i-6 лише символи в нижньому регістрі. Тобто, ми до функції створюємо рядок. Усередині функції перевіряємо код символу.
Якщо символ – у нижньому регістрі – додаємо у рядок. Потім примусово привласнюємо рядок у value input i-6. Щоб блокувати стандартну роботу input в кінці функції пишемо return false;  */
let resultValue = "";

function t6() {
  const { key, keyCode, shiftKey } = event;

  if (keyCode < 97 || shiftKey) {
    return false;
  }

  resultValue += key;

  event.target.value = resultValue;
  return false;
}

document.querySelector(".i-6").onkeypress = t6;

// Task 7 ============================================
/*  Даний інпут .i-7. Напишіть функцію t7, яка виводить у .out-7 випадковий символ з масиву a7 при кожному введенні символу. */

const a7 = ["a", "z", "x", "w", "y", "t"];

function t7() {
  const output = document.querySelector(".out-7");
  const randomIndex = Math.ceil(Math.random() * (a7.length - 1));

  output.textContent = a7[randomIndex];
}

document.querySelector(".i-7").onkeydown = t7;

// Task 8 ============================================
/*  Даний інпут .i-8. Напишіть функцію t8, яка дописує в .out-8 текст, що вводиться в input, але замінює i на 1, o на 0, l на 7. */

const a8 = {
  i: 1,
  o: 0,
  l: 7,
};

function t8(event) {
  const output = document.querySelector(".out-8");
  // 1. Отримуємо з обʼєкта event введений символ
  const keyboardButton = event.key;
  // 2. Перевіряємо наявність такого ключа в a8
  const isInObj = a8.hasOwnProperty(keyboardButton);
  // 3. Якщо ключ є есть додаємо в .out-8 символ з масиву a8. Якщо немає - виводимо поточний символ.
  output.textContent += isInObj ? a8[keyboardButton] : keyboardButton;
}

document.querySelector(".i-8").onkeydown = t8;

// Task 9 ============================================
/* Даний інпут .i-9. Напишіть функцію t9, яка виводить у .out-9 кількість (число) натиснутих клавіш "стрілка вниз". */
let counter = 0;
function t9(event) {
  console.log(event);
  const output = document.querySelector(".out-9");

  if (event.key !== "ArrowDown") return;

  output.textContent = counter += 1;
}

document.querySelector(".i-9").onkeydown = t9;

// Task 10 ============================================
/*  Даний інпут .i-10 та блок .block-10. Додайте подію на input, при натисканні клавіш стрілка вправо і стрілка вліво збільшується ширина блоку. Клавіші стрілка вгору і стрілка вниз – збільшується висота блоку. Одинк натискання клавіші - 1px. */

let w = 75;
let h = 75;

function t10(event) {
  console.log(event);
  const blockEl = document.querySelector(".block-10");
  // збільшуємо  w, h, потім присвоюємо як властивості елемента
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    blockEl.style.height = `${h++}px`;
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    blockEl.style.width = `${w++}px`;
  }
}

document.querySelector(".i-10").onkeydown = t10;

// Task 11 ============================================
/*  Проект.
1. Вивчіть верстку клавіатури.
2. При введенні символу в .i-11 (латиниця, нижній регістр) - клавіші з таким символом додайте клас .active. У клавіші фон має стати помаранчевим. Перед пошуком та присвоєнням active, за допомогою циклу видаліть клас active у всіх клавіш із класом keyboard.
3. Якщо все зроблено правильно, то при введенні наступного символу попередня клавіша втратить помаранчевий фон, а нова клавіша отримає його.
4. Додайте всі цифри та другий ряд клавіш від a до l
5. Додайте клавіші alt, enter.
*/

const keyboardBtns = [...document.querySelectorAll("[data]")];

function t11(event) {
  console.log(event.key);
  const prevActiveBtn = document.querySelector(".keyboard.active");

  if (prevActiveBtn) {
    prevActiveBtn.classList.remove("active");
  }

  for (const keyboardBtn of keyboardBtns) {
    const btnData = keyboardBtn.getAttribute("data");
    const btnKey = keyboardHandler(btnData);

    if (btnKey === event.key) {
      keyboardBtn.classList.add("active");
      return;
    }
  }
}

function keyboardHandler(pressedBtnData) {
  let key = pressedBtnData;

  switch (pressedBtnData) {
    case "space":
      key = " ";
      break;
    case "ctrl":
      key = "Control";
      break;
  }

  return key;
}

document.querySelector(".i-11").onkeydown = t11;
