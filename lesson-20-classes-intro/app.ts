class User {
	name: string

	constructor(name: string) {
		this.name = name
	}
}
const user = new User('Иван')

// мы можем использовать класс как интерфейс для объектов
// поэтому зачастую в конфигах:
// strictPropertyInitialization:false
// это можно заменить "!" в свойстве класса
// в последствии будем выставлять это значение в false

console.log(user)
user.name = 'Илья'
console.log(user)

class Admin {
	role!: number // if (strictPropertyInitialization: true)
}

const admin = new Admin()
console.log(admin)
admin.role = 1

console.log(admin)
