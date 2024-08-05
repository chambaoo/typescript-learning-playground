"use strict";
class Person10 {
    name;
    age;
    id = 1;
    // constructor の引数に修飾子を付けてもよい
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // constructor の中では、readonly プロパティにも代入ができる。
        this.id = 4;
        this.name = 'No Name';
    }
    incrementAge() {
        this.age++;
    }
    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet() {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old.`);
    }
}
class Teacher1 extends Person10 {
    subject;
    constructor(name, age, subject) {
        // Constructors for derived classes must contain a 'super' call.ts(2377)
        super(name, age);
        this.subject = subject;
    }
}
const nyanko = new Teacher1('Nyanko', 1000, '魔術');
nyanko.greet();
// protected
class Person11 {
    name;
    age;
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
class Teacher2 extends Person11 {
    subject;
    constructor(name, age, subject) {
        // Constructors for derived classes must contain a 'super' call.ts(2377)
        super(name, age);
        this.subject = subject;
    }
    greet() {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old. I teach ${this.subject}.`);
    }
}
const gojo = new Teacher2('Gojo', 30, '呪術');
gojo.incrementAge();
gojo.greet();
//# sourceMappingURL=extends.js.map