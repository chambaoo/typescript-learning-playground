let target = 'hello';
let source: 'hello' = 'hello';

target = source;
// 逆はだめ。
// let source = 'hello';
// let target: 'hello' = 'hello';

// target = source;
// 逆はだめ。型 'string' を型 '"hello"' に割り当てることはできません。

enum Color1 {
    RED,
    BLUE
}

enum Color2 {
    WHITE,
    BLACK
}

let numberEnum: number;
numberEnum = Color1.RED;
// number型にEnumを代入できる。逆も可能。
// Enum間の代入は不可。

let color1: Color1;
// color1 = Color2.BLACK; // 型 'Color2.BLACK' を型 'Color1' に割り当てることはできません。
