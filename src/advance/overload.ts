// overload の宣言は、関数宣言の上に記載する！
// 一番上の宣言が優先的に適用される
function overloadSample(x: string): string;
// function overloadSample(x: any): any;
function overloadSample(x: number): number;

// overload した時の型推論
// function overloadSample(x: string): string (+1 overload)
function overloadSample(x: string | number) {
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
// const sampleFunction: {
//     (x: string): string;
//     (x: number): number;
// }

type IFunction = {
    // 関数の型を複数書くことで、オーバーロードを型で表現する。
    (x: string): number;
    (x: number): number;
}

// 型 '(x: string) => number' を型 'IFunction' に割り当てることはできません。
//   パラメーター 'x' および 'x' は型に互換性がありません。
//     型 'number' を型 'string' に割り当てることはできません。
// const sampleFunctionInterface: IFunction = function (x: string) { return 0 };

// interface で定義したすべての型を満たすように、関数を定義する
const sampleFunctionInterface: IFunction = function (x: string | number) { return 0 };


// インターセクション

type IFunctionA = {
    // 関数の型を複数書くことで、オーバーロードを型で表現する。
    (x: string, y: string): number;
    (x: number, y: string): number;
}

type IFunctionB = {
    // 関数の型を複数書くことで、オーバーロードを型で表現する。
    (x: string): number;
}
// 一番先に定義されているものが優先される。
let intersectionFunction1: IFunctionA & IFunctionB;
let intersectionFunction2: IFunctionB & IFunctionA;

intersectionFunction1 = function (a: number | string, b?: string) { return 10 };


// Union

type IFunctionC = {
    // 関数の型を複数書くことで、オーバーロードを型で表現する。
    (x: number): number;
}

type IFunctionD = {
    // 関数の型を複数書くことで、オーバーロードを型で表現する。
    (x: string): string;
}

let unionFunction1: IFunctionC | IFunctionD;
// unionFunction1(); // let unionFunction1: (x: never) => string | number
unionFunction1 = function (a: number) { return 0 };
unionFunction1 = function (a: string) { return 'abc' };
