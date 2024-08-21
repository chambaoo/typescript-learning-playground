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


複数ファイルの手動コンパイル

```sh
tsc src/type/type.ts src/compile/compile.ts
```


### tsconfig

- tsconfig.json を作成する

```sh
tsc --init
```

```sh
tsc -w
```


#### .d.ts

型定義ファイルを出力する。自作ライブラリの使い方、ドキュメントを作成するオプション。

```json
    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
```

#### sourceMap

TypeScript をブラウザで解釈したいとき
jsファイルに以下のようなコメントが追記される。ブラウザ上でTypeScriptのデバッグなどをできるようになる。
//# sourceMappingURL=compile.js.map

##### defer
This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.

Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.

This attribute must not be used if the src attribute is absent (i.e. for inline scripts), in this case it would have no effect.

To achieve a similar effect for dynamically inserted scripts use async="false" instead. Scripts with the defer attribute will execute in the order in which they appear in the document.

#### strict

strict: true にした場合、strict項目のすべてがtrueになる。

```json
    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
```

## class

- クラスが生成するオブジェクトの型も同時に作っている。
- getter / setter の戻り値の型が同一でない場合、コンパイルエラーになる。
- extends で継承できるのは、一つのクラスだけ。

## interface

- type alias の object バージョンと考えられる。オブジェクトのエイリアス
- type は、オブジェクトも含め、プリミティブ型などすべてを扱う。
  - classは複数のtypeを実装できる。
- interface は、オブジェクトのみを扱う。
  - オブジェクトしか扱わないという制限をかけることができる。
  - classは複数のinterfaceを実装できる。
  - interfaceはinterfaceを複数継承できる。
- 構造的部分型
  - interface で定義していない実装クラスで追加されたプロパティ
  - 構造的部分型は、オブジェクトが持つプロパティの互換性を確認する
  - 対して、Java等の言語では公称型を採用している。型の名前や継承関係を確認する。
- 「?」 と 「 xxx | undefined」 の違い
  - 「?」 → プロパティ自体が、オプショナル
  - 「 xxx | undefined」 → プロパティは必須だが、値はオプショナル

## notes
// アロー関数はパフォーマンスが落ちる？

- constructor signiture
  - new():

- generics
  - 型を変数として扱うことができる
