[🔙](/README.md)

## Lesson #10. Aliases

### Использование types Aliases

Aliases в TypeScript позволяют создавать имена для существующих типов, включая примитивные типы, объединения, пересечения и пользовательские типы. Для их создания используется ключевое слово `type`

**Примеры использования:**

1. `type alias` для примитивов

```typescript
type UserName = string

let user: UserName = 'John'
```

2. `type alias` для union типов

```typescript
type ID = number | string

let userId: ID = 123
let username: ID = 'John'
```

3. `type alias` для объектов

```typescript
type Point = {
	x: number
	y: number
	color?: 'red' | 'green' | 'blue'
}
let point: Point = { x: 10, y: 20 }
```

### Intersection types

**Intersection** представляетт собой способ комбинирования нескольких типов в один. Интерсекция создается с использованием оператора "&". Результат интерсекции будет типом, который содержит все свойства и методы из каждого из комбинируемых типов.

пример:

```typescript
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

let employeePerson: EmployeePerson = {
	name: 'John',
	age: 30,
	employeeId: 'E123',
	position: 'Software Engineer'
}
```

Если при интерсекции возникают общие поля, то могут возникнуть проблемы, поэтому иногда лучше делать композицию. Например:

```typescript
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
```
