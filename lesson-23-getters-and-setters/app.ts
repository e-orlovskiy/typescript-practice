class User {
	_login: string
	_password: string
	createdAt: Date

	set login(loginArg: string | number) {
		this._login = 'userLogin: ' + loginArg
		this.createdAt = new Date()
	}

	get login() {
		return this._login
	}

	set password(passwordArg: string) {
		// sync
	}

	async getPassword(passwordArg: string) {
		// async
	}
}

const user = new User()
console.log(user)
user.login = 'test'
console.log(user)
console.log(user.login)
user.login = 'fasdf'
