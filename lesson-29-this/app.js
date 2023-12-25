'use strict'
class Payment {
	constructor() {
		this.date = new Date()
		this.getDate2 = () => {
			return this.date
		}
	}
	getDate() {
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
	setName(name) {
		this.name = name
		return this
	}
	isAdmin() {
		return this instanceof AdminBuilder
	}
}
class AdminBuilder extends UserBuilder {}
const user1 = new UserBuilder().setName('Иван')
const user2 = new AdminBuilder().setName('Андрей')
console.log(user1.isAdmin())
console.log(user2.isAdmin())
let anyUser = new UserBuilder()
