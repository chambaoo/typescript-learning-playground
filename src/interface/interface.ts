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



// -------------------------------
// optional parameter
// -------------------------------

