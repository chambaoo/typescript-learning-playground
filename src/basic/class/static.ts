const num = Math.random();
console.log(num);

class Person13 {
    //  static プロパティ
    static species = 'Homo sapiens';
    static isAdult(age: number) {
        if (age > 17) return true;
        return false;
    }

    private readonly id: number = 1;

    // 継承先でもアクセス可能にしたい場合に、protected 修飾子を使う。
    constructor(public readonly name: string, protected age: number) {
    }

    incrementAge() {
        this.age++;
    }

    // class を 引数の型に指定できる。class は、同名のtypeを同時に作っている。
    greet(this: Person13) {
        console.log(`Hello. I'm ${this.name} and ${this.age} yeas old.`);
    }
}

class Teacher4 extends Person13 {}

// インスタンス化していなくても、static プロパティ、メソッドにアクセス可能
console.log(Person13.species);
console.log(Person13.isAdult(29));

