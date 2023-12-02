// приведение типов

// стандартные типы:
let n1 = -5
let s1: string = n1.toString()
let s3: string = new String('string').valueOf()
// ? проверить Boolean, Array, Object
// string != String

let s2 = 'any string'
let n2: number = parseInt(s2)

// объекты
interface User {
	name: string
	email: string
	login: string
}

const user1: User = {
	name: 'Ivan',
	email: 'iv@mail.ru',
	login: 'vanya'
}

const user2 = {
	name: 'Ivan',
	email: 'iv@mail.ru',
	login: 'vanya'
} as User

// не рекомендуется
const user3 = <User>{
	name: 'Ivan',
	email: 'iv@mail.ru',
	login: 'vanya'
}

// преобразование одного объекта к другому

// 1 вариант (не рекомендуется):
// в admin1 будут ненужные поля из user1, которые нельзя будет увидеть в complile time
interface Admin {
	name: string
	roleId: number
}

const admin1: Admin = {
	...user1,
	roleId: 1
}

// 2 вариант
function userToAdmin(user2: User): Admin {
	return {
		name: user2.name,
		roleId: 1
	}
}

interface Car {
	brand: string
	speed: number
}

function displaySpeed(vehicle: Car | { speed: number }): void {
	if ('brand' in vehicle) {
		console.log(vehicle.speed) // TypeScript знает, что `vehicle` имеет свойство `speed`
	} else {
		console.log(vehicle) // TypeScript знает, что `vehicle` имеет только свойство `speed`
	}
}
