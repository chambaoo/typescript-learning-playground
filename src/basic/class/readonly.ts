class Person9 {

    private readonly id: number = 1;

    // constructor の引数に修飾子を付けてもよい
    constructor(public readonly name: string, private age: number) {
        // constructor の中では、readonly プロパティにも代入ができる。
        this.id = 4;
        this.name = 'No Name';
    }

    incrementAge() {
        this.age++;
    }

    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet(this: Person9) {
        console.log(`Hello. I'm ${this.name}.`);
    }
}

const nina = new Person9('Nina', 8);
// nina.name = ''; // Cannot assign to 'name' because it is a read-only property.ts(2540)
nina.incrementAge();
nina.greet();
console.log(nina);

// output is ...
// Hello. I'm No Name.
// Person9 { name: 'No Name', age: 9, id: 4 }

