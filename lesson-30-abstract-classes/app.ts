// abstract - модификатор класса
// при добавлении такого модификатора мы не можем его инстанциировать
// new Controller - ошибка
// мы сможем инстанциировать только те классы, которые от него наследуются
// -----

abstract class Controller {
	// абстрактные методы указывают нам, что в классах, которые будут наследовать класс
	// с абстрактными методами, нам нужно написать реализацию этого метода
	abstract handle(req: any): void
	// преимущество абстрактных классов над интерфейсами заключается в том, что его
	// методы и свойства могут быть необязательно абстрактными
	handleNonAbstract(req: any): void {
		console.log('test')
		this.handle(req)
	}
}

class UserController extends Controller {
	handle(req: any): void {
		console.log(req)
	}
}

const user = new UserController()
user.handleNonAbstract('test111')
