"use strict";
let target = 'hello';
let source = 'hello';
target = source;
// 逆はだめ。
// let source = 'hello';
// let target: 'hello' = 'hello';
// target = source;
// 逆はだめ。型 'string' を型 '"hello"' に割り当てることはできません。
var Color1;
(function (Color1) {
    Color1[Color1["RED"] = 0] = "RED";
    Color1[Color1["BLUE"] = 1] = "BLUE";
})(Color1 || (Color1 = {}));
var Color2;
(function (Color2) {
    Color2[Color2["WHITE"] = 0] = "WHITE";
    Color2[Color2["BLACK"] = 1] = "BLACK";
})(Color2 || (Color2 = {}));
let numberEnum;
numberEnum = Color1.RED;
// number型にEnumを代入できる。逆も可能。
// Enum間の代入は不可。
let color1;
// color1 = Color2.BLACK; // 型 'Color2.BLACK' を型 'Color1' に割り当てることはできません。
//# sourceMappingURL=typeCompatibility.js.map