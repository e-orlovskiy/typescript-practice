function getFirstHalfOfArray<T>(data: Array<T>): Array<T> {
	let halfLength = data.length / 2
	return data.splice(0, halfLength)
}

console.log(getFirstHalfOfArray([5, 1, 3, 5]))
console.log(getFirstHalfOfArray([true, false, true]))
