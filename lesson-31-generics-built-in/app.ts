function fn<T>(arg: T): T {
	return arg
}

const arr: Array<number> = [1, 2, 3]

async function test() {
	const a = await new Promise<string>((res, rej) => {
		res('1')
	})
}

const list: Record<string, boolean> = {
	test1: true,
	test2: false
}
