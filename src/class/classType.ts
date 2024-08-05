class Person6 {
    
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet(this: Person6) {
        console.log(`Hello. I'm ${this.name}.`);
    }
}


