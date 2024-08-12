"use strict";
// 型注釈ができない時に、型アサーションを使います。
// e.g.
// <input id='input'>
// const input = document.getElementById('input'); // const input: HTMLElement | null
// input.value = 'input value insert'; // プロパティ 'value' は型 'HTMLElement' に存在しません
// 型アサーションの書き方は２パターンある。
// 1.
const input1 = document.getElementById('input');
input1.value = 'input value insert';
// 2.
const input2 = document.getElementById('input');
input2.value = 'input value insert';
// 1行で書くと、、、
document.getElementById('input').value = 'input value insert';
document.getElementById('input').value = 'input value insert';
// Non-null assertion operator
// null or undefined ではないことを宣言する
const input = document.getElementById('input'); // const input: HTMLElement
// Const Assertion
const milk = 'milk'; // const milk: "milk"
let drink = milk; // let drink: "milk"
const array1 = [20, 30];
// as const を使用すると tupple になる
const array2 = [20, 30]; // const array2: readonly [20, 30]
const obj1 = {
    name: 'Sara',
    age: 28
};
// type SaraType = {
//     readonly name: "Sara";
//     readonly age: 28;
// }
//# sourceMappingURL=typeAssertion.js.map