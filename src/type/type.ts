// -------------------------------
// TS/JS boolean
// -------------------------------
let hasValue: boolean = true;
let count: number = 30;
let float: number = 3.14;
let negative: number = -0.9;

// -------------------------------
// TS/JS string
// -------------------------------
let hello1: string = 'hello';
let hello2: string = "hello";
let hello3: string = `hello`;

// -------------------------------
// 型注釈
// -------------------------------
let score1: number = 100;

// -------------------------------
// 型推論
// -------------------------------
let score2 = 100;
// scoreB = 'a'; // Type 'string' is not assignable to type 'number'
//// 初期化しない場合には、型推論はできないため、型注釈をするようにしましょう。

// -------------------------------
// Object
// -------------------------------
const person1 = {
    name: 'Michael',
    age: 44
}

const person2: {
    name: string,
    age: number
} = {
    name: 'Kotaro',
    age: 5
}


const person3: object = {
    name: 'cannot access',
    age: 88
}
// object 型のプロパティにアクセスすることができないので注意する
// person3.name // Property 'name' does not exist on type 'object'.ts(2339)
const person4 = {
    name: {
        first: 'Schenker',
        last: 'Michael'
    },
    age: 26
}

// -------------------------------
// Array
// -------------------------------
const fruits1 = ['Apple', 'Melon', 'Orange'];
const fruits2: string[] = ['Apple', 'Melon', 'Orange'];
// fruits1.push(2); // Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

const fruitsValue = fruits1[0];

const fruits3: any[] = ['Apple', 'Melon', 'Orange', 3]; // any
const fruits4 = ['Apple', 'Melon', 'Orange', 3]; // Union


// -------------------------------
// Tuple
// -------------------------------
const book1: [string, number, boolean] = ['math', 3000, true];
// Tuple は、型推論はできない。必ず型注釈を書く。
book1.push(22); // これはエラーにならないので注意。初期化後では、型規制が緩い。

console.log(book1);


// -------------------------------
// enum
// -------------------------------
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI',
}

const coffee1 = {
    hot: true,
    size: CoffeeSize.VENTI
}

enum CoffeeSizeNum {
    SHORT, // initialized 0
    TALL,
    GRANDE,
    VENTI,
}



// -------------------------------
// any
// -------------------------------
let anything: any = true;
anything = 'hello';
anything = [23, coffee1];
console.log(anything);

// 定義された型であっても、後からanyを代入することが許されているので注意する。
let aaaa = 'aaaa';
let bbbb: string = 'bbbb';
aaaa = anything; // コンパイルエラーにならない！
bbbb = anything; // コンパイルエラーにならない！

// -------------------------------
// Union
// -------------------------------
let unionType: number | string = 10;
// unionType.toUpperCase(); // Property 'toUpperCase' does not exist on type 'number'.
unionType = 'hello'; // let unionType: string | number
unionType.toUpperCase();

// 配列の場合は()の中に型を記述する
let unionTypes: (number | string)[] = ['a', 'b', 32, 'c'];
console.log(unionTypes);

// -------------------------------
// Literal
// -------------------------------
// 決まった値を扱う型
const apple1: 'apple' = 'apple';
// const apple2: 'apple' = 'hello'; // Type '"hello"' is not assignable to type '"apple"'.
const apple3 = 'apple'; // letの場合は、string型になるが、constを使って代入するとリテラルになる。
const zero: 0 = 0;

// enumのような?方法
let clothSize1: 'small' | 'medium' | 'large' = 'medium';
const shirt1 = {
    color: 'white',
    size: clothSize1 // リテラル型になる
}

shirt1.color = 'green';
// shirt1.size = 'small'; // Type '"small"' is not assignable to type '"medium"'.
console.log(shirt1);


// enumのような?方法
let clothSize2: 'small' | 'medium' | 'large' = 'medium';
const shirt2: {
    color: string,
    size: 'small' | 'medium' | 'large', // 型注釈をすることで後から指定された値の範囲で代入が可能になる・
} = {
    color: 'white',
    size: 'small'
}

shirt2.color = 'blue';
shirt2.size = 'large';
console.log(shirt2);


// -------------------------------
// type alias
// -------------------------------

// -------------------------------
// function
// -------------------------------

// -------------------------------
// void
// -------------------------------

// -------------------------------
// callback
// -------------------------------

// -------------------------------

// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
