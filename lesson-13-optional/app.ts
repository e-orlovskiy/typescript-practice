interface User {
	login: string
	age: number
	anyNumber?: number
}

const user: User = {
	login: 'Иван',
	age: 20
}

interface User2 {
	login: string
	password?: {
		type: 'primary' | 'secondary'
		text: string
		token: string
	}
}

function testPass(user: User2) {
	const t1 = user.password?.token
	const t2 = user.password!.token
	const t3 = user.password ? user.password.token : undefined
}

function fn(a: string): string {
	return `string ${a}`
}

function test(param?: string) {
	const t = param ?? fn('test') // если param === null или param === undefined
}
