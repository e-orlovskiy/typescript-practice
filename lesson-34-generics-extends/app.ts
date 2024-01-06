class User {
	name: string
	age: number
}

function ageIncrease<T extends User>(user: T): T {
	user.age = user.age + 1 // свойство age не существует в типе T!
	return user
}

class Admin extends User {
	isAdmin: true
}

const user1 = ageIncrease(new User())
const user2 = ageIncrease(new Admin())

console.log(ageIncrease({ name: 'fff', age: 55 }))
// ageIncrease({ name: 'fff', age: true }) // ошибка!

function logId<T extends string | number, Y>(
	id: T,
	prop: Y
): { id: T; prop: Y } {
	console.log(id)
	console.log(prop)
	return { id, prop }
}
