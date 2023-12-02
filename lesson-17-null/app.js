"use strict";
function getUser() {
    if (Math.random() < 0.5) {
        return null;
    }
    else {
        return {
            name: 'Ivan'
        };
    }
}
const user = getUser();
// const nameOfUser = user.name // ошибка: возможно user имеет значение null
if (user) {
    const nameOfUser = user.name;
    console.log(nameOfUser);
}
