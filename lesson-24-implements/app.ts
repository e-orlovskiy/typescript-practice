interface ILogger {
	log(...args: any): void
	error(...args: any): void
}

class Logger implements ILogger {
	log(...args: any[]): void {
		console.log(...args)
	}
	async error(...args: any[]): Promise<void> {
		console.log(...args)
	}
}

interface IPayable {
	pay(paymentId: number): void
	price?: number
}

class User implements IPayable, ILogger {
	log(...args: any): void {
		throw new Error('Method not implemented.')
	}
	error(...args: any): void {
		throw new Error('Method not implemented.')
	}
	pay(paymentId: number | string): void {
		throw new Error('Method not implemented.')
	}
	price?: number | undefined
}
