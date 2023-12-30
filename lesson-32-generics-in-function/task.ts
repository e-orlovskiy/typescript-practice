/* 
  Задание:
  Написать функцию toString, используя дженерики, которая 
  принимает любой тип и возвращает его строковое представление. 
  Если сделать это не представляется возможным, то вернуть undefined
  При решении задачи используйте switch
*/

function toString<T>(data: T): string | undefined {
	if (Array.isArray(data)) {
		return data.toString()
	}
	switch (typeof data) {
		case 'string':
			return data
		case 'bigint':
		case 'boolean':
		case 'function':
		case 'number':
		case 'symbol':
			return data.toString()
		case 'object':
			return JSON.stringify(data)
		default:
			return undefined
	}
}

console.log(toString(5))
console.log(toString('f'))
console.log(toString([]))
console.log(toString({}))
console.log(toString(true))
