type PaymentStatus = 'new' | 'paid'

class Payment {
	id: number
	status: PaymentStatus = 'new'

	constructor(id: number) {
		this.id = id
	}

	pay() {
		this.status = 'paid'
	}
}

class APayment extends Payment {
	databaseId: number
	paidAt: Date

	constructor() {
		super(Math.random())
	}

	save() {
		// save into DB
	}

	override pay(date?: Date) {
		super.pay()
		if (date) {
			this.paidAt = date
		}
	}
}

class User {
	name: string = 'user'

	constructor() {
		console.log(this.name)
	}
}

class Admin extends User {
	name: string = 'admin'

	constructor() {
		super()
		console.log(this.name)
	}
}

new Admin()

class HttpError extends Error {
	code: number

	constructor(message: string, code?: number) {
		super(message)
		this.code = code ?? 500
	}
}
