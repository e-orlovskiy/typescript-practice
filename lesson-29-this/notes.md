[🔙](/README.md)

## Lesson #29. This

### Контекст

`this` в TypeScript работает так же, как и в JavaScript. Он представляет собой ссылку на текущий объект, в контексте которого вызывается функция. Однако, в TypeScript, вы можете использовать стрелочные функции, которые изменяют поведение `this`.

пример:

```typescript
class MyClass {
	private myProperty: number = 42

	// Обычная функция
	regularFunction() {
		console.log(this.myProperty)
	}

	// Стрелочная функция
	arrowFunction = () => {
		console.log(this.myProperty)
	}
}

const myObject = new MyClass()

myObject.regularFunction() // Выведет: 42
myObject.arrowFunction() // Тоже выведет: 42
```

В обычной функции `regularFunction`, значение `this` зависит от того, как она вызывается. В методе `arrowFunction`, `this` привязан к объекту, в котором он был создан, что делает его полезным в контексте классов.

### Потеря контекста

Потеря контекста (или проблема с `this`) часто возникает в JavaScript и TypeScript, когда функция вызывается не в том контексте, в котором была определена. Это может произойти, например, когда функция передается как обратный вызов или сохраняется в другой переменной.

Пример:

```typescript
class MyClass {
	private myProperty: number = 42

	constructor() {
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		console.log(this.myProperty)
	}
}

const myObject = new MyClass()
const clickHandler = myObject.handleClick

// Здесь контекст теряется, и будет ошибка
clickHandler()
```

Cпособы избежать потери контекста:

1. Использование метода `bind`:
   Вы можете использовать метод `bind` для явного привязывания контекста к функции:

   ```typescript
   const clickHandler = myObject.handleClick.bind(myObject)
   clickHandler() // Теперь контекст не потеряется
   ```

2. Использование стрелочных функций:
   Стрелочные функции не создают своего собственного контекста `this` и автоматически заимствуют его из окружающей области видимости:

   ```typescript
   class MyClass {
   	private myProperty: number = 42

   	handleClick = () => {
   		console.log(this.myProperty)
   	}
   }

   const myObject = new MyClass()
   const clickHandler = myObject.handleClick
   clickHandler() // Контекст сохраняется
   ```

3. Использование `bind` при передаче методов:
   Если вы передаете метод как обработчик события или колбек, используйте `bind`:

   ```typescript
   const myObject = new MyClass()
   someElement.addEventListener('click', myObject.handleClick.bind(myObject))
   ```

4. Использование стрелочных функций в колбеках:
   Если возможно, используйте стрелочные функции при определении колбеков:

   ```typescript
   const myObject = new MyClass()
   someFunction(() => myObject.handleClick())
   ```
