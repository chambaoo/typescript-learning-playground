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