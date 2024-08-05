"use strict";
const num = Math.random();
console.log(num);
class Person13 {
    name;
    age;
    //  static プロパティ
    static species = 'Homo sapiens';
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    id = 1;
    // 継承先でもアクセス可能にしたい場合に、protected 修飾子を使う。
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age++;
    }
    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet() {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old.`);
    }
}
class Teacher4 extends Person13 {
}
// インスタンス化していなくても、static プロパティ、メソッドにアクセス可能
console.log(Person13.species);
console.log(Person13.isAdult(29));
//# sourceMappingURL=static.js.map