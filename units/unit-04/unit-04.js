// Task 1
// За допомогою вкладених циклів виведіть на сторінку наступний рядок:
// ***_***_***_

// де символи * малюються за допомогою внутрішнього циклу від 0 до 3, а символ _ за допомогою зовнішнього циклу

function fn1() {
  let output = "";
  let counter = 0;
  while (counter < 3) {
    for (let i = 0; i < 3; i++) {
      output += "*";
    }
    counter += 1;
    output += "-";
  }
  document.querySelector(".output-1").innerHTML = output;
}

document.querySelector(".btn-1").onclick = fn1;

// Task 2
// За допомогою вкладених циклів виведіть на сторінку наступний рядок:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_

// Розв'язати задачу за допомогою вкладених циклів. Зовнішній цикл виводить цифру та знак переносу рядка <br>, внутрішній – *_, і після цього зовнішній – знак переносу <br>.

function fn2() {
  let output = "";
  for (let i = 1; i <= 3; i += 1) {
    output += i + `<br>`;
    for (let j = 0; j < 3; j += 1) {
      output += "*_";
    }
    output += `<br>`;
  }
  document.querySelector(".output-2").innerHTML = output;
}

document.querySelector(".btn-2").onclick = fn2;

// Task 3
// За допомогою вкладених циклів виведіть на сторінку наступний рядок:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// Розв'язати задачу за допомогою вкладених циклів. Внутрішній цикл виводить *_, зовнішній цикл виводить знак переносу <br>.

function fn3() {
  let output = "";
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      output += "*_";
    }
    output += `<br>`;
  }
  document.querySelector(".output-3").innerHTML = output;
}

document.querySelector(".btn-3").onclick = fn3;

// Task 4
// За допомогою вкладених циклів виведіть на сторінку наступний рядок:
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*

//  Зовнішній цикл виводить цифру та _, а внутрішній виводить від 1 до 5 із *

function fn4() {
  let output = "";
  for (let i = 1; i < 4; i += 1) {
    output += i + "_";
    for (let j = 1; j < 6; j += 1) {
      output += j + "*";
    }
  }
  document.querySelector(".output-4").innerHTML = output;
}
document.querySelector(".btn-4").onclick = fn4;

// Task 5
// За допомогою вкладених циклів виведіть на сторінку наступний рядок:
// 101010
// 101010
// 101010

//  Вкладений цикл залежно від парного чи ні k лічильника циклу малює 0 або 1. Зовнішній цикл - <br>.
function fn5() {
  let output = "";
  for (let i = 0; i < 3; i += 1) {
    for (let j = 1; j <= 6; j += 1) {
      if (j % 2 === 0) {
        output += "0";
      } else {
        output += "1";
      }
    }
    output += `<br>`;
  }
  document.querySelector(".output-5").innerHTML = output;
}

document.querySelector(".btn-5").onclick = fn5;

// Task 6
// За допомогою вкладених циклів виведіть на сторінку наступний рядок:
// 10x01x
// 10x01x
// 10x01x

function fn6() {
  let output = "";
  for (let i = 0; i < 3; i += 1) {
    for (let j = 1; j <= 6; j++) {
      if (j === 1 || j === 5) output += "1";
      if (j === 2 || j === 4) output += "0";
      if (j === 3 || j === 6) output += "x";
    }
    output += `<br>`;
  }
  document.querySelector(".output-6").innerHTML = output;
}

document.querySelector(".btn-6").onclick = fn6;

// Task 7
// За допомогою вкладених циклів виведіть на сторінку наступний рядок:
// *
// **
// ***
// ****

function fn7() {
  let output = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
      output += "*";
    }
    output += `<br>`;
  }
  document.querySelector(".output-7").innerHTML = output;
}

document.querySelector(".btn-7").onclick = fn7;

// Task 8
// За допомогою вкладених циклів виведіть на сторінку наступний рядок:
// *****
// ****
// ***
// **
// *

function fn8() {
  let string = "";
  for (let i = 0; i < 5; i += 1) {
    for (let k = 5; k > i; k -= 1) {
      string += "*";
    }
    string += "<br>";
  }
  document.querySelector(".output-8").innerHTML = string;
}
document.querySelector(".btn-8").onclick = fn8;

// Task 9
// За допомогою вкладених циклів виведіть на сторінку наступний рядок:
// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function fn9() {
  let string = "";
  for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= i; k++) {
      string += k + "_";
    }
    string += "<br>";
  }
  document.querySelector(".output-9").innerHTML = string;
}

document.querySelector(".btn-9").onclick = fn9;

// Task 10
// За допомогою вкладених циклів виведіть на сторінку наступний рядок:
//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_

function fn10() {
  let string = "";
  for (let i = 0; i < 5; i++) {
    for (let k = 1; k <= 10; k++) {
      string += `${i * 10 + k}_`.padStart(3, 0);
    }
    string += "<br>";
  }
  document.querySelector(".output-10").innerHTML = string;
}

document.querySelector(".btn-10").onclick = fn10;
