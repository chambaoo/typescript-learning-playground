// -------------------------------
// generics in function
// -------------------------------
// 型を引数として受け取り、一般的な関数を作る

// any
function copyAny(value: any) {
    return value;
}

console.log(copyAny(232)); // 戻り値の型推論が効かない。


// -------------------------------
// generics
// -------------------------------

function copy<T>(value: T): T { // T = type (asjeoaejpなど任意の文字も指定可能)
    return value;
}

console.log(copy<string>('yes').toUpperCase());

console.log(copy({ name: 'Nick'}).name); // <>で指定しなくても、型推論される

// -------------------------------
// generics & extends
// -------------------------------
// generics に extends で制約をつける
function copy2<T extends { name: string}>(value: T): T {
    return value;
}

console.log(copy2({ name: 'Nick'}).name);



// -------------------------------
// keyof 演算子
// -------------------------------
// object の子keyをUnion型で取得する
// type type key = "name" | "age" | "content"　(title, bodyは孫移行なので無視される)
type key = keyof { name: string, age: number, content: { title: string, body: string } }

function copy3<T extends { name: string }, U extends keyof T>(value: T, key: U): T[U] {
    return value[key];
}

console.log(copy3({ name: 'endo', age: 3}, 'age'));


// -------------------------------
// generics in class
// -------------------------------
class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getAll() {
        return this.data;
    }
}

// 先に決めた型だけを許容するので、型安全な実装が可能
const database1 = new LightDatabase<string>;
database1.add('coffee');
// database1.add(125); // 型 'number' の引数を型 'string' のパラメーターに割り当てることはできません
database1.add('tea');
database1.add('green tea');
console.log(database1.getAll());
database1.remove('tea');
console.log(database1.getAll());


// -------------------------------
// generics in interface
// -------------------------------
interface IDatabase<T> {
    id: number;
    data: T[];
}

const database2: IDatabase<number> = {
    id: 3,
    data: [2, 3, 5, 7, 11]
}

console.log(database2);

// -------------------------------
// utility type
// -------------------------------
// Partialを使用した型のライブラリ

interface Todo {
    title: string;
    text: string;
}

type Todoable = Partial<Todo>
// Partial ---> properties は、optional になる
// type Todoable = {
//     title?: string | undefined;
//     text?: string | undefined;
// }

type TodoReadonly = Readonly<Todo>
// Readonly ---> properties は、readonly になる
// type TodoReadonly = {
//     readonly title: string;
//     readonly text: string;
// }

const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
})

fetchData.then(data => {
    // interface Promise<T>
    data.toUpperCase();
})

const sports1: string[] = ['soccer', 'baseball', 'basketball'];
// const sports1: string[]

// interface Array<T> を使用しても、同じように配列宣言できる
const sports2: Array<string> = ['soccer', 'baseball', 'basketball'];
// const sports2: string[]

// -------------------------------
// generic default type
// -------------------------------

interface ResponseData<T extends { items: string[], total: number } = any> {
    data: T;
    status: number;
}

let response1: ResponseData<{ items: [], total: 0}>; // ジェネリック型 'ResponseData<T>' には 1 個の型引数が必要です。
let response2: ResponseData;

// -------------------------------
// mapped type
// -------------------------------
// utility の内部で使用されていることがある。

type MappedTypes1 = {
    [P in 'Rabbit' | 'Dog' | 'Bird']: P
}
// type MappedTypes1 = {
//     Rabbit: "Rabbit";
//     Dog: "Dog";
//     Bird: "Bird";
// }

type MappedTypes2 = {
    [P in 'Rabbit' | 20 | 'Bird']: P
}
// type MappedTypes2 = {
//     Rabbit: "Rabbit";
//     Bird: "Bird";
//     20: 20;
// }

interface MapVegitables {
    pumpkin: string;
    tomato: string;
    readonly cucamber: string;
}

type MappedTypes3 = {
    [P in keyof MapVegitables]: string
}

let temp: keyof MapVegitables;


type MappedTypes4 = {
    readonly [P in keyof MapVegitables]?: string
}
// type MappedTypes4 = {
//     readonly pumpkin?: string | undefined;
//     readonly tomato?: string | undefined;
//     readonly cucamber?: string | undefined;
// }

type MappedTypes5 = {
    -readonly [P in keyof MapVegitables]?: string
}
// -readonly でreadonlyの指定が消える
// type MappedTypes5 = {
//     pumpkin?: string | undefined;
//     tomato?: string | undefined;
//     cucamber?: string | undefined;
// }



