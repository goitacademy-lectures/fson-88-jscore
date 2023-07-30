//TODO:==============================================
/*
Завдання 1
При натисканні на кнопку "Show me" в консоль має виводити значення
з поля введення (дивіться на елементи в html-розмітці)
*/
const elemt = {
  btn: document.querySelector("#alertButton"),
  input: document.querySelector("#alertInput"),
};
function handlerBtnClick(evt) {
  console.log(elemt.input.value);
}
elemt.btn.addEventListener("click", handlerBtnClick);

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "Swap me" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const elemt_2 = {
  btn: document.querySelector("#swapButton"),
  inputLeft: document.querySelector("#leftSwapInput"),
  inputRight: document.querySelector("#rightSwapInput"),
};

function handlerChangeValue(evt) {
  const tempValue = elemt_2.inputLeft.value;
  elemt_2.inputLeft.value = elemt_2.inputRight.value;
  elemt_2.inputRight.value = tempValue;
}

elemt_2.btn.addEventListener("click", handlerChangeValue);

//TODO:==============================================
/*
Завдання 3
Кнопка "Hide" ховає текст і замінює назву кнопки на
"Show", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const elements_3 = {
  btn: document.querySelector("#passwordButton"),
  input: document.querySelector("#passwordInput"),
};
function handlerToggle(evt) {
  const btnText = evt.currentTarget.textContent;

  if (btnText === "Hide") {
    evt.currentTarget.textContent = "Show";
    elements_3.input.setAttribute("type", "password");
  } else {
    evt.currentTarget.textContent = "Hide";
    elements_3.input.setAttribute("type", "text");
  }
  // Variant 2
  //   const isHide = evt.currentTarget.textContent;
  //   evt.currentTarget.textContent = isHide === "Hide" ? "Show" : "Hide";
}

elements_3.btn.addEventListener("click", handlerToggle);

//TODO:==============================================
/*
Завдання 4
Кнопка "Decrease" робить квадрат менше на 10 пікселів, кнопка "Increase" - більше на 10 пікселів. Використай інструкцію switch
*/
const elements_4 = {
  btnDecrease: document.querySelector("#decrease"),
  btnIncrease: document.querySelector("#increase"),
};

const squareEl = document.createElement("div");
squareEl.setAttribute("id", "box");
squareEl.style.width = squareEl.style.height = "100px";
squareEl.style.background = "orange";
elements_4.btnIncrease.after(squareEl);

elements_4.btnDecrease.addEventListener("click", handlerSquareSize);
elements_4.btnIncrease.addEventListener("click", handlerSquareSize);

function handlerSquareSize(evt) {
  const idValue = evt.currentTarget.id;

  console.log(evt.currentTarget.dataset.action);

  switch (idValue) {
    case "increase":
      squareEl.style.width = squareEl.clientWidth + 10 + "px";
      squareEl.style.height = squareEl.clientHeight + 10 + "px";
      break;
    case "decrease":
      squareEl.style.width = squareEl.clientWidth - 10 + "px";
      squareEl.style.height = squareEl.clientHeight - 10 + "px";
      break;
  }
}

//TODO:==============================================
/*
Завдання 5
Додайде слухач кліку до сторінки і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
В консоль виводь наступну повідомлення:
1. 'Клік відбувся всередині елемента з id "place".'
2. "Клік відбувся поза зоною елемента js."
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

const placeElement = document.querySelector("#place");
placeElement.classList.add("placeDiv");
placeElement.style.width = "150px";
placeElement.style.height = "150px";
placeElement.style.backgroundColor = "tomato";

function handlerClickTarget(evt) {
  if (placeElement.contains(evt.target)) {
    console.log('Клік відбувся всередині елемента з id "place".');
  } else {
    console.log('Клік відбувся поза зоною елемента з id "place".');
  }
}
document.addEventListener("click", handlerClickTarget);

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Double", збільшити значення
у кожному елементі списку у 2 рази
*/

const sixTask = {
  list: document.querySelector(".list"),
  listItems: document.querySelectorAll(".listItem"),
  btn: document.querySelector("#double"),
};

function handlerDoubleSize() {
  sixTask.listItems.forEach((item) => {
    const computedStyle = window.getComputedStyle(item);
    const currentFontSize = parseFloat(computedStyle.fontSize);
    const newFontSize = currentFontSize * 2;
    item.style.fontSize = newFontSize + "px";
  });
}

sixTask.btn.addEventListener("click", handlerDoubleSize);
/*
Завдання 7
При кліку на коло воно повинно слідувати за курсором.
При повторному подвійному кліку воно стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Show result" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

//TODO:==============================================
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

//TODO:==============================================
/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/

//TODO:==============================================
/*
Завдання 11
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/

//TODO:==============================================
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення на
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

//TODO:==============================================
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

//TODO:==============================================
/*
Завдання 14
Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
Додати класи на список eventList, на елементи eventCode та eventKey
*/

//TODO:==============================================
/*
Завдання 15
Створіть HTML сторінку з табличкою,
яка містить список продуктів.Кожен рядок у
табличці повинен містити назву продукту та його ціну.
При натисканні на будь-який рядок у табличці відобразіть
повідомлення з назвою продукту та його ціною.
*/

//TODO:==============================================
/*
Завдання 16
 Створіть HTML сторінку з формою,
 яка містить поле введення для введення
 імені користувача та кнопку. При натисканні
 на кнопку відобразіть повідомлення з привітанням з іменем користувача.
*/
