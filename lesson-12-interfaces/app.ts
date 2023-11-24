// работа с interface и extends
interface User {
	name: string
	age: number
	skills: string[]
}

interface Role {
	role: 'back end developer' | 'front end developer'
}

interface UserWithRole extends User, Role {
	createdAt: Date
}

let user: UserWithRole = {
	name: 'Иван',
	age: 30,
	skills: ['навык 1', 'навык 2'],
	role: 'back end developer',
	createdAt: new Date()
}

// доопределение интерфейса
interface Person {
	name: string
}

interface Person {
	age: number
}

const person: Person = {
	name: 'Иван',
	age: 30
}
