# work

## type

### TypeScript vs JavaScript

TypeScript は、tsc（TypeScriptコンパイラ）で型検査を行い、JavaScriptにトランスパイルされる。
JavaScript は、JavaScriptエンジンで型検査を行う。
TypeScript には、JavaScript よりも、多くの型が追加されている。

TypeScript : 静的型付け
JavaScript : 動的型付け

#### memo
enum は、jsにコンパイルされるときにオブジェクトが作られている。


## compile

### watch mode

```sh
tsc src/type/type.ts --watch
tsc src/type/type.ts -w
```

> **Note** ファイルの変更検知ができない
>
> WSL2で watch option を使用するも、ファイル保存時の変更検知が働かない。
> ローカルにインストールしている Git Bash で watch option が正常に使用できることを確認。
