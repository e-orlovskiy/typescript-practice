[🔙](/README.md)

## Lesson #32. Function with generics

### Объявление дженериков

Чтобы воспользоваться дженериками, нужно указать угловые скобки и идентификатор типа при объявлении функции или типа:

```typescript
function identity<T>(arg: T): T {
	return arg
}

let myIdentity: <T>(arg: T) => T = identity
```

Здесь `T` - тип-параметр, который будет использоваться вместо конкретного типа.

### Вызов дженериков

При вызове функции можно явно указать тип:

```typescript
let output = identity<string>('myString')
```

Если тип не указан, он выводится автоматически из аргумента:

```typescript
let output = identity('myString') // тип выведен как string
```

### Ограничение типов

Чтобы ограничить допустимые типы, используется `extends`:

```typescript
function loggingIdentity<T extends string | number>(arg: T): T {
	console.log(arg.length) // .length доступен только для string | number
	return arg
}
```

Теперь функция принимает только string или number.

### Работа с типом в функции

В функции можно использовать свойства и методы типа `T`:

```typescript
function getArray<T>(items: T[]): T[] {
	return [...items].filter((item) => !!item)
}
```

Здесь мы используем метод `filter` у переданного массива.

### Примеры использования

Дженерики удобны в утилитных функциях:

```typescript
function wrap<T>(value: T) {
	return { value }
}

wrap(10) // { value: 10 }
wrap('text') // { value: 'text' }
```

Или для создания переиспользуемых компонентов в React:

```typescript
function GenericBox<T>(props: {value: T}) {
  return <div>{props.value}</div>;
}

<GenericBox value={10} /> // работает с числами
<GenericBox value="text" /> // работает со строками
```

### Выводы

- Дженерики делают код более гибким и типобезопасным при работе с разными типами данных.
- Помогают избежать дублирования кода.
- Улучшают читаемость кода за счет единообразия структуры.
- Полезны для создания универсальных функций, типов и компонентов.
