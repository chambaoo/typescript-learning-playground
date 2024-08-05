"use strict";
class Person15 {
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
class Teacher6 extends Person15 {
    _subject;
    static instance;
    // singleton pattern
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    static getInstance() {
        return Teacher6.instance;
    }
    // private プロパティのgetter
    get subject() {
        // A 'get' accessor must return a value.ts(2378)
        if (!this._subject) {
            throw new Error('subject is not set.');
        }
        return this._subject;
    }
    set subject(value) {
        // A 'set' accessor must have exactly one parameter.ts(1049)
        if (!value) {
            throw new Error('value required.');
        }
        this._subject = value;
    }
    greet() {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old. I teach ${this.subject}.`);
    }
}
const singleTeacher = Teacher6.getInstance();
const doubleTeacher = Teacher6.getInstance();
console.log(singleTeacher === doubleTeacher);
//# sourceMappingURL=privateConstructor.js.map