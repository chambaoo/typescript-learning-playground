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
