"use strict";
// class に適用させる関数
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 事前準備：
// tsconfig の設定が必要
// "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
function Logging(constructor) {
    console.log('Log ... ');
    console.log(constructor);
}
let Terminal = class Terminal {
    constructor() {
        console.log('terminal instance generated.');
    }
};
Terminal = __decorate([
    Logging
], Terminal);
// デコレーターはインスタンスの生成時ではなく、クラスの定義時に実行される！
const terminal1 = new Terminal();
const terminal2 = new Terminal();
const terminal3 = new Terminal();
//# sourceMappingURL=decorator.js.map