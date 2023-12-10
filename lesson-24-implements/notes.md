[🔙](/README.md)

## Lesson #24. Implements

### Имплементация интерфейса классом

Технология имплементации позволяет нам абстрагироваться от конкретной реализации и заранее определить форму класса или свойств, которые будут необходимы.

`implements` используется для определения, что класс или объект должен реализовать определенный набор методов и свойств. Это помогает обеспечить соответствие интерфейсу (interface) и обеспечивает статическую проверку типов.

пример:

```typescript
// Определение интерфейса
interface Shape {
	calculateArea(): number
}

// Имплементация интерфейса для круга
class Circle implements Shape {
	radius: number

	constructor(radius: number) {
		this.radius = radius
	}

	calculateArea(): number {
		return Math.PI * this.radius ** 2
	}
}

// Имплементация интерфейса для квадрата
class Square implements Shape {
	sideLength: number

	constructor(sideLength: number) {
		this.sideLength = sideLength
	}

	calculateArea(): number {
		return this.sideLength ** 2
	}
}

// Использование
const circle = new Circle(5)
console.log('Площадь круга:', circle.calculateArea())

const square = new Square(4)
console.log('Площадь квадрата:', square.calculateArea())
```

**Преимущества использования имплементации в TypeScript:**

- Явное указание интерфейсов: Используя имплементации, вы явно указываете, какие методы или свойства должны быть определены в классе. Это помогает улучшить читаемость кода и обеспечить согласованность в структуре программы.

- Статическая типизация: TypeScript предоставляет статическую типизацию, что позволяет обнаруживать ошибки на этапе компиляции, связанные с типами данных. Это способствует повышению надежности кода.

- Поддержка IDE: Благодаря использованию TypeScript, многие современные интегрированные среды разработки (IDE), такие как Visual Studio Code, предоставляют более мощные средства анализа кода и автодополнения.

- Облегчение сопровождения кода: Имплементации облегчают сопровождение кода и его расширение. Если вы хотите добавить новый класс, соответствующий определенному интерфейсу, вы просто создаете новый класс и реализуете соответствующие методы.

Использование имплементации в TypeScript помогает создавать более чистый, структурированный и надежный код, особенно в больших проектах, где четкость архитектуры играет важную роль.