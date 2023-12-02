"use strict";
const user = {
    name: 'ivan',
    email: 'ivan@mail.ru',
    login: 'vanya'
};
function logId(id) {
    if (typeof id === 'string') {
        console.log(id); // строка
    }
    else {
        console.log(id); // число
    }
    console.log(id); // строка | число -
}
// typeguard usage
function isString(x) {
    // ретёрнится не boolean, а спец. тип для typeguards
    // такие функции не могут быть асинхронными
    return typeof x === 'string';
}
function isAdmin(user) {
    return 'role' in user;
}
function isAdmin2(user) {
    return user.roleId !== undefined;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.roleId = 0; // лучше не менять исходный объект
    }
    else {
        throw new Error('не админ');
    }
}
