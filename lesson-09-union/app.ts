const logData = (data: string | number | boolean) => {
	if (typeof data === 'string') {
		console.log(data)
	}
	if (typeof data === 'number') {
		console.log(data)
	}
	if (typeof data === 'boolean') {
		console.log(data)
	}
	return data
}

const logData2 = (data: string | string[]) => {
	if (Array.isArray(data)) {
		console.log(data)
	} else {
		console.log(data)
	}
}

const logData3 = (data: { a: number } | { b: number }) => {
	if ('a' in data) {
		console.log(data.a)
	} else {
		console.log(data.b)
	}
}

const logData4 = (a: string | number, b: string | boolean) => {
	if (typeof a === 'string') {
		a = a.slice(0, 1)
		// b = b.slice(0, 2)
	} else {
		console.log(a)
	}
}

logData(1)
logData2(['hi', 'bye'])
logData3({ a: 500 })
logData4('s1', 's2')
