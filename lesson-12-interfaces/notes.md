[🔙](/README.md)

## Lesson #12. Interfaces

### Использование Interfaces

Interfaces позволяют описывать форму объектов, функций, классов и других типов данных.

пример:

```typescript
interface User {
	name: string
	age: number
	skills: string[]
}

let user: User = {
	name: 'Иван',
	age: 30,
	skills: ['навык 1', 'навык 2']
}
```

### Extends

В отличие от `types` для interceptions мы будем использовать ключевое слово `extends`

пример:

```typescript
interface User {
	name: string
	age: number
	skills: string[]
}

interface Role {
	role: 'back end developer' | 'front end developer'
}

interface UserWithRole extends User, Role {}

let user: UserWithRole = {
	name: 'Иван',
	age: 30,
	skills: ['навык 1', 'навык 2'],
	role: 'back end developer'
}
```

### Отличия Interfaces и Types

1. Через `interface` мы можем доопределять типы данных, через `types` такая возможность отсутствует

   ```typescript
   // Ошибки не будет
   interface Person {
   	name: string
   }
   interface Person {
   	age: number
   }

   const person: Person = {
   	name: 'Иван',
   	age: 30
   }
   // будет ошибка: тип уже определен
   type Person = {
   	name: string
   }
   type Person = {
   	age: number
   }

   const person: Person = {
   	name: 'Иван',
   	age: 30
   }
   ```

   Эта особенность может быть как полезна, так и наоборот. Например, если вы доопределяете свой интерфейс, то впоследствие вы можете забыть какие в нём изначально были свойства, а если вы работаете над проектом не одни, то это ещё и может усложнить жизнь другим людям.

   Однако когда в коде мы используем какую-то стороннюю библиотеку и возможности через `extends` дополнить тип нет, то эта особенность может помочь (например доопределение типов ответа от сервера при работче с express)

2. Через `interface` мы не можем указать `union-типы`. Таким образом `interface` мы используем при работе с классами и объектами (обычно), а `type` при работе с примитивами и простыми типами.

   ```typescript
   type ID: string | number

   interface ID_Obj {
   	ID: string | number
   }
   ```
