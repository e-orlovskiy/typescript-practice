class UserService {
	private static userList: any

	static {
		UserService.userList = [4, 4, 4]
	}

	static getUser(id: number) {
		console.log(1)
	}

	log() {
		console.log(2)
		UserService.getUser(0)
	}
}

UserService.getUser(1)

const test = new UserService()

test.log()
