function getFirstHalfOfArraay<T>(data: Array<T>): Array<T> {
	let length = data.length / 2
	return data.splice(0, length)
}

const split: <T>(data: Array<T>) => Array<T> = getFirstHalfOfArraay

console.log(getFirstHalfOfArraay([5, 3, 1, 3]))

// ------------

interface Itest<T> {
	date: Date
	someProp: T
}

const test: Itest<number> = {
	date: new Date(),
	someProp: 5
}

// мы передаем объект {t: true} в someProp
const test1: Itest<{ t: boolean }> = {
	date: new Date(),
	someProp: {
		t: false
	}
}

//  ----------------

type ttt<T> = {
	date: Date
	someProp: T
}

let test2: ttt<{ t: boolean; t2: boolean }>
