[🔙](/README.md)

## Lesson #19. Type Guards

### Использрвание Type Guards

В TypeScript, Type Guards (стражи типов) представляют собой механизм, который позволяет программисту более точно определить тип переменной в определенной области кода. Они используются для безопасного приведения типов и предотвращения ошибок.

Один из наиболее распространенных способов использования Type Guards - это проверка типа с использованием ключевого слова `typeof` или проверка наличия определенного свойства.

Примеры:

1. **Проверка с использованием `typeof`:**

   ```typescript
   function printLength(value: string | number): void {
   	if (typeof value === 'string') {
   		console.log(value.length) // TypeScript знает, что `value` - строка
   	} else {
   		console.log(value.toFixed(2)) // TypeScript знает, что `value` - число
   	}
   }
   ```

   В этом примере `typeof value === 'string'` является TypeGuard-ом, который позволяет TypeScript определить, что переменная `value` внутри блока условия является строкой.

2. **Проверка наличия свойства:**

   ```typescript
   interface Car {
   	brand: string
   	speed: number
   }

   function displaySpeed(vehicle: Car | { speed: number }): void {
   	if ('brand' in vehicle) {
   		console.log(vehicle.speed) // TypeScript знает, что `vehicle` имеет свойство `speed`
   	} else {
   		console.log(vehicle) // TypeScript знает, что `vehicle` имеет только свойство `speed`
   	}
   }
   ```

   Здесь проверка `'brand' in vehicle` является TypeGuard-ом, который позволяет TypeScript определить, что `vehicle` - это объект типа `Car`.

3. **Использование пользовательских Type Guards:**

   TypeScript также позволяет создавать пользовательские функции, которые выступают в роли Type Guards. Это называется пользовательским Type Guard.

   ```typescript
   interface Person {
   	name: string
   	age: number
   }

   function isPerson(obj: any): obj is Person {
   	return 'name' in obj && 'age' in obj
   }

   if (isPerson(user)) {
   	console.log(user.name) // TypeScript знает, что `user` - это объект типа `Person`
   }
   ```

   В этом примере `obj is Person` указывает TypeScript на то, что, если функция возвращает `true`, то переменная теперь рассматривается как объект типа `Person`.

Type Guards позволяют сделать код более безопасным, предотвращая ошибки типов во время выполнения и обеспечивая TypeScript возможность интеллектуально вывести типы в определенных частях кода.
