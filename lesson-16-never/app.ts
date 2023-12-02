function dumpError(): never {
	while (true) {}
}

function recursion(): never {
	return recursion()
}

const a: void = undefined // ok
// const a: never = undefined // error

// кейсы использования never

type paymentAction = 'refund' | 'checkout' // 'reject - изначально не существовал а добавился по мере развития проекта'

// !ИСЧЕРПЫВАЮЩАЯ ПРОВЕРКА 1. SWITCH
// при вызове этой функции с reject мы получим runtime ошибку, хотя использование typescript подразумевает, что мы сводим такие ошибки к минимуму и стараемся отловить всё на этапе compile time
function processActionWithoutNever(action: paymentAction) {
	switch (action) {
		case 'refund':
			// ...
			break
		case 'checkout':
			// ...
			break
		default:
			throw new Error('no such action')
	}
}
// Поэтому тут мы и используем never
function processActionWithNever(action: paymentAction) {
	switch (action) {
		case 'refund':
			// ...
			break
		case 'checkout':
			// ...
			break
		// case 'reject':
		// 	// ...
		// 	break
		default:
			// const _: never = action // Ошибка, т.к. сузив типы, мы убрали refund и checkout и action теперь не never, а reject
			throw new Error('no such action')
	}
}

function generateError(message: string): never {
	throw new Error(message)
}

// !ИСЧЕРПЫВАЮЩАЯ ПРОВЕРКА 2 (редкий необычный кейс)
function isString(x: string | number): boolean {
	if (typeof x == 'string') {
		return true
	} else if (typeof x == 'number') {
		return false
	}
	generateError('t')
}
