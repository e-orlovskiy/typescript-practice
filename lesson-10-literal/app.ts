//? при таком объявлении, в качестве метода, мы сможем передать что угодно, хотя должны передавать только GET или POST
function fetchWithAuth1(url: string, method: string) {}

//! вариант решения с использованием enum
enum RequestType {
	GET = 'get',
	POST = 'post'
}
function fetchWithAuth2(url: string, method: RequestType) {}

//! вариант решения с использованием literal types
function fetchWithAuth3(url: string, method: 'post' | 'get') {}

fetchWithAuth3('anyUrl', 'post')
fetchWithAuth3('anyUrl', 'get')
// fetchWithAuth3('anyUrl', 'anyting else') // ошибка

//* Можно, также использовать литеральные типы для указания возвращаемых значений для функции:
function fetchWithAuth4(url: string, method: 'post' | 'get'): -1 | 1 {
	// return 0 будет ошибка
	return -1
}

//* Преобразование типов при помощи as
let method = 'post'
function fetchWithAuth5(url: string, method: 'post' | 'get') {}

fetchWithAuth5('anyUrl', 'post')
// fetchWithAuth5('anyUrl', method) // ошибка
fetchWithAuth5('anyUrl', method as 'post') // нет ошибки
