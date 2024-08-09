"use strict";
class Person7 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age++;
    }
    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet() {
        console.log(`Hello. I'm ${this.name}.`);
    }
}
const nana = new Person7('Nana', 7);
nana.incrementAge();
console.log(nana);
class Person8 {
    name;
    age;
    // constructor の引数に修飾子を付けてもよい
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age++;
    }
    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet() {
        console.log(`Hello. I'm ${this.name}.`);
    }
}
const octa = new Person8('Octa', 8);
octa.incrementAge();
octa.greet();
console.log(octa);
//# sourceMappingURL=modifiers.js.map