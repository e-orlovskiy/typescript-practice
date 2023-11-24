'use strict'
const user = {
	login: 'Иван',
	age: 20
}
function testPass(user) {
	var _a
	const t1 = (_a = user.password) === null || _a === void 0 ? void 0 : _a.token
	const t2 = user.password.token
	const t3 = user.password ? user.password.token : undefined
}
function fn(a) {
	return `string ${a}`
}
function test(param) {
	const t = param !== null && param !== void 0 ? param : fn('test') // если param === null или param === undefined
}
