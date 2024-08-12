"use strict";
// Null合体演算子
const postCard = {
    id: 'asaoprp9032',
    content: {
        title: '暑中見舞',
        body: ''
    }
};
// optional chaining & nullish coalescing
console.log(postCard?.size);
console.log(postCard?.content?.title); // 'postCard.content' は 'undefined' の可能性があります。
console.log(postCard?.content?.subtitle ?? 'サブタイトルなし');
console.log(postCard?.content?.body ?? '本文なし'); // 出力は「」空文字
console.log(postCard?.content?.body ? postCard?.content?.body : '本文なし'); // 出力は「本文なし」
console.log(postCard?.content?.body || '本文なし'); // 出力は「本文なし」
// type content = {
//     title?: string;
//     subtitle?: string;
//     body?: string;
// } | undefined
//# sourceMappingURL=propertyAccess.js.map