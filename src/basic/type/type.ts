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

// 型を変数のように扱う
type ClothSize = 'small' | 'medium' | 'large';

const shirt3: {
    color: string,
    size: ClothSize, // 型注釈をすることで後から指定された値の範囲で代入が可能になる・
} = {
    color: 'white',
    size: 'small'
}

shirt3.color = 'yellow';
shirt3.size = 'medium';
console.log(shirt3);


// -------------------------------
// function
// -------------------------------
// パラメータには必ず型注釈を付ける。そうしないとanyになってしまい、危険。
function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(1, 3));

// -------------------------------
// void
// -------------------------------
function sayHello(): void {
    console.log('Hello.');
}
function sayHelloUndefined(): undefined {
    console.log('Hello.');
    // undefinedを使用すること自体、そもそも非推奨ではある。
    // return がないときは戻り値にundefinedは、使えない。
    // TODO: しかし、、なぜかなくてもコンパイルは成功しているので、versionによるものかもしれない。要調査。
    return;
}

console.log(sayHello()); // 戻り値はundefined型になる

// undefined
let tmp1: undefined;
let tmp2; // この場合は、any型


// -------------------------------
// undefined | null
// -------------------------------
let tmpUndefined: undefined = undefined;
let tmpNull: null = null;
// let tmpUndefined: undefined = 11; // Type '11' is not assignable to type 'undefined'.
// let tmpNull: null = 22; // Type '22' is not assignable to type 'null'.


// -------------------------------
// 関数の型注釈
// -------------------------------
// 関数名: (引数) => 戻り値の型 = 関数
const add2: (n1: number, n2: number) => number = add;

// 無名関数
const add3: (n1: number, n2: number) => number = function (num1, num2) { return num1 + num2 };
// TODO: 引数の型注釈は、どちらにも書いてもいいが、片方だけで十分。と聞いたが、
// 以下は、n1, n2の引数がany型になっている。versionによるかもしれない。
// const add4: (n1, n2) => number = function (num1: number, num2: number) { return num1 + num2 };

// アロー関数
// 引数が一つの場合は、()は不要。しかし、any型になるので、推奨しない。
// const double1 = number =>  number * 2; // Parameter 'number' implicitly has an 'any' type, but a better type may be inferred from usage.

const double2 = (number: number): number =>  number * 2;
const double3 = (number: number): number =>  number * 2;

// -------------------------------
// callback
// -------------------------------
function double4(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);

    console.log(doubleNum);
}
double4(27, doubleNum => {
    return doubleNum;
} );

function doubleAndHandle1(num: number, callback: (num: number) => number): void {
    const doubleNum = num * 2;
    const callbackResult1 = callback(doubleNum);
    console.log(callbackResult1);
}

doubleAndHandle1(3, doubleNumber => {
    return doubleNumber * 2;
})

// callback関数の戻り値をvoidにすると、引数で渡されるcallback関数の定義によらず、voidが戻り値となる。
function doubleAndHandle2(num: number, callback: (num: number) => void): void {
    const doubleNum = num * 2;
    const callbackResult2 = callback(doubleNum); // const callbackResult2: void
    console.log(callbackResult2);
}

doubleAndHandle2(3, doubleNumber => {
    return doubleNumber * 2;
})

// -------------------------------
// unknown
// -------------------------------
// any に近いが、any より少し厳しい型と考える

let unknownInput1: unknown;
let anyInput1: any;

unknownInput1 = 'hello';
unknownInput1 = 1;
unknownInput1 = true;

// 型を定義した後で、unknown型を代入することができない。
// any の場合は、定義を破壊して any に変えてしまう特徴があったが、unknown ではそうならない。
let text: string;
// text = unknownInput1; // Type 'unknown' is not assignable to type 'string'.

// -------------------------------
// never
//   ----> TypeScript ver.2から実装
// -------------------------------
// 決して何も返さない。という型

function error1(message: string): never {
    throw new Error(message);
}

// 何も返さず、エラーを発生させて終了するようなとき、never を使う
// console.log(error1('error ocurred.'));
// 他には、while(true)などの無限に続くような処理で、never を使う


// 型推論を使った場合、書き方によって戻り値の型が変わる
// 通常の関数宣言では、戻り値は void として推論される。これは、後方互換性のため。
function error2(message: string) { // function error2(message: string): void
    throw new Error(message);
}

// 関数式では、戻り値は never として推論される。
const error3 = function error3(message: string) { // const error3: (message: string) => never
    throw new Error(message);
}

// アロー関数では、戻り値は never として推論される。
const error4 = (message: string) => { // const error4: (message: string) => never
    throw new Error(message);
} 

console.log('type complete.');

