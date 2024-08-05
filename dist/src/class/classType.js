"use strict";
class Person6 {
    name;
    constructor(name) {
        this.name = name;
    }
    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet() {
        console.log(`Hello. I'm ${this.name}.`);
    }
}
//# sourceMappingURL=classType.js.map