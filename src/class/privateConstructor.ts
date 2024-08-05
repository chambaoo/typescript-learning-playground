class Person15 {

    private readonly id: number = 1;

    // 継承先でもアクセス可能にしたい場合に、protected 修飾子を使う。
    constructor(public readonly name: string, protected age: number) {
    }

    incrementAge() {
        this.age++;
    }

    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet(this: Person15) {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old.`);
    }
}

class Teacher6 extends Person15 {

    private static instance: Teacher6;
    
    // singleton pattern
    private constructor(name: string, age: number, private _subject: string) {
        super(name, age);
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

    greet(): void {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old. I teach ${this.subject}.`);
    }
}

const singleTeacher = Teacher6.getInstance();
const doubleTeacher = Teacher6.getInstance();
console.log(singleTeacher === doubleTeacher); // true


