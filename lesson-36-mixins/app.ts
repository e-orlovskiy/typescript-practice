// Миксины используются не очень часто, но в некоторых кейсах они возможны.возможны.

// Миксины позволяют выделить общие части классов и включить их в один класс
// Грубо говоря, они позволяют выполнить наследование от нескольких классов, а не только от одного
// Либо, при помощи миксинов можно добавить примеси свойств какому-то объекту без явного наследования

// пример:
// укажем тип конструктора
type Constructor = new (...args: any[]) => {}
// можно использовать дженерики
// T = {} - значение по-умолчанию
type GConstructor<T = {}> = new (...args: any[]) => T

// произвольный класс
class List {
	constructor(public items: string[]) {}
}

// сделаем ещё один type, который будет дженериком GConstructor от List
// т.е. это конструируемый тип нашего класса List
// мы будем передавать туда какие-то аргументы и будем получать List
type ListType = GConstructor<List>

// стандартное наследование:
// class ExtendedListClass extends List {
// 	first() {
// 		return this.items[0]
// 	}
// }

// миксин - это функция
// рассмотрим пример миксина (тут мы принимаем класс, внутри функции создаём класс, который будет экстендить этот класс и возвращаем его)
function ExtendedList<TBase extends ListType>(Base: TBase) {
	return class ExtendedList extends Base {
		first() {
			return this.items[0]
		}
	}
}

const list = ExtendedList(List)
const res = new list(['a', 'b', 'c'])
console.log(res.first)

// Представим, что помимо List есть Accordion

class MyList {
	constructor(public items: string[]) {}
}

class MyAccordion {
	isOpened: boolean
}

type MyListType = GConstructor<MyList>
type MyAccordionType = GConstructor<MyAccordion>

// mixin
function MyExtendedList<TBase extends MyListType & MyAccordionType>(
	Base: TBase
) {
	return class MyExtendedList extends Base {
		first() {
			// this может обратиться к first, isOpened и items, т.к. мы по сути экстендим сразу 2 класса
			this.items[0]
		}
	}
}

class AccordionList {
	isOpened: boolean
	constructor(public items: string[]) {}
}

const list2 = MyExtendedList(AccordionList)
const res2 = new list2(['a', 'b'])

console.log(res2.first())
