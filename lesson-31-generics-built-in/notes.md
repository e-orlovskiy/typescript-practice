[🔙](/README.md)

## Lesson #31. Generics intro

### Введение

Дженерики (generics) позволяют создавать реюзабельные компоненты, типы которых могут быть указаны позже.

Дженерики объявляются с помощью угловых скобок:

```typescript
function identity<T>(arg: T): T {
	return arg
}
```

Здесь `T` - тип-параметр, который будет выведен из аргументов.

При вызове дженерик-функции можно указать тип:

```typescript
let output = identity<string>('myString')
```

Дженерики могут иметь несколько тип-параметров:

```typescript
function swap<T, Y>(tuple: [T, Y]): [Y, T] {
	return [tuple[1], tuple[0]]
}

swap([7, 'seven']) // ['seven', 7]
```

Дженерики также могут использоваться в интерфейсах и классах:

```typescript
interface Box<T> {
	contents: T
}

class Stack<T> {
	private storage: T[] = []

	push(item: T) {
		this.storage.push(item)
	}
}
```

### Встроенные дженерики в TypeScript

1.  `Array` - массив с элементами типа `T`:

    ```typescript
    const strings = Array<string>() // строковый массив
    strings.push('Hello') // OK
    strings.push(1) // Ошибка
    ```

2.  `Promise` - промис, который вернёт значение типа `T`:

    ```typescript
    const promise = Promise<string>()
    promise.then((res) => {
    	console.log(res.toUpperCase()) // OK
    	console.log(res.toFixed(2)) // Ошибка
    })
    ```

3.  `Map<K, V>` - mapа, где `K` - тип ключей, `V` - тип значений:

    ```typescript
    const map = Map<string, number>()

    map.set('apples', 5) // OK
    map.set(123, '123') // Ошибка
    ```

4.  `ReadonlyArray` - неизменяемый массив с элементами `T`:

    ```typescript
    interface CatInfo {
    	age: number
    	breed: string
    }

    const cats: ReadonlyArray<CatInfo> = [
    	{ age: 5, breed: 'Persian' },
    	{ age: 3, breed: 'British Shorthair' }
    ]

    cats.push({ age: 2, breed: 'Siberian' }) // Ошибка, массив неизменяемый
    cats[0].age = 6 // OK, можно менять элементы
    ```

5.  `Record<K, V>` - запись, где `K` - тип ключей, `V` - тип значений:

    ```typescript
    interface CatInfo {
    	age: number
    	breed: string
    }

    const cats: Record<string, CatInfo> = {
    	murry: { age: 5, breed: 'Persian' },
    	paul: { age: 3, breed: 'British Shorthair' }
    }
    ```
