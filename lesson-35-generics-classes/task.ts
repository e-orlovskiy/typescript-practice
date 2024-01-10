/*
ЗАДАНИЕ:
Создайте базовый класс Animal, представляющий общую информацию о животном. Включите в класс поля для имени (name), возраста (age) и звука, который издает животное (sound). Поля возраста и звука должны быть необязательными. Все они должны быть дженериками.
Создайте класс Bird, который наследуется от базового класса Animal. В классе Bird добавьте дополнительное поле для размаха крыльев (wingSpan). Оно может быть необязательным и должно быть дженериком. Реализуйте метод fly(), который выводит сообщение о том, что данная птица (её name) может летать, а также её размах крыльев.
Создайте класс Fish, также наследующийся от базового класса Animal. Реализуйте метод swim(), который выводит сообщение о том, что данная рыба (её name) может плавать.

const lion = new Animal<string, number, string>('Leo', 5, 'Roar');
lion.makeSound(); // Выводит звук животного
console.log(lion.getInfo()); // Выводит информацию о животном

const eagle = new Bird<string, number, string, number>('Aquila', 10, 'Screech', 2);
eagle.fly(); // Выводит сообщение о полете
eagle.makeSound(); // Выводит звук птицы
console.log(eagle.getInfo()); // Выводит информацию о птице

const goldfish = new Fish<string, number, string>('Goldie', 1, 'Bubbles');
goldfish.swim(); // Выводит сообщение о плавании
goldfish.makeSound(); // Выводит звук рыбы
console.log(goldfish.getInfo()); // Выводит информацию о рыбе
*/

class Animal<T, U, V> {
	name: T
	age?: U
	sound?: V
	constructor(name: T, age?: U, sound?: V) {
		this.name = name
		if (age) this.age = age
		if (sound) this.sound = sound
	}
	makeSound(): void {
		if (this.sound) {
			console.log(`${this.name} издает звук ${this.sound}`)
		} else {
			console.log(`${this.name} не издает звук`)
		}
	}
	getInfo(): string {
		let str = `${this.name}`
		if (this.age !== undefined) {
			str += `, ${this.age}`
		}
		if (this.sound !== undefined) {
			str += `, ${this.sound}`
		}
		return str
	}
}

class Bird<T, U, V, E> extends Animal<T, U, V> {
	wingspan?: E
	constructor(name: T, age?: U, sound?: V, wingspan?: E) {
		super(name, age, sound)
		if (wingspan) this.wingspan = wingspan
	}
	fly(): void {
		console.log(`${this.name} может летать, размах крыльев: ${this.wingspan}`)
	}
}

class Fish<T, U, V> extends Animal<T, U, V> {
	swim(): void {
		console.log(`${this.name} может плавать`)
	}
}

const lion = new Animal<string, number, string>('Leo', 5)
lion.makeSound() // Выводит звук животного
console.log(lion.getInfo()) // Выводит информацию о животном

const eagle = new Bird<string, number, string, number>(
	'Aquila',
	10,
	'Screech',
	2
)
eagle.fly() // Выводит сообщение о полете
eagle.makeSound() // Выводит звук птицы
console.log(eagle.getInfo()) // Выводит информацию о птице

const goldfish = new Fish<string, number, string>('Goldie', 1, 'Bubbles')
goldfish.swim() // Выводит сообщение о плавании
goldfish.makeSound() // Выводит звук рыбы
console.log(goldfish.getInfo()) // Выводит информацию о рыбе
