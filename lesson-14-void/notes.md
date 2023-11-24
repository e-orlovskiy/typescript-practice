[🔙](/README.md)

## Lesson #14. Void

### Использование void

`void` используется для обозначения отсутствия какого-либо типа значения. Оно используется в контексте функций, когда функция не возвращает никакого значения, или в переменных, чтобы указать, что они не имеют определенного значения.

**примеры:**

1. возвращаемое значение функции

```typescript
function sayHello(): void {
	console.log('Hello!')
	// Функция не возвращает никакого значения (undefined подразумевается)
}
```

2. переменная типа `void`

```typescript
let unusable: void = undefined // Можно присвоить только undefined или null
```

3. использование `void` в обработчиках событий

```typescript
function handleClick(): void {
	console.log('Button clicked!')
}

const button = document.getElementById('myButton')
button.addEventListener('click', handleClick)
```

В этом примере `handleClick` - функция, которая не возвращает значения (или возвращает `undefined`). Она может быть использована в качестве обработчика событий для кнопки.

4. функции, которые могут вернуть или не вернуть значение

```typescript
function getRandomNumber(): number | void {
	const randomNumber = Math.random()
	if (randomNumber > 0.5) {
		return randomNumber
	}
	// Если randomNumber <= 0.5, функция не возвращает значения (undefined)
}
```

Здесь функция `getRandomNumber` может вернуть случайное число, если оно больше 0.5, или не вернуть ничего (`undefined`), если число меньше или равно 0.5. Тип возвращаемого значения указан как `number | void`.

Использование void может быть полезным, чтобы явно указать отсутствие значения в определенных контекстах и обеспечить более строгую типизацию в коде TypeScript.
