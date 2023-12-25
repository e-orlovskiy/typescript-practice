abstract class Logger {
	abstract log(message: string): void
	printDate(date: Date): void {
		console.log(String(date))
	}
}

class RealLogger extends Logger {
	log(message: string): void {
		console.log(message)
	}

	logWithDate(message: string): void {
		this.printDate(new Date())
		this.log(message)
	}
}

new RealLogger().logWithDate('hello')
