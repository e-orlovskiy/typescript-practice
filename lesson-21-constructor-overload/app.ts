class User {
	name: string
	age: number

	constructor(name: string)
	constructor(age: number)
	constructor(name: string, age: number)
	constructor(ageOrName?: string | number, age?: number) {
		if (typeof ageOrName === 'string') {
			this.name = ageOrName
		} else if (typeof ageOrName === 'number') {
			this.age = ageOrName
		}
		if (typeof age === 'number') {
			this.age = age
		}
	}
}

const user = new User('55', 55)
console.log(user)
