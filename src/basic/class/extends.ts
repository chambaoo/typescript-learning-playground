class Person10 {

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
    greet(this: Person10) {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old.`);
    }
}

class Teacher1 extends Person10 {
    constructor(name: string, age: number, public subject: string) {
        // Constructors for derived classes must contain a 'super' call.ts(2377)
        super(name, age);
    }
}

const nyanko = new Teacher1('Nyanko', 1000, '魔術');
nyanko.greet();


// protected

class Person11 {

    private readonly id: number = 1;

    // 継承先でもアクセス可能にしたい場合に、protected 修飾子を使う。
    constructor(public readonly name: string, protected age: number) {
    }

    incrementAge() {
        this.age++;
    }

    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet(this: Person11) {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old.`);
    }
}

class Teacher2 extends Person11 {
    constructor(name: string, age: number, public subject: string) {
        // Constructors for derived classes must contain a 'super' call.ts(2377)
        super(name, age);
    }
    greet(): void {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old. I teach ${this.subject}.`);
    }
}

const gojo = new Teacher2('Gojo', 30, '呪術');
gojo.incrementAge();
gojo.greet();
