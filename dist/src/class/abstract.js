"use strict";
// Abstract methods can only appear within an abstract class.ts(1244)
class Person14 {
    name;
    age;
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
        this.explainJob();
    }
}
class Teacher5 extends Person14 {
    // Non-abstract class 'Teacher5' does not implement inherited abstract member explainJob from class 'Person14'.ts(2515)
    explainJob() {
        console.log(`I am a teacher.`);
    }
}
class Engineer1 extends Person14 {
    explainJob() {
        console.log('I am a engineer.');
    }
}
const kobayashi = new Teacher5('Kobayashi', 28);
kobayashi.greet();
const stieve = new Engineer1('Steive', 87);
stieve.greet();
//# sourceMappingURL=abstract.js.map