"use strict";
const catQuest = {
    title: 'cat quest',
    genre: 'RPG',
    play: (userName) => {
        console.log(`${userName}さんでプレイ中。`);
    }
};
catQuest.play('Mikan');
// Mikanさんでプレイ中。
const blocks = {
    title: "Blocks",
    genre: "Puzzle",
    play: function (userName) {
        console.log(`${userName}さんで${this.title}をプレイ中！ジャンル: ${this.genre}`);
    }
};
blocks.play('Omochi');
// OmochiさんでBlocksをプレイ中！ジャンル: Puzzle
// -------------------------------
// object.function.call(this, params...)
// -------------------------------
blocks.play.call(catQuest, 'Mitsume');
// cat questをプレイ中！ジャンル: RPG
//# sourceMappingURL=this.js.map