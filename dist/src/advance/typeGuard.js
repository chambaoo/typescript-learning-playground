"use strict";
// 型ガード
// JSでも同じものを使用できる
// -------------------------------
// typeof
// -------------------------------
function toUpperCase(x) {
    // プロパティ 'toUpperCase' は型 'string | number' に存在しません。
    // プロパティ 'toUpperCase' は型 'number' に存在しません。
    // x.toUpperCase();
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    else {
        return '';
    }
}
console.log(toUpperCase('this is string.'));
console.log(toUpperCase(33));
function describeProfile(guitarVocal) {
    console.log(guitarVocal.name);
    // if exists 'guitar' property?
    if ('guitar' in guitarVocal) {
        console.log(guitarVocal.guitar);
    }
    // if exists 'voice' property?
    if ('voice' in guitarVocal) {
        console.log(guitarVocal.voice);
    }
}
const matthew = {
    name: 'Matthew',
    guitar: 'Manson',
    voice: 'rock'
};
const miku = {
    name: 'Miku',
    voice: 'electro'
};
describeProfile(matthew);
describeProfile(miku);
// -------------------------------
// instanceOf
// -------------------------------
class Dog {
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    // class であれば、instanceof を使用することができる
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
console.log('Dog instance:');
havePet(new Dog());
console.log('Bird instance:');
havePet(new Bird());
// fly() を持つオブジェクトでも、Birdインスタンスではないので、flyは呼び出されない。
console.log('Birdish object:');
havePet({
    speak() { console.log('nyan'); },
    fly() {
        console.log('呼ばれない。');
    },
});
//# sourceMappingURL=typeGuard.js.map