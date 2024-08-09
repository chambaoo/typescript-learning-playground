type Game = {
    title: string;
    genre: 'RPG' | 'Action' | 'Puzzle';
    play: (userName: string) => void;
  };
  

const catQuest: Game = {
    title: 'cat quest',
    genre: 'RPG',
    play: (userName: string) => {

        console.log(`${userName}さんでプレイ中。`);

    }

}


catQuest.play('Mikan');
// Mikanさんでプレイ中。

const blocks: Game = {
    title: "Blocks",
    genre: "Puzzle",
    play: function(userName: string) {
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

