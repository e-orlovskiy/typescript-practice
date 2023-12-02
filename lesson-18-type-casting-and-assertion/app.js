"use strict";
// приведение типов
// стандартные типы:
let n1 = -5;
let s1 = n1.toString();
let s3 = new String('string').valueOf();
// ? проверить Boolean, Array, Object
// string != String
let s2 = 'any string';
let n2 = parseInt(s2);
const user1 = {
    name: 'Ivan',
    email: 'iv@mail.ru',
    login: 'vanya'
};
const user2 = {
    name: 'Ivan',
    email: 'iv@mail.ru',
    login: 'vanya'
};
// не рекомендуется
const user3 = {
    name: 'Ivan',
    email: 'iv@mail.ru',
    login: 'vanya'
};
const admin1 = Object.assign(Object.assign({}, user1), { roleId: 1 });
// 2 вариант
function userToAdmin(user2) {
    return {
        name: user2.name,
        roleId: 1
    };
}
