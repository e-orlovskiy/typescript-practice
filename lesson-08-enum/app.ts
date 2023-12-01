// res - ответ от сервера

// статусы платежа:
// 1 - successfully
// 2 - in progress
// 3 - rejected

// ! Пример без enums
const resWithoutEnums = {
	message: 'The payment is successful',
	statusCode: 1
}

// не используя enums в statusCode можно случайно передать что то не то.
if (resWithoutEnums.statusCode === 10) {
	// statusCode - валидный, но мы опечатались и получим ошибку в runTime
}

// ! Пример с enums
enum StatusCode {
	// enum могуть быть не только числовыми
	SUCCESS = 1,
	IN_PROGRESS = 2,
	FAILED = 3
}

const resWithEnums = {
	message: 'The payment is successful',
	statusCode: StatusCode.SUCCESS
}

// в statusCode мы теперь не можем использовать другие значения
// if (resWithEnums.statusCode === 1) // также не будет ошибкой, с 4 уже будут ошибки, т.к. наши enums хранят только 1, 2, 3
if (resWithEnums.statusCode === StatusCode.SUCCESS) {
	// ещё на этапе написания кода мы увидим, если сюда будет передано неверное значение
}
