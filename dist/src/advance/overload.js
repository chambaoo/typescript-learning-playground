"use strict";
// overload した時の型推論
// function overloadSample(x: string): string (+1 overload)
function overloadSample(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x * 100;
}
// オーバーロードをしていない時、戻り値の型が定まらない。const sample: string | number
// オーバーロードをした時、戻り値の型が定まる。const sample: string
const sample = overloadSample('sample');
console.log(sample);
const sampleFunction = overloadSample;
// 型 '(x: string) => number' を型 'IFunction' に割り当てることはできません。
//   パラメーター 'x' および 'x' は型に互換性がありません。
//     型 'number' を型 'string' に割り当てることはできません。
// const sampleFunctionInterface: IFunction = function (x: string) { return 0 };
// interface で定義したすべての型を満たすように、関数を定義する
const sampleFunctionInterface = function (x) { return 0; };
// 一番先に定義されているものが優先される。
let intersectionFunction1;
let intersectionFunction2;
intersectionFunction1 = function (a, b) { return 10; };
let unionFunction1;
// unionFunction1(); // let unionFunction1: (x: never) => string | number
unionFunction1 = function (a) { return 0; };
unionFunction1 = function (a) { return 'abc'; };
//# sourceMappingURL=overload.js.map