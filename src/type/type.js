// -------------------------------
// TS/JS boolean
// -------------------------------
var hasValue = true;
var count = 30;
var float = 3.14;
var negative = -0.9;
// -------------------------------
// TS/JS string
// -------------------------------
var hello1 = 'hello';
var hello2 = "hello";
var hello3 = "hello";
// -------------------------------
// 型注釈
// -------------------------------
var score1 = 100;
// -------------------------------
// 型推論
// -------------------------------
var score2 = 100;
// scoreB = 'a'; // Type 'string' is not assignable to type 'number'
//// 初期化しない場合には、型推論はできないため、型注釈をするようにしましょう。
// -------------------------------
// Object
// -------------------------------
var person1 = {
    name: 'Michael',
    age: 44
};
var person2 = {
    name: 'Kotaro',
    age: 5
};
var person3 = {
    name: 'cannot access',
    age: 88
};
// object 型のプロパティにアクセスすることができないので注意する
// person3.name // Property 'name' does not exist on type 'object'.ts(2339)
var person4 = {
    name: {
        first: 'Schenker',
        last: 'Michael'
    },
    age: 26
};
// -------------------------------
// Array
// -------------------------------
var fruits1 = ['Apple', 'Melon', 'Orange'];
var fruits2 = ['Apple', 'Melon', 'Orange'];
// fruits1.push(2); // Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
var fruitsValue = fruits1[0];
var fruits3 = ['Apple', 'Melon', 'Orange', 3]; // any
var fruits4 = ['Apple', 'Melon', 'Orange', 3]; // Union
// -------------------------------
// Tuple
// -------------------------------
var book1 = ['math', 3000, true];
// Tuple は、型推論はできない。必ず型注釈を書く。
book1.push(22); // これはエラーにならないので注意。初期化後では、型規制が緩い。
console.log(book1);
// -------------------------------
// enum
// -------------------------------
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee1 = {
    hot: true,
    size: CoffeeSize.VENTI
};
var CoffeeSizeNum;
(function (CoffeeSizeNum) {
    CoffeeSizeNum[CoffeeSizeNum["SHORT"] = 0] = "SHORT";
    CoffeeSizeNum[CoffeeSizeNum["TALL"] = 1] = "TALL";
    CoffeeSizeNum[CoffeeSizeNum["GRANDE"] = 2] = "GRANDE";
    CoffeeSizeNum[CoffeeSizeNum["VENTI"] = 3] = "VENTI";
})(CoffeeSizeNum || (CoffeeSizeNum = {}));
// -------------------------------
// any
// -------------------------------
var anything = true;
anything = 'hello';
anything = [23, coffee1];
console.log(anything);
// 定義された型であっても、後からanyを代入することが許されているので注意する。
var aaaa = 'aaaa';
var bbbb = 'bbbb';
aaaa = anything; // コンパイルエラーにならない！
bbbb = anything; // コンパイルエラーにならない！
// -------------------------------
// Union
// -------------------------------
var unionType = 10;
// unionType.toUpperCase(); // Property 'toUpperCase' does not exist on type 'number'.
unionType = 'hello'; // let unionType: string | number
unionType.toUpperCase();
// 配列の場合は()の中に型を記述する
var unionTypes = ['a', 'b', 32, 'c'];
console.log(unionTypes);
// -------------------------------
// Literal
// -------------------------------
// 決まった値を扱う型
var apple1 = 'apple';
// const apple2: 'apple' = 'hello'; // Type '"hello"' is not assignable to type '"apple"'.
var apple3 = 'apple'; // letの場合は、string型になるが、constを使って代入するとリテラルになる。
var zero = 0;
// enumのような?方法
var clothSize1 = 'medium';
var shirt1 = {
    color: 'white',
    size: clothSize1 // リテラル型になる
};
shirt1.color = 'green';
// shirt1.size = 'small'; // Type '"small"' is not assignable to type '"medium"'.
console.log(shirt1);
// enumのような?方法
var clothSize2 = 'medium';
var shirt2 = {
    color: 'white',
    size: 'small'
};
shirt2.color = 'blue';
shirt2.size = 'large';
console.log(shirt2);
var shirt3 = {
    color: 'white',
    size: 'small'
};
shirt3.color = 'yellow';
shirt3.size = 'medium';
console.log(shirt3);
// -------------------------------
// function
// -------------------------------
// パラメータには必ず型注釈を付ける。そうしないとanyになってしまい、危険。
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 3));
// -------------------------------
// void
// -------------------------------
function sayHello() {
    console.log('Hello.');
}
function sayHelloUndefined() {
    console.log('Hello.');
    // undefinedを使用すること自体、そもそも非推奨ではある。
    // return がないときは戻り値にundefinedは、使えない。
    // TODO: しかし、、なぜかなくてもコンパイルは成功しているので、versionによるものかもしれない。要調査。
    return;
}
console.log(sayHello()); // 戻り値はundefined型になる
// undefined
var tmp1;
var tmp2; // この場合は、any型
// -------------------------------
// undefined | null
// -------------------------------
var tmpUndefined = undefined;
var tmpNull = null;
// let tmpUndefined: undefined = 11; // Type '11' is not assignable to type 'undefined'.
// let tmpNull: null = 22; // Type '22' is not assignable to type 'null'.
// -------------------------------
// 関数の型注釈
// -------------------------------
// 関数名: (引数) => 戻り値の型 = 関数
var add2 = add;
// 無名関数
var add3 = function (num1, num2) { return num1 + num2; };
// TODO: 引数の型注釈は、どちらにも書いてもいいが、片方だけで十分。と聞いたが、
// 以下は、n1, n2の引数がany型になっている。versionによるかもしれない。
var add4 = function (num1, num2) { return num1 + num2; };
// アロー関数
// 引数が一つの場合は、()は不要。しかし、any型になるので、推奨しない。
var double1 = function (number) { return number * 2; }; // Parameter 'number' implicitly has an 'any' type, but a better type may be inferred from usage.
var double2 = function (number) { return number * 2; };
var double3 = function (number) { return number * 2; };
// -------------------------------
// callback
// -------------------------------
function double4(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
double4(27, function (doubleNum) {
    return doubleNum;
});
function doubleAndHandle1(num, callback) {
    var doubleNum = num * 2;
    var callbackResult1 = callback(doubleNum);
    console.log(callbackResult1);
}
doubleAndHandle1(3, function (doubleNumber) {
    return doubleNumber * 2;
});
// callback関数の戻り値をvoidにすると、引数で渡されるcallback関数の定義によらず、voidが戻り値となる。
function doubleAndHandle2(num, callback) {
    var doubleNum = num * 2;
    var callbackResult2 = callback(doubleNum); // const callbackResult2: void
    console.log(callbackResult2);
}
doubleAndHandle2(3, function (doubleNumber) {
    return doubleNumber * 2;
});
// -------------------------------
// unknown
// -------------------------------
// any に近いが、any より少し厳しい型と考える
var unknownInput1;
var anyInput1;
unknownInput1 = 'hello';
unknownInput1 = 1;
unknownInput1 = true;
// 型を定義した後で、unknown型を代入することができない。
// any の場合は、定義を破壊して any に変えてしまう特徴があったが、unknown ではそうならない。
var text;
// text = unknownInput1; // Type 'unknown' is not assignable to type 'string'.
// -------------------------------
// never
//   ----> TypeScript ver.2から実装
// -------------------------------
// 決して何も返さない。という型
function error1(message) {
    throw new Error(message);
}
// 何も返さず、エラーを発生させて終了するようなとき、never を使う
// console.log(error1('error ocurred.'));
// 他には、while(true)などの無限に続くような処理で、never を使う
// 型推論を使った場合、書き方によって戻り値の型が変わる
// 通常の関数宣言では、戻り値は void として推論される。これは、後方互換性のため。
function error2(message) {
    throw new Error(message);
}
// 関数式では、戻り値は never として推論される。
var error3 = function error3(message) {
    throw new Error(message);
};
// アロー関数では、戻り値は never として推論される。
var error4 = function (message) {
    throw new Error(message);
};
console.log('type complete.');
