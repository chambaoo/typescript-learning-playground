class Person12 {

    private readonly id: number = 1;

    // 継承先でもアクセス可能にしたい場合に、protected 修飾子を使う。
    constructor(public readonly name: string, protected age: number) {
    }

    incrementAge() {
        this.age++;
    }

    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet(this: Person12) {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old.`);
    }
}

class Teacher3 extends Person12 {

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

    constructor(name: string, age: number, private _subject: string) {
        // Constructors for derived classes must contain a 'super' call.ts(2377)
        super(name, age);
    }
    greet(): void {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old. I teach ${this.subject}.`);
    }
}

const kaori = new Teacher3('Kaori', 30, '剣術');
kaori.incrementAge();
kaori.greet();
// getterを使う
console.log(kaori.subject);
// setterを使う
kaori.subject = '剣術（神谷活心流）';
kaori.greet();


