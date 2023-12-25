[🔙](/README.md)

## Lesson #30. Abstract Classes

В TypeScript абстрактные классы предоставляют средство для определения общей структуры классов, но они сами по себе не могут быть созданы (экземпляры абстрактных классов не могут быть созданы напрямую). Они предоставляют базовый набор методов и свойств, которые подклассы обязаны реализовать. Абстрактные классы помогают в создании шаблонов для производных классов.

Пример:

```typescript
// Абстрактный класс
abstract class Shape {
	abstract calculateArea(): number

	// Обычный метод
	display(): void {
		console.log('Displaying shape')
	}
}

// Класс-наследник
class Circle extends Shape {
	// Реализация абстрактного метода
	calculateArea(): number {
		// Реальная логика расчета площади круга
		return Math.PI * Math.pow(2, 2)
	}
}

// Класс-наследник
class Rectangle extends Shape {
	// Реализация абстрактного метода
	calculateArea(): number {
		// Реальная логика расчета площади прямоугольника
		return 4 * 5
	}
}

// Создание объектов
const circle = new Circle()
const rectangle = new Rectangle()

// Вызов методов
circle.display()
console.log('Circle area:', circle.calculateArea())

rectangle.display()
console.log('Rectangle area:', rectangle.calculateArea())
```

В этом примере `Shape` - это абстрактный класс с абстрактным методом `calculateArea`. Классы `Circle` и `Rectangle` наследуются от `Shape` и обязаны предоставить реализацию для метода `calculateArea`.

Абстрактные классы полезны, когда у вас есть общая структура для нескольких классов, и вы хотите обеспечить, чтобы все производные классы реализовывали определенные методы.
