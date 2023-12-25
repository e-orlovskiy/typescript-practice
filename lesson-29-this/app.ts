class Payment {
	private date: Date = new Date()
	getDate(this: Payment) {
		return this.date
	}

	getDate2 = () => {
		return this.date
	}
}

const p = new Payment()

const user = {
	id: 1,
	paymentDate: p.getDate.bind(p),
	paymentDate2: p.getDate2
}

console.log(p.getDate())
console.log(user.paymentDate())
console.log(user.paymentDate2())

class Payment2 extends Payment {
	save() {
		// return super.getDate() всё ок
		// return this.getDate2() всё ок
		// return super.getDate2() здесь ошибка при использовании super и ()=>{}
	}
}

console.log(new Payment2().save())

// -------------------------------------------------------

class UserBuilder {
	name: string
	setName(name: string): UserBuilder {
		this.name = name
		return this
	}

	isAdmin(): this is AdminBuilder {
		return this instanceof AdminBuilder
	}
}

class AdminBuilder extends UserBuilder {
	roles: string[]
}

const user1 = new UserBuilder().setName('Иван')
const user2 = new AdminBuilder().setName('Андрей')

console.log(user1.isAdmin())
console.log(user2.isAdmin())

let anyUser: UserBuilder | AdminBuilder = new UserBuilder()
