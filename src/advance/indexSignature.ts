// オブジェクトのメンバーを追加できる

interface Photo {
    name: string;
}

const item: Photo = {
    name: 'sunset'
}
// item.newProperty = 'cannot add'; // プロパティ 'newProperty' は型 'Photo' に存在しません。

interface Printer {
    id: number;
    [x: string]: number;
    // [y: string]: number; // 型 'string' のインデックス シグネチャが重複しています。ts(2374)
    // [z: number]: string; // 型 'number' のプロパティ 'id' は'string' インデックス型 'string' に割り当てることはできません。
}
