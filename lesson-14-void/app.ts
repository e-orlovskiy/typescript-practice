const logId = (id: string | number): void => {
	console.log('id')
}

console.log(logId(5))

// тип возвращаемой функции number | undefined
const mult = (f: number, s?: number) => {
	if (!s) {
		return f * f
	}
}

console.log(mult(5, 5))

// кейс использования void
// эта запись говорит нам о том, что мы можем вернуть что угодно, но этот возврат в результате будет проигнорировано
// с помощью void мы можем обозначить некоторую группу функций, которые будут выполнять с какими-то входными параметрами, но возвращать нам ничего не нужно и мы будем это игнорировать
type voidFn = () => void

const f1: voidFn = () => {}
const f2: voidFn = () => {
	return 2
}
let a = f1()
let b = f2()

console.log(b)

// forEach + push
// forEach ничего не возвращает
// push по сути добавляет элемент и возвращает новую длину массива
// благодаря void такой функционал допустим и эта связка работает правильно
let arr = ['str1', 'str2']
const arrStr: string[] = []
arr.forEach((str) => arrStr.push(str))
