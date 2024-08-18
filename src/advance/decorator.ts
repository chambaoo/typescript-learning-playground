// class に適用させる関数

// 事前準備：
// tsconfig の設定が必要
// "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */


function Logging(constructor: Function) { // class の本質はコンストラクタ関数
    console.log('Log ... ');
    console.log(constructor);
}

@Logging
class Terminal {
    constructor() {
        console.log('terminal instance generated.');
    }
}

// デコレーターはインスタンスの生成時ではなく、クラスの定義時に実行される！

const terminal1 = new Terminal();
const terminal2 = new Terminal();
const terminal3 = new Terminal();


// decorator factory
// 引数を取るデコレーターを宣言できる

function LoggingFactory(message: string) {
    return function (constructor: Function) {
        console.log('Log factory ... ');
        console.log(message);
        console.log(constructor);
    }
}

@LoggingFactory('terminal emulate')
class TerminalEmulator {
    constructor() {
        console.log('terminal instance generated.');
    }
}

// デコレーターの使い道


