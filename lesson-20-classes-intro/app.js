"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
// мы можем использовать класс как интерфейс для объектов
// поэтому зачастую в конфигах:
// strictPropertyInitialization:false
// это можно заменить "!" в свойстве класса
// в последствии будем выставлять это значение в false
const user = new User('Иван');
console.log(user);
user.name = 'Илья';
console.log(user);
class Admin {
}
const admin = new Admin();
admin.role = 1;
console.log(admin);
