enum PaymentStatus {
	Holded,
	Processed,
	Reversed
}

class Payment {
	id: number
	status: PaymentStatus = PaymentStatus.Holded
	createdAt: Date = new Date()
	updatedAt: Date

	constructor(id: number) {
		this.id = id
		this.createdAt = new Date()
		this.status = PaymentStatus.Processed
	}

	getPaymentLifeTime(): number {
		return new Date().getTime() - this.createdAt.getTime()
	}

	unholdPayment(): void {
		if (this.status === PaymentStatus.Processed) {
			throw new Error('payment can not be returned')
		}
		this.status = PaymentStatus.Reversed
		this.updatedAt = new Date()
	}
}

const payment1 = new Payment(1)

setTimeout(() => {
	console.log(payment1.getPaymentLifeTime())
}, 1000)
