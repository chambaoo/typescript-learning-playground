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
