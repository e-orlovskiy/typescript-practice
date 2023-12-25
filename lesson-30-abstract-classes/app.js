"use strict";
// abstract - модификатор класса
// при добавлении такого модификатора мы не можем его инстанциировать
// new Controller - ошибка
// мы сможем инстанциировать только те классы, которые от него наследуются
// -----
class Controller {
    // преимущество абстрактных классов над интерфейсами заключается в том, что его
    // методы и свойства могут быть необязательно абстрактными
    handleNonAbstract(req) {
        console.log('test');
        this.handle(req);
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
const user = new UserController();
user.handleNonAbstract('test111');
