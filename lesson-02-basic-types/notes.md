[🔙](/README.md)

## Lesson #2. Basic Types

### Основные типы в TypeScript:

- number
- string
- boolean
- object
- Array
- Tuples
- Enum

В TypeScript мы можем либо выводить типы, либо указывать их явно.

### Числа

В TypeScript нет разделения на целые и дробные типы, тут всё это относится к одному типу данных `"number"`

```typescript
let number1 = 1
let number2 = 1.5
let number3 = -5
let number4 = 10_000

let number1: number = 1
let number2: number = 1.5
let number3: number = -5
let number4: number = 10_000
```

### Строки

Как и в ванильном JS, для записи строк мы можем использовать разные виды ковычек (одинарные, двойные, косые). Всё это относится к типу данных `"string"`

```typescript
let string1 = 'Строка'
let string3 = `Строка`

let string1: string = 'Строка'
let string3: string = `Строка`
```

### Логические значения

Как и в ванильном JS, для использования логических типов данных используется два значения `true` и `false`. Относятся они к типу данных данных `"boolean"`

```typescript
let boolean1 = true
let boolean2 = false

let boolean1: boolean = true
let boolean2: boolean = false
```

### Действия над типами данных

1. <u>Числовой тип</u>: математические операции, логические операции
2. <u>Строковый тип</u>: сложение, логические операции
3. <u>Логический тип</u>: логические операции
