"use strict";
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function recursion() {
    return recursion();
}
const a = undefined; // ok
// !ИСЧЕРПЫВАЮЩАЯ ПРОВЕРКА 1. SWITCH
// при вызове этой функции с reject мы получим runtime ошибку, хотя использование typescript подразумевает, что мы сводим такие ошибки к минимуму и стараемся отловить всё на этапе compile time
function processActionWithoutNever(action) {
    switch (action) {
        case 'refund':
            // ...
            break;
        case 'checkout':
            // ...
            break;
        default:
            throw new Error('no such action');
    }
}
// Поэтому тут мы и используем never
function processActionWithNever(action) {
    switch (action) {
        case 'refund':
            // ...
            break;
        case 'checkout':
            // ...
            break;
        // case 'reject':
        // 	// ...
        // 	break
        default:
            //const _: never = action // Ошибка, т.к. сузив типы, мы убрали refund и checkout и action теперь не never, а reject
            throw new Error('no such action');
    }
}
// !ИСЧЕРПЫВАЮЩАЯ ПРОВЕРКА 2 (редкий необычный кейс)
function isString(x) {
    if (typeof x == 'string') {
        return true;
    }
    else if (typeof x == 'number') {
        return false;
    }
    generateError('t');
}
