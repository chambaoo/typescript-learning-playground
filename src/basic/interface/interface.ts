type HumanType = {
    name: string;
    age: number;
} | string;

interface HumanInterface {
    // readonly のみ、使用可能。
    // public, private 等は使えない。
    // private name: string; // 'private' modifier cannot appear on a type member.ts(1070)
    readonly name: string;
    age: number;
    greet(message: string): void;
// } | string; // interface では、オブジェクトのみを扱う。
}

const human: HumanInterface = {
    name: 'Natsume',
    age: 18,
    greet(message: string) {
        console.log(message);
    }
}

human.greet('hi.');


class Developer implements HumanInterface {
    // name は interface で readonly であっても、実装時には public にすることができる。
    constructor(public name: string, public age: number, public experience: number){};
    greet(message: string): void {
        console.log(message);
    }
}

const developer: HumanInterface = new Developer('Meta', 33, 13);
// console.log(developer.experience); // 継承先のプロパティにはアクセスできない


// -------------------------------
// extends
// -------------------------------
type NameTagType = {
    nameTag: string;
}

type NameTagInterface = {
    nameTag: string;
}

interface Server extends NameTagType, NameTagInterface {
    name: string;
    nameTag: string;
    // 同じ名前でも互換性があれば、再宣言が可能。
    
    // nameTag: any; // これも可能だが、anyで上書きすることになる。
    
    // nameTag: number; 
    // ↑これは、互換性のない型なので不可
    // Types of property 'nameTag' are incompatible.
    // Type 'number' is not assignable to type 'string'.
}



// -------------------------------
// function type alias
// -------------------------------
// 関数の型を type を使って定義する
// type addFuncType = (num1: number, num2: number) => number;
// let addFunc: addFuncType;

// addFunc = (n1: number, n2: number) => {
//     return n1 + n2;
// }

// interface でも定義できる（関数もオブジェクトであり、interface を使用可能）
// オブジェクトと混同するので、以下の書き方はあまり推奨はしない。
interface addFuncInterface {
    // method 名を書かない（無名関数のような書き方）
    // call signature
    (num1: number, num2: number): number;

    // constructor signature
    // new キーワードを付けると、コンストラクタ関数となり、オブジェクトのコンストラクタとなる。
    // 戻り値は関数の戻り値。この場合は、numberとなる。
    // new(num1: number, num2: number): number;
}
let addFunc: addFuncInterface;

addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}


// -------------------------------
// optional parameter
// -------------------------------

type Ticket1 = {
    name: string;
    isUsed: boolean;
    // プロパティそのものが、存在しないことを許容する場合は、「?」を使用する
    expired?: Date;
    // プロパティは必須だが、値がundefinedを許容する場合は、Unionを使用する
    id: number | undefined;
    use?(): void;
}

interface ExhibitionTicket1 extends Ticket1 {
    place: string;
}

class MangaExhibitionTicket implements ExhibitionTicket1 {
    id: number | undefined;
    name: string;
    place: string;
    isUsed: boolean;
    
    // デフォルト引数にする
    // 省略可能な引数は、必須の引数の後ろに書かないと、コンパイルエラーになる。
    constructor(name: string, place: string, isUsed: boolean = false) {
        this.name = name;
        this.place = place;
        this.isUsed = isUsed;
    }

    use = () => {
        if (this.isUsed) throw new Error('This ticket is already used.');
        this.isUsed = true;
    }
}

// const meikyuTansaku = new MangaExhibitionTicket('迷宮探索', '京都');
// undefined を明示的に引数に渡した場合も、デフォルトパラメータが適用される。（結果は↑の行と同じになる。）
const meikyuTansaku = new MangaExhibitionTicket('迷宮探索', '京都', undefined);

console.log(meikyuTansaku);
meikyuTansaku.use();
console.log(meikyuTansaku);

