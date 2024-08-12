// 型注釈ができない時に、型アサーションを使います。

// e.g.
// <input id='input'>

// const input = document.getElementById('input'); // const input: HTMLElement | null
// input.value = 'input value insert'; // プロパティ 'value' は型 'HTMLElement' に存在しません


// 型アサーションの書き方は２パターンある。
// 1.
const input1 = <HTMLInputElement>document.getElementById('input');
input1.value = 'input value insert';
// 2.
const input2 = document.getElementById('input') as HTMLInputElement;
input2.value = 'input value insert';

// 1行で書くと、、、
(<HTMLInputElement>document.getElementById('input')).value = 'input value insert';
(document.getElementById('input') as HTMLInputElement).value = 'input value insert';


// Non-null assertion operator
// null or undefined ではないことを宣言する
const input = document.getElementById('input')!; // const input: HTMLElement


// Const Assertion
const milk = 'milk' as const; // const milk: "milk"
let drink = milk; // let drink: "milk"

const array1 = [20, 30];
// as const を使用すると tupple になる
const array2 = [20, 30] as const; // const array2: readonly [20, 30]

const obj1 = {
    name: 'Sara',
    age: 28
} as const;

// const obj1: {
//     readonly name: "Sara";
//     readonly age: 28;
// }

// enum の代用にもできる。
