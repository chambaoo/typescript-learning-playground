// オブジェクトリテラル
const objectLiteral = {
    name: 'name',
    address: {
        prefecture: 'Tokyo',
        city: 'Machida'
    }
}

console.log(objectLiteral);

// Class
class Person1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person1('Gon');

console.log(person);

// ES6 の場合
// JavaScriptにはフィールドがないので、以下のようなアウトプットになる。
// クラスのフィールドは、ES2022から導入される予定となっている。
// class Person1 {
//     constructor(name) {
//         this.name = name;
//     }
// }

// ES5 の場合
// var Person1 = /** @class */ (function () {
//     function Person(name) {
//         this.name = name;
//     }
//     return Person;
// }());
// var person = new Person1('Gon');
