class User {
	public name: string
	private password: string = 'ffff'
	private _email: string
	protected favorite_numbers: number[]
	#prop: any

	set email(newEmail: string) {
		this._email = newEmail
	}

	get email() {
		return this._email
	}

	changePassword(newPass: string) {
		this.password = newPass
		this.#prop = newPass
	}
}

console.log(new User().changePassword('444'))

class VerifiedUser extends User {
	setFavNumbers(n: number) {
		this.favorite_numbers.push(n)
	}
}
