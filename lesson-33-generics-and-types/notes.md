[🔙](/README.md)

## Lesson #33. Generics and Types

### Дженерики в функциях

Для объявления обобщенной функции используется синтаксис `<T>`, где `T` - это параметр типа.

```typescript
function identity<T>(arg: T): T {
	return arg
}
```

В данном примере `T` - это параметр типа, который может быть заменен на любой тип данных при вызове функции.

Пример использования:

```typescript
let result = identity<string>('Hello')
```

В данном примере `T` заменяется на тип `string`, и функция `identity` возвращает значение типа `string`.

### Дженерики в интерфейсах

Пример объявления обобщенного интерфейса:

```typescript
interface Box<T> {
	value: T
}
```

В данном примере `T` - это параметр типа, который определяет тип значения свойства `value`.
Пример использования обобщенного интерфейса:

```typescript
let box: Box<number> = { value: 10 }
```

В данном примере `T` заменяется на тип `number`, и переменная `box` имеет тип `Box<number>`, где `value` имеет тип `number`.

### Дженерики в классах

```typescript
class Queue<T> {
	private items: T[] = []

	enqueue(item: T): void {
		this.items.push(item)
	}

	dequeue(): T | undefined {
		return this.items.shift()
	}
}
```

В данном примере `T` - это параметр типа, который определяет тип элементов в очереди.

Пример использования обобщенного класса:

```typescript
let queue = new Queue<number>()
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.dequeue()) // Выводит: 1
```
