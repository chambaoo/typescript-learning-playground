"use strict";
// 型注釈ができない時に、型アサーションを使います。
// e.g.
// <input id='input'>
// const input = document.getElementById('input'); // HTMLElement | null
// console.log(input.value); // プロパティ 'value' は型 'HTMLElement' に存在しません
// 1.
const input1 = document.getElementById('input');
console.log(input1.value);
// 2.
const input2 = document.getElementById('input');
console.log(input2.value);
//# sourceMappingURL=typeAssertion.js.map