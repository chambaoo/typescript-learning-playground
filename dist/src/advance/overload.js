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
//# sourceMappingURL=overload.js.map