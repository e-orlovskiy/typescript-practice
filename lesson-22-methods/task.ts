class User {
	basket: string[]

	addProduct(product: string): void
	addProduct(product: string[]): void
	addProduct(product: string | string[]): void {
		if (typeof product === 'string') {
			this.basket.push(product)
		} else {
			this.basket.push(...product)
		}
	}
}

function test(param: string): void
function test(param: number): void
function test(param: string | number): void {
	if (typeof param === 'string') console.log('str')
	else console.log('num')
}
