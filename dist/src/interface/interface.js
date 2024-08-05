"use strict";
const human = {
    name: 'Natsume',
    age: 18,
    greet(message) {
        console.log(message);
    }
};
human.greet('hi.');
class Developer {
    name;
    age;
    experience;
    // name は interface で readonly であっても、実装時には public にすることができる。
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    ;
    greet(message) {
        console.log(message);
    }
}
const developer = new Developer('Meta', 33, 13);
// -------------------------------
// function type alias
// -------------------------------
// -------------------------------
// optional parameter
// -------------------------------
//# sourceMappingURL=interface.js.map