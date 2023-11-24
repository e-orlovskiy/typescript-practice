// type alias для примитива
type UserName = string
let userTest: UserName = 'John'

// type alias для union типов
type ID = number | string
let userId: ID = 123
let username: ID = 'John'

// type alias для объекта
type Point = {
	x: number
	y: number
	color?: 'red' | 'green' | 'blue'
}
let point: Point = { x: 10, y: 20 }

// type alias для функции
type Greeting = (name: string) => string
let greet: Greeting = (name) => `Hello, ${name}!`

// intersection

type Person = {
	name: string
	age: number
}

type Employee = {
	employeeId: string
	position: string
}

// Intersection типов
type EmployeePerson = Person & Employee

// Использование
let employeePerson: EmployeePerson = {
	name: 'John',
	age: 30,
	employeeId: 'E123',
	position: 'Software Engineer'
}

// Composition

type User = {
	name: string
	age: number
	skills: string[]
}

type Role = {
	name: string
	id: number
}

type UserWithRole = {
	user: User
	role: Role
}

let user: UserWithRole = {
	user: {
		name: 'Иван',
		age: 50,
		skills: ['backend', 'frontend', 'design']
	},
	role: {
		name: 'software engineer',
		id: 55
	}
}
