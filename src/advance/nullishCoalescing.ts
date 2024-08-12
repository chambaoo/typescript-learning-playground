// Null合体演算子

interface Card {
    id: string;
    cardType?: 'soft' | 'hard';
    size?: number;
    content? : {
        title?: string;
        subtitle?: string;
        body?: string;
    }
}

const postCard: Card = {
    id: 'asaoprp9032',
    content: {
        title: '暑中見舞',
        body: ''
    }
}


console.log(postCard?.size);
console.log(postCard?.content?.title);
console.log(postCard?.content?.subtitle ?? 'サブタイトルなし');
console.log(postCard?.content?.body ?? '本文なし'); // 出力は「」空文字
console.log(postCard?.content?.body ? postCard?.content?.body : '本文なし'); // 出力は「本文なし」
console.log(postCard?.content?.body || '本文なし'); // 出力は「本文なし」

