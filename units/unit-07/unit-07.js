/**
  |============================
  | Завдання 1
  |============================
*/
// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача через prompt
// та викликає callback-функцію greet(name)
// greet(name) - callback-функція, що приймає ім'я і виводить в консоль
// рядок "Привіт <name>"
// Реалізуте перевірку, що у prompt() введено значення, в інакшому випадку
// виведіть в консоль повідомлення "Ви не ввели імʼя"
//++++++++++++++++++ Рішення ++++++++++++++++++

function letMeSeeYourName(callback) {
  const name = prompt("What is your name?");
  if (!name) {
    return "Ви не ввели імʼя";
  }

  return callback(name);
}
const greet = (name) => `Привіт ${name}`;
console.log(letMeSeeYourName(greet));
/**
  |============================
  | Завдання 2
  |============================
*/
// Напишіть дві функції:
// 1. makeProduct(name, price, callback), яка приймає
// ім'я, ціну товару, а також callback-функцію.
// Функція makeProduct() створює об'єкт товару <product>, додаючи йому унікальний
// ідентифікатор, ключ з імʼям <id> (для цього використайте виклик new Date().getTime())
// і викликає callback-функцію, передаючи їй створений об'єкт
// 2. showProduct(product) - коллбек, який приймає об'єкт
// продукту і виводить інформацію у консоль
//++++++++++++++++++ Рішення ++++++++++++++++++

function makeProduct(name, price, callback) {
  // Створюємо обʼєкт з властивостями з параметрів
  const product = {
    id: new Date().getTime(),
    name,
    price,
  };

  return callback(product); // викликаємо callback-функцію і повертаємо результат виклику
}
const showProduct = (product) => console.table(product); // створюємо callback-функцію

makeProduct("Fish", 350, showProduct);
/**
  |============================
  | Завдання 3
  |============================
*/
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа під час її виклику
//++++++++++++++++++ Рішення ++++++++++++++++++

const makeShef = function (name) {
  // Параметр <name> це локальна змінна для функції makeShef().
  // wе означає, що вона буде доступна функції makeDish() через замикання.
  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
};

const mango = makeShef("Mango");
mango("apple pie"); // Mango is cooking apple pie
mango("beef stew"); // Mango is cooking beef stew

const poly = makeShef("Poly");
poly("pancakes"); // Poly is cooking pancakes
poly("eggs and bacon"); // Poly is cooking eggs and bacon

/**
  |============================
  | Завдання 4
  |============================
*/
// Напишіть функцію each(array, callback)
// Функція першим параметром приймає масив довільних чисел,
// а другим - callback-функцію, яка застосовується до кожного елементу масиву.
// Функція each() повинна повернути новий масив, елементами
// якого будуть результати виклику callback-функції
// callback-функція повинна множити елементи на 2
// Реалізуйте callback-функцію двома способами:
//  - за допомогою function declaration
//  - за допомогою arrow function
//++++++++++++++++++ Рішення function declaration ++++++++++++++++++
const arr = [3, 5, 6, 34, 8, 83, 12, 34];

function each(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArray.push(callback(arr[i]));
  }
  return newArray;
}

function multiply(value) {
  return value * 2;
}

console.log(each(arr, multiply));
console.log(each(arr, (value) => value * 2)); // рішення через стрілочну анонімну функцію
//++++++++++++++++++ Рішення arrow function ++++++++++++++++++

/**
  |============================
  | Завдання 5
  |============================
*/
// Напишіть функцію makeCounter(), яка повертає іншу функцію,
// яка підраховує та логує кількість своїх викликів
// Реалізуйте внутрішню функцію двома способами:
//  - за допомогою function declaration
//  - за допомогою arrow function
//++++++++++++++++++ Рішення function declaration ++++++++++++++++++
function makeCounter() {
  let counter = 0;

  // Функція запаʼятовує лексичне оточення
  // тому в середині функції доступна змінна counter
  return function changeCounter() {
    return (counter += 1);
  };
}

const counterOne = makeCounter();
const counterTwo = makeCounter();
console.log(counterOne());
console.log(counterOne());
console.log(counterTwo());
//++++++++++++++++++ Рішення arrow function ++++++++++++++++++
// function makeCounter() {
//   let counter = 0;

//   return () => (counter += 1);
// }
/**
  |============================
  | Завдання 6
  |============================
*/
// Напишіть функцію savePassword(password), яка приймає значення паролю,
// який потрібно зберегти і повертає внутрішню функцію checkPassword(),
// що приймає рядок з паролем на перевірку і повертає відповідь у вигляді рядка
// "Збережений пароль: qwerty збігається з введеним паролем qwerty",
// якщо рядок збігається зі збереженим паролем або якщо не збігається
// "Збережений пароль: qwerty не збігається з введеним паролем asdfgh",
//++++++++++++++++++ Рішення ++++++++++++++++++

function savePassword(password) {
  return function checkPassword(verificationPassword) {
    return password === verificationPassword
      ? `Збережений пароль ${password} збігається з введеним паролем ${verificationPassword}`
      : `Збережений пароль ${password} не збігається з введеним паролем ${verificationPassword}`;
  };
}

const enteredPassword = savePassword("qwerty");
console.log(enteredPassword("qwerty"));
console.log(enteredPassword("asdfgh"));

/**
  |============================
  | Завдання 7
  |============================
*/
// Напишіть функцію для зберігання знижки saveDiscount().
// Функція saveDiscount() повертає внутрішню функцію makeDiscount(),
// яка приймає суму покупки і повертає фінальну суму
// зi збереженою знижкою.
// Проведіть рефакторинг функції saveDiscount(), використовуючи
// стрілочні callback-функції
//++++++++++++++++++ Рішення ++++++++++++++++++
function saveDiscount(discount) {
  return function makeDiscount(sum) {
    return sum - sum * (discount / 100);
  };
}
// Рефакторинг
// const saveDiscount = (discount) => (sum) => sum - sum * (discount / 100);
const discountPremium = saveDiscount(50);
console.log(discountPremium(1000));

import users from "./users.js";
/**
  |============================
  | Завдання 1
  |============================
*/
// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };
/**
  |============================
  | Завдання 2
  |============================
*/
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
//++++++++++++++++++ Рішення ++++++++++++++++++
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };
/**
  |============================
  | Завдання 3
  |============================
*/
// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
// const getUsersWithGender = (users, gen) => {
//   return users.reduce((acc, el) => {
//     if (el.gender === gen) {
//       acc.push(el.name);
//     }
//     return acc;
//   }, []);
// };
// console.log(getUsersWithGender(users, "male"));
/**
  |============================
  | Завдання 4
  |============================
*/
// Отримати масив тільки неактивних користувачів (поле є активним).
// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
//++++++++++++++++++ Рішення ++++++++++++++++++
// const getInactiveUsers = users.filter(({ isActive }) => !isActive);
// console.table(getInactiveUsers);
/**
  |============================
  | Завдання 5
  |============================
*/
// Отримати користувача (не масив) по email (поле email, він унікальний).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
//++++++++++++++++++ Рішення ++++++++++++++++++
// const getUserWithEmail = (users, param) => {
//   return users.find((user) => user.email === param);
// };
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
/**
  |============================
  | Завдання 6
  |============================
*/
// Отримати масив користувачів віком від min до max
// console.log (getUsersWithAge(users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log (getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
//++++++++++++++++++ Рішення ++++++++++++++++++
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const usersAgeInRange = users.filter((user) => user.age > minAge && user.age < maxAge);
//   return usersAgeInRange;
// };
/**
  |============================
  | Завдання 7
  |============================
*/
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916
//++++++++++++++++++ Рішення ++++++++++++++++++
// const calculateTotalBalance = (users) => {
//   return users.reduce((startValue, { balance }) => {
//     return (startValue += balance);
//   }, 0);
// };
/**
  |============================
  | Завдання 8
  |============================
*/
// Отримати масив імен всіх користувачів, які мають одиного друга із зазначеним ім'ям.
// console.log(getUsersWithFriend(users, 'Briana Decker'))); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
// const getUsersWithFriend = (users, friendName) => {
//   const usersWithFriend = users.filter((user) => user.friends.includes(friendName));

//   return usersWithFriend;
// };
/**
  |============================
  | Завдання 9
  |============================
*/
// Отримати масив імен (поле name) людей, відсортованих залежно від кількості їх друзів (поле friends)
// console.log(getNamesSortedByFriendCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
// const getNamesSortedByFriendCount = (users) => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name);
// };
/**
  |============================
  | Завдання 10
  |============================
*/
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// уміннь, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']
//++++++++++++++++++ Рішення ++++++++++++++++++
// const getSortedUniqueSkills = (users) => {
//   return users
//     .flatMap((user) => user.skills)
//     .filter((item, index, array) => array.indexOf(item) === index)
//     .sort();
// };
// console.log(getSortedUniqueSkills(users));
/**
  |============================
  | Завдання 11
  |============================
*/
// Напишіть функцію compact(), яка очищає масив від небажаних значень,
// таких як false, undefined, порожні рядки, нуль, null.
// const data = [0, 1, false, 2, undefined, "", 3, null];
// console.log(compact(data)); // [1, 2, 3]
//++++++++++++++++++ Рішення ++++++++++++++++++
// const compact = (arr) => arr.filter((element) => element);
/**
  |============================
  | Завдання 12
  |============================
*/
// Напишіть функцію without(), яка повертає новий масив без наданих значень. Використовуйте примітивні типи.
// const data = [1, 2, 3, 4, 1, 2];
// console.log(without(data, 1, 2)); // [3, 4]
//++++++++++++++++++ Рішення ++++++++++++++++++
// const without = (array, ...args) => {
//   const arg = [...args];
//   const excludedArr = [];
//   for (let elem of array) {
//     if (!arg.includes(elem)) {
//       excludedArr.push(elem);
//     }
//   }
//   return excludedArr;
// };
/**
  |============================
  | Завдання 13
  |============================
*/
// Необхідно написати функцію isEqualSymbols(), що приймає в аргументах два рядки
// і повертає true, якщо ці рядки складаються з ідентичних літер і false в іншому випадку.
//++++++++++++++++++ Рішення ++++++++++++++++++
// const isEqualSymbols = (str1, str2) => {
//   const strToArray1 = str1.split("");
//   const strToArray2 = str2.split("");
//   for (let i = 0; i < strToArray1.length; i += 1) {
//     if (!strToArray1.includes(strToArray2[i])) return false;
//   }
//   return true;
// };
// console.log(isEqualSymbols("GOOD", "GODO")); // результат true
// console.log(isEqualSymbols("кіт", "струм")); // результат false
// console.log(isEqualSymbols("кіт", "тік")); // результат true
/**
  |============================
  | Завдання 14
  |============================
*/
// Сортування примітивів.
// Виконайте сортування масиву цін за спаданням та зростанням
//++++++++++++++++++ Рішення ++++++++++++++++++
const prices = [1000, 240, 670, 360, 89, 20];
// const ascendingPrice = [...prices].sort((a, b) => a - b);
// const descendingPrice = [...prices].sort((a, b) => b - a);
/**
  |============================
  | Завдання 15
  |============================
*/
// Сортування рядків.
// Виконайте сортування масиву назв моніторів у алфавітному та зворотньому порядку.
//++++++++++++++++++ Рішення ++++++++++++++++++
const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ", "ASER"];
// alphabetical
// const sortedArr = [...monitors].sort((a, b) => {
// сортування за зростанням
// if (a < b) return -1;
// значення місцями не змінює
// якщо a < b, a має стояти перед b
// console.log('a < b', a < b);
// console.log('a', a);
// console.log('b', b);
// Повертаємо -1 місцями значення не міняємо

// сортування за спаданням
// if (a > b) return 1;
// значення місцями змінює

// return 0;
// означає, що рівні, залишаються на своїх місцях
// });
// console.log(alphabeticalSortedArr);

// const b = monitors.sort((a, b) => a.localeCompare(b));
// firstString.localeCompare(secondString)
// Повертає негативне значення якщо firstString має бути перед secondString.
// Місцями значення не змінює
// console.log(b);
/**
  |============================
  | Завдання 16
  |============================
*/
// Сортування складних типів
// Виконайте сортування масиву об'єктів:
// 1. За зростанням та зменшенням значення властивості price
// 2. За ім'ям в алфавітному та зворотному порядку
//++++++++++++++++++ Рішення ++++++++++++++++++
const items = [
  { name: "SAMSUNG", price: 15000 },
  { name: "LG", price: 9000 },
  { name: "DELL", price: 27000 },
  { name: "BENQ", price: 12000 },
  { name: "ASER", price: 7000 },
];
// const sortedByLowerPrice = items.sort((first, second) => {
//   return first.price - second.price;
// });
// console.log(sortedByLowerPrice);

// const sortedByHigherPrice = items.sort((first, second) => {
//   return second.price - first.price
// });
// console.log(sortedByHigherPrice);
/**
  |============================
  | Завдання 17
  |============================
*/
// Зібрати в allTopics масив всіх предметів всіх курсів
// Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
//++++++++++++++++++ Рішення ++++++++++++++++++
const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Function",
      "Git",
      "Conditions",
      "Classes",
      "GitHub",
      "DOM",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: ["VSCode", "NPM", "Bundlers", "Transpiling", "Git", "Promises", "AJAX", "GitHub"],
  },
];
// const allTopics = courses
//   .flatMap((course) => course.topics)
//   .filter((item, index, array) => array.indexOf(item) === index);
// console.log(allTopics);
/**
  |============================
  | Завдання 18
  |============================
*/
// Призначити знижку 20% на фрукти в масиві,
// Присвоїти ID для кожного продукту використавши функцію generateRandomId()
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];
function generateRandomId(length) {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
// Приклад роботи функції для генерації ID з 10 символів
// console.log(generateRandomId(10));

//++++++++++++++++++ Рішення ++++++++++++++++++
// const discountFruits = fruits.map((fruit) => {
//   return {
//     ...fruit,
//     price: fruit.price * 0.8,
//     id: generateRandomId(13),
//   };
// });
// console.log(discountFruits);

/**
  |============================
  | Завдання 19
  |============================
*/
// Повернути об'єкт у якому вказується кількість тегів
//++++++++++++++++++ Рішення ++++++++++++++++++
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
// const stats = tweets
//   .flatMap((tweet) => tweet.tags)
//   .reduce(
//     (acc, tag) => ({
//       ...acc,
//       [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {}
//   );
// console.log(stats); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// Альтернативний варіант
// const allTags = tweets
//   .reduce((acc, tweet) => [...acc, ...tweet.tags], [])
//   .filter((item, index, array) => array.indexOf(item) === index);
/**
  |============================
  | Завдання 20
  |============================
*/
// Дізнатись суму років практики в масиві workers
//++++++++++++++++++ Рішення ++++++++++++++++++
const workers = [
  { id: 10, name: "Mango", years: 14 },
  { id: 2, name: "Poly", years: 19 },
  { id: 41, name: "Ajax", years: 30 },
  { id: 99, name: "Kiwi", years: 22 },
];
// const sumYears = workers.reduce((acc, { years }, index, array) => {
//   return acc + years;
// }, 0);
// console.log(sumYears);
/**
  |============================
  | Завдання 21
  |============================
*/
// Даний масив із числами. Залишіть у ньому лише додатні числа.
// Потім порахуйте квадратний корінь цих чисел.
//++++++++++++++++++ Рішення ++++++++++++++++++
const array = [121, -2, 225, 0, 4, -5, 36, -11];
// const filteredArray = array.filter((elem) => elem > 0);
// console.log(filteredArray);
// const sqrtArray = filteredArray.map((number) => Math.sqrt(number));
// console.log(sqrtArray);
/**
  |============================
  | Завдання 22
  |============================
*/
// Створення масиву значень Фаренгейта із масиву значень Цельсія
// Для обрахунку використайте формулу <temperature * 1.8 + 32>
//++++++++++++++++++ Рішення ++++++++++++++++++
const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]
// const fahrenheit = celsius.map((t) => t * 1.8 + 32);
// console.log(fahrenheit);

/**
  |============================
  | Завдання 23
  |============================
*/
// Знайти унікальні елементи за допомогою reduce
//++++++++++++++++++ Рішення ++++++++++++++++++
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
// const findUniqNumber = (array) =>
//   array.reduce((acc, number) => (acc.includes(number) ? acc : [...acc, number]), []);
// console.log(findUniqNumber(numbers));
