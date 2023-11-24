'use strict'
const logId = (id) => {
	console.log('id')
}
console.log(logId(5))
// тип возвращаемой функции number | undefined
const mult = (f, s) => {
	if (!s) {
		return f * f
	}
}
mult(5)
const f1 = () => {}
const f2 = () => {
	return 2
}
let b = f2()
// forEach + push
// forEach ничего не возвращает
// push по сути добавляет элемент и возвращает новую длину массива
// благодаря void такой функционал допустим и эта связка работает правильно
let arr = ['str1', 'str2']
const arrStr = []
arr.forEach((str) => {
	arrStr.push(str)
})
