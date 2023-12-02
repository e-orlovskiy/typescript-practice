[🔙](/README.md)

## Lesson #15. Unknown

### Использование `unknown`

`unknown` представляет собой более безопасную альтернативу типу `any`. `unknown` появился в TypeScript 3.0 и предоставляет статическую проверку типов, даже если тип данных неизвестен в момент написания кода. В отличие от `any`, `unknown` не позволяет безопасно использовать значения без предварительной проверки типов.

**Примеры:**

1. Назначение значений типу `unknown`:

   ```typescript
   let value: unknown
   value = 123 // Ок
   value = 'строка' // Ок
   value = true // Ок
   ```

2. Ограниченные операции с `unknown`.
   Когда у вас есть значение типа `unknown`, вы не можете выполнять большинство операций с этим значением без явного сужения типа или проверки типа.

   ```typescript
   let value: unknown = 'Привет, мир!'
   let length: number = value.length // Ошибка: Object is of type 'unknown'.
   ```

3. Проверка типов:
   Для безопасного использования значения типа `unknown`, вам нужно выполнить проверку типа перед его использованием:

   ```typescript
   if (typeof value === 'string') {
   	let length: number = value.length // Ок
   }
   ```

4. Сужение типа с использованием `as` или `typeof`:

   ```typescript
   let value: unknown = 'Привет, мир!'
   let length: number = (value as string).length // Ок
   // Или с использованием typeof:
   if (typeof value === 'string') {
   	let length: number = value.length // Ок
   }
   ```

5. Функции с возвращаемым значением типа `unknown`:
   Функции могут возвращать значения типа `unknown`, и вызывающий код должен проверить или сузить тип, прежде чем использовать результат:

   ```typescript
   function parseJSON(jsonString: string): unknown {
   	return JSON.parse(jsonString)
   }

   const data = parseJSON('{"key": "value"}')
   if (typeof data === 'object' && data !== null && 'key' in data) {
   	console.log(data.key) // Ок
   }
   ```

Подводя итог, можно сказать, что `unknown` является более безопасным выбором, чем `any`, когда вы работаете с данными, тип которых неизвестен. Он позволяет вам сохранить статическую проверку типов, требуя при этом явной проверки или сужения типов перед использованием значений.
