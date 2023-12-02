[🔙](/README.md)

## Lesson #17. Null

### Использование `null`

В TypeScript, как и в JavaScript, `null` представляет собой специальное значение, которое указывает на отсутствие значения или на неопределенное значение. TypeScript включает в себя систему типов, которая позволяет явно указывать, когда переменная может содержать значение `null`.

**примеры:**

---

1. **Определение переменных с null:**
   Вы можете определить переменные, которые могут содержать значение null, явно указав тип:

   ```typescript
   let myVar: string | null = 'Hello'
   myVar = null
   ```

   Тип `string | null` означает, что переменная `myVar` может содержать либо строку, либо `null`.

---

2. **Строгая проверка на `null` и `undefined`:**
   TypeScript по умолчанию не разрешает присваивание `null` и `undefined` переменным, если их тип явно не указан как допустимый. Это осуществляется с помощью флага `"strictNullChecks"` в настройках конфига TypeScript.

---

3. **Оператор `!` (небезопасное приведение):**
   Если вы уверены, что значение не является `null` или `undefined`, вы можете использовать оператор `!` для принудительного отключения проверки `null`:

   ```typescript
   let nonNullableVar: string = myVar!
   ```

   Однако, это подходит только в случаях, когда вы уверены, что значение действительно не содержит `null` или `undefined`.

---

4. **Строгие проверки `null` с использованием `strictNullChecks`:**
   Если флаг `"strictNullChecks"` включен, TypeScript будет более строгим в отношении значений `null` и `undefined`. Вы должны явно обрабатывать эти случаи, чтобы избежать ошибок компиляции.

   ```typescript
   function greet(name: string | null): string {
   	if (name === null) {
   		return 'Hello, Guest!'
   	} else {
   		return 'Hello, ' + name
   	}
   }
   ```

   В этом примере, функция `greet` принимает строку или `null` и обрабатывает оба случая.

---

5. **Использование `--strictNullChecks` в `tsconfig.json`:**
   Если вы хотите включить строгую проверку на `null` и `undefined` для всего проекта, добавьте следующую опцию в ваш `tsconfig.json`:
   ```json
   {
   	"compilerOptions": {
   		"strictNullChecks": true
   	}
   }
   ```

---

`null` в TypeScript служит важной ролью в предотвращении ошибок при работе с переменными, которые могут содержать какое-то значение или `null`. Это помогает сделать код более надежным и предсказуемым.