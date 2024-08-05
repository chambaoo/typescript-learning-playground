class Person3 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    
    greet() {
        console.log(`Hello. I'm ${this.name}.`);
    }
}

const rui = new Person3("Rui");
rui.greet();

const undefinedRui = {
    undefinedGreeting: rui.greet
}
undefinedRui.undefinedGreeting();

// thisの指し示すものは、実行時に決まる。
const newNameRui = {
    name: 'Rui2',
    newNameGreeting: rui.greet
}
newNameRui.newNameGreeting();


class Person4 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    // 引数にthisとその型を指定することができる。指定するとコンパイルエラーにできる。
    greet(this: { name: string }) {
        console.log(`Hello. I'm ${this.name}.`);
    }
}

const may = new Person4('may');

const thisNameMay = {
    thisNameGreeting: may.greet
}
// thisNameMay.thisNameGreeting(); // thisNameMayにnameプロパティがないときコンパイルエラーにできる



// アロー関数の場合は、定義時にthisの値が決まる。

class Person5 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    // 引数にthisとその型を指定することができる。指定するとコンパイルエラーにできる。
    // greet = (this: { name: string }) => { // An arrow function cannot have a 'this' parameter.ts(2730)
    greet = () => { // An arrow function cannot have a 'this' parameter.ts(2730)
        console.log(`Hello. I'm ${this.name}.`);
    }
}

