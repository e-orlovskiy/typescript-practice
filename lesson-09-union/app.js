'use strict'
const logData = (data) => {
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
const logData2 = (data) => {
	if (Array.isArray(data)) {
		console.log(data)
	} else {
		console.log(data)
	}
}
const logData3 = (data) => {
	if ('a' in data) {
		console.log(data.a)
	} else {
		console.log(data.b)
	}
}
const logData4 = (a, b) => {
	if (typeof a === typeof b) {
		// могу обращаться к a и b как к строкам
		console.log(a, b)
	} else {
		console.log(a)
	}
}
logData(1)
logData2(['hi', 'bye'])
logData3({ a: 500 })
logData4('s1', 's2')
