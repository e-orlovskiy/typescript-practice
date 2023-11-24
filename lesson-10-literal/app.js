'use strict'
//? при таком объявлении, в качестве метода, мы сможем передать что угодно, хотя должны передавать только GET или POST
function fetchWithAuth1(url, method) {}

//! вариант решения с использованием enum
var RequestType
;(function (RequestType) {
	RequestType['GET'] = 'get'
	RequestType['POST'] = 'post'
})(RequestType || (RequestType = {}))
function fetchWithAuth2(url, method) {}

//! вариант решения с использованием literal types
function fetchWithAuth3(url, method) {}
fetchWithAuth3('anyUrl', 'post')
fetchWithAuth3('anyUrl', 'get')
// fetchWithAuth3('anyUrl', 'anyting else') // ошибка

//* Можно, также использовать литеральные типы для указания возвращаемых значений для функции:
function fetchWithAuth4(url, method) {
	// return 0 будет ошибка
	return -1
}

//* Преобразование типов при помощи as
let method = 'post'
function fetchWithAuth5(url, method) {}
fetchWithAuth5('anyUrl', 'post')
// fetchWithAuth5('anyUrl', method) // ошибка
fetchWithAuth5('anyUrl', method) // нет ошибки
