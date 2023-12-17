// Создать корзину (Cart / Basket)
// В корзине должны быть:
// - продукты (Product)
// - параметры доставки (Delivery)
// В корзине также должны быть реализованы следующие методы:
// - добавить продукт в корзину
// - удалить продукт из корзины (по id)
// - посчитать стоимость товаров в корзине
// - заказать доставку
// Также добавить функцию, которая будет проверять можно ли сделать заказ

interface ICart {
	addProduct(product: Product): void
	deleteProduct(id: number): void
	getSumOfProducts(product: Product): number
}

class Product {
	id: number
	name: string
	price: number
	qty: number
	constructor(id: number, name: string, price: number, qty: number) {
		this.id = id
		this.name = name
		this.price = price
		this.qty = qty
	}
}

class Delivery {
	constructor(public date: Date) {
		this.date = date
	}
}

class HomeDelivery extends Delivery {
	homeAddress: string
	constructor(address: string) {
		super(new Date())
		this.homeAddress = address
	}
}

class PickupDelivery extends Delivery {
	pickupAddress: string
	constructor(address: string) {
		super(new Date())
		this.pickupAddress = address
	}
}

class Cart implements ICart {
	private products: Product[] = []
	private delivery: HomeDelivery | PickupDelivery

	addProduct(product: Product): void {
		this.products.push(product)
	}
	deleteProduct(id: number): void {
		this.products = this.products.filter((el: Product) => el.id !== id)
	}
	getSumOfProducts(): number {
		if (this.products.length) {
			return this.products.reduce((sum, el) => sum + el.price * el.qty, 0)
		} else {
			return 0
		}
	}

	setDeliveryOption(delivery: HomeDelivery | PickupDelivery) {
		this.delivery = delivery
	}

	isDeliveryReadyToGo() {
		if (this.products.length === 0) {
			throw new Error('no products in cart')
		} else if (!this.delivery) {
			throw new Error('no delivery type selected')
		}
		return true
	}
}

const cart = new Cart()
cart.addProduct(new Product(1, 'Икра', 100.99, 2))
cart.addProduct(new Product(2, 'Яблоко', 0.35, 10))
cart.addProduct(new Product(3, 'Сок', 5.35, 4))
cart.deleteProduct(2)
cart.setDeliveryOption(new HomeDelivery('мой адрес'))
console.log(cart.getSumOfProducts())
console.log(cart)
console.log(cart.isDeliveryReadyToGo())
