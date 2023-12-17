class User {
	name: string

	constructor(name: string) {
		this.name = name
	}
}

class Users extends Array<User> {
	searchByName(name: string) {
		return this.filter((user) => user.name === name)
	}

	override toString(): string {
		return this.map((user) => user.name).join(', ')
	}
}

const users: Users = new Users(new User('nn'), new User('fadsf'), new User('fadsf'))

console.log(users.toString())
console.log(users.toLocaleString())

// -------

class User1 {
	name: string

	constructor(name: string) {
		this.name = name
	}
}

class UserClassRealization {
	users: User[]
	// ... методы для этого класса
}

class Payment {
	date: Date
}

// неправильно
class UserWithPayment extends Payment {
	userId: number
	name: string
}

// правильно
class UserWithPayment2 {
	user: User
	payment: Payment

	constructor(user: User, payment: Payment) {
		this.user = user
		this.payment = payment
	}
}
