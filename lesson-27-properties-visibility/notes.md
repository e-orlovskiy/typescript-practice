[🔙](/README.md)

## Lesson #27. Properties visibility

### Модификатор public, protected, private

В TypeScript видимость свойств (и методов) определяется с использованием модификаторов доступа. TypeScript поддерживает три основных модификатора доступа: `public`, `protected` и `private`.

#### Public (по умолчанию):

Если модификатор доступа не указан, свойство считается public.
Свойства и методы с модификатором public доступны из любого места кода (внутри класса, из подклассов и извне класса).

```typescript
class MyClass {
	public myProperty: string

	constructor(myProperty: string) {
		this.myProperty = myProperty
	}
}

const instance = new MyClass('Hello')
console.log(instance.myProperty) // Доступно извне класса
```

#### Protected

Свойства и методы с модификатором protected доступны внутри класса и его подклассов.

```typescript
class MyBaseClass {
	protected myProtectedProperty: string

	constructor(myProtectedProperty: string) {
		this.myProtectedProperty = myProtectedProperty
	}
}

class MyDerivedClass extends MyBaseClass {
	constructor(myProtectedProperty: string) {
		super(myProtectedProperty)
		console.log(this.myProtectedProperty) // Доступно внутри подкласса
	}
}
```

#### Private

Свойства и методы с модификатором private доступны только внутри того класса, в котором они объявлены.

```typescript
class MyClass {
	private myPrivateProperty: string

	constructor(myPrivateProperty: string) {
		this.myPrivateProperty = myPrivateProperty
	}

	public getMyPrivateProperty(): string {
		return this.myPrivateProperty // Доступно только внутри класса
	}
}
```

Важно отметить, что эти модификаторы работают только на этапе компиляции TypeScript. В результате компиляции кода TypeScript в JavaScript они полностью удаляются, и свойства становятся доступными на уровне JavaScript без каких-либо ограничений видимости.

Для того чтобы свойство было приватным и в ts и в js используется следующая запись (используется не часто):

```typescript
class MyClass {
	#prop: string
}
```
