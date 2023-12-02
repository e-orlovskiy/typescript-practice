[🔙](/README.md)

## Lesson #16. Never

### Использование never

Тип `never` в TypeScript представляет собой тип, который предполагает, что функция никогда не завершит свое выполнение или переменная не получит значение. never обычно используется в контексте ошибок или в ситуациях, когда выполнение кода не может дойти до конечной точки.

**Примеры:**

1. Функции, которые никогда не завершаются:

```typescript
function throwError(message: string): never {
	throw new Error(message)
}
```

Функция `throwError` явно указывает, что она бросает ошибку и никогда не завершится нормальным образом.

2. Функции, которые всегда бросают ошибку:

```typescript
function infiniteLoop(): never {
	while (true) {
		// Бесконечный цикл, никогда не завершится
	}
}
```

Эта функция представляет собой бесконечный цикл и также является примером использования `never`.

3. Обработчики ошибок:

```typescript
function handleError(): never {
	// Обработка ошибки и завершение программы
	process.exit(1)
}
```

В Node.js, `process.exit(1)` используется для завершения программы с кодом ошибки. Такие функции могут иметь тип `never`, так как они не возвращаются нормально.

4. Переменные с недоступными значениями:

```typescript
function unreachableCode(): never {
	return throwError('This code is unreachable')
}

let x: never = unreachableCode()
```

Здесь переменная x получает тип never, потому что unreachableCode не может вернуть нормальное значение.

5. Типизация switch-выражений:

```typescript
function processValue(value: string | number): void {
	switch (typeof value) {
		case 'string':
			// Обработка строки
			break
		case 'number':
			// Обработка числа
			break
		default:
			const exhaustiveCheck: never = value
	}
}
```

В этом примере, never используется для обеспечения исчерпывающей проверки в выражении `switch`, чтобы TypeScript знал, что все возможные случаи были рассмотрены.

Использование never помогает TypeScript более точно определять типы в ситуациях, когда код не может нормально завершиться. Он обеспечивает уровень статической безопасности, предотвращая некоторые виды ошибок в процессе выполнения кода.