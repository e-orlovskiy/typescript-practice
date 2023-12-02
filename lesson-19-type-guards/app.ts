interface User {
	name: string
	email: string
	login: string
}

const user: User = {
	name: 'ivan',
	email: 'ivan@mail.ru',
	login: 'vanya'
}

interface Admin {
	name: string
	roleId: number
}

function logId(id: string | number) {
	if (typeof id === 'string') {
		console.log(id) // строка
	} else {
		console.log(id) // число
	}
	console.log(id) // строка | число -
}

// typeguard usage

function isString(x: string | number): x is string {
	// ретёрнится не boolean, а спец. тип для typeguards
	// такие функции не могут быть асинхронными
	return typeof x === 'string'
}

function isAdmin(user: User | Admin): user is Admin {
	return 'role' in user
}

function isAdmin2(user: User | Admin): user is Admin {
	return (user as Admin).roleId !== undefined
}

function setRoleZero(user: User | Admin) {
	if (isAdmin(user)) {
		user.roleId = 0 // лучше не менять исходный объект
	} else {
		throw new Error('не админ')
	}
}

interface Person {
	name: string
	age: number
}

function isPerson(obj: any): obj is Person {
	return 'name' in obj && 'age' in obj
}
