"use strict";
// -------------------------------
// generics in function
// -------------------------------
// 型を引数として受け取り、一般的な関数を作る
// any
function copyAny(value) {
    return value;
}
console.log(copyAny(232)); // 戻り値の型推論が効かない。
// -------------------------------
// generics
// -------------------------------
function copy(value) {
    return value;
}
console.log(copy('yes').toUpperCase());
console.log(copy({ name: 'Nick' }).name); // <>で指定しなくても、型推論される
// -------------------------------
// generics & extends
// -------------------------------
// generics に extends で制約をつける
function copy2(value) {
    return value;
}
console.log(copy2({ name: 'Nick' }).name);
function copy3(value, key) {
    return value[key];
}
console.log(copy3({ name: 'endo', age: 3 }, 'age'));
// -------------------------------
// generics in class
// -------------------------------
class LightDatabase {
    data = [];
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getAll() {
        return this.data;
    }
}
// 先に決めた型だけを許容するので、型安全な実装が可能
const database1 = new LightDatabase;
database1.add('coffee');
// database1.add(125); // 型 'number' の引数を型 'string' のパラメーターに割り当てることはできません
database1.add('tea');
database1.add('green tea');
console.log(database1.getAll());
database1.remove('tea');
console.log(database1.getAll());
const database2 = {
    id: 3,
    data: [2, 3, 5, 7, 11]
};
console.log(database2);
// Readonly ---> properties は、readonly になる
// type TodoReadonly = {
//     readonly title: string;
//     readonly text: string;
// }
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});
fetchData.then(data => {
    // interface Promise<T>
    data.toUpperCase();
});
const sports1 = ['soccer', 'baseball', 'basketball'];
// const sports1: string[]
// interface Array<T> を使用しても、同じように配列宣言できる
const sports2 = ['soccer', 'baseball', 'basketball'];
let response1; // ジェネリック型 'ResponseData<T>' には 1 個の型引数が必要です。
let response2;
let temp;
// type DistributiveConditionalTypes2<T> = boolean
let distributive;
// library でも使用されている distributive conditional types
// e.g. 1. NonNullalbe
let nonNullable;
// let nonNullable: string
// e.g. 2. ReturnType
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
//# sourceMappingURL=generics.js.map