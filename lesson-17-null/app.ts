// представим что есть функция, которая получает полльзователя с 50% шансом, в противном случае она вернёт null
// null - используем когда хотим явно задать несуществующее значение
interface User {
	name: string
}

function getUser() {
	if (Math.random() < 0.5) {
		return null
	} else {
		return {
			name: 'Ivan'
		} as User
	}
}

const user = getUser()
// const nameOfUser = user.name // ошибка: возможно user имеет значение null
if (user) {
	const nameOfUser = user.name
	console.log(nameOfUser)
}
