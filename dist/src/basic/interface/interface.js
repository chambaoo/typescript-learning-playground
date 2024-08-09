"use strict";
const human = {
    name: 'Natsume',
    age: 18,
    greet(message) {
        console.log(message);
    }
};
human.greet('hi.');
class Developer {
    name;
    age;
    experience;
    // name は interface で readonly であっても、実装時には public にすることができる。
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    ;
    greet(message) {
        console.log(message);
    }
}
const developer = new Developer('Meta', 33, 13);
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
class MangaExhibitionTicket {
    id;
    name;
    place;
    isUsed;
    // デフォルト引数にする
    // 省略可能な引数は、必須の引数の後ろに書かないと、コンパイルエラーになる。
    constructor(name, place, isUsed = false) {
        this.name = name;
        this.place = place;
        this.isUsed = isUsed;
    }
    use = () => {
        if (this.isUsed)
            throw new Error('This ticket is already used.');
        this.isUsed = true;
    };
}
// const meikyuTansaku = new MangaExhibitionTicket('迷宮探索', '京都');
// undefined を明示的に引数に渡した場合も、デフォルトパラメータが適用される。（結果は↑の行と同じになる。）
const meikyuTansaku = new MangaExhibitionTicket('迷宮探索', '京都', undefined);
console.log(meikyuTansaku);
meikyuTansaku.use();
console.log(meikyuTansaku);
//# sourceMappingURL=interface.js.map