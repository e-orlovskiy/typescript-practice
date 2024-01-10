class Resp<D, E> {
	data?: D
	error?: E

	constructor(data?: D, error?: E) {
		if (data) {
			this.data = data
		}
		if (error) {
			this.error = error
		}
	}
}

const res = new Resp<string, number>('data')
// const res = new Resp('data')
res.data
res.error

class HTTPResp extends Resp<string, number> {
	code: number

	setCode(code: number) {
		this.code = code
	}
}

const res2 = new HTTPResp()

class HTTPResp2<T> extends Resp<string, number> {
	code: T

	setCode(code: T) {
		this.code = code
	}
}

const res3 = new HTTPResp2()

class User<D, E> {
	constructor(public data: D, public error?: E) {}
}

class Admin<T, U> extends User<T, U> {
	constructor(data: T, error?: U, public email?: string) {
		super(data, error)
	}
}
