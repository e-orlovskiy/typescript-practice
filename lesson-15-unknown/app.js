"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let input;
input = 5;
input = ['fff', 51, false];
function fn(i) {
    if (typeof i == 'number')
        i++;
    else
        i;
}
fn(input);
// проблема any и unknown. Раньше ошибка была типом any, но после обновления ts стала unknown
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (err) {
            if (err instanceof Error)
                console.log(err.message);
        }
    });
}
function getData2() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (err) {
            const e = err; // допустимо лишь при полной уверенности
            console.log(e);
        }
    });
}
