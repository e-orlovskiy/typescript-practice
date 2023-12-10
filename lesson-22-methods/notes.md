[🔙](/README.md)

## Lesson #22. Class methods

### Использование методов классов

**Метод** - функция в классе, которая может принимать и возвращать, что угодно в отличие от `constructor`. Методы классов наследуются его инстансами и мы можем использовать их в созданных объектах.

пример:

```typescript
class MyClass {
	fieldValue: string

	// Конструктор класса
	constructor(fieldValue: string) {
		this.myField = fieldValue
	}

	// Метод класса
	myMethod(): void {
		console.log(`Значение поля: ${this.myField}`)
	}
}
```
