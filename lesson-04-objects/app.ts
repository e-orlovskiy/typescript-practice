function getFullName(userInfo: { firstname: string; surname: string }): string {
	return `${userInfo.firstname} ${userInfo.surname}`
}

const user = {
	firstname: 'Иван',
	surname: 'Иванов',
	age: 40
}
