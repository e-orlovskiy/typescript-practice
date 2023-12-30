/*
  У нас есть огромное количество объектов, нам нужна функция, которая, 
  в случае если у объекта есть id сортировало бы объекты по возрастанаю или по
  убыванию, в зависимости от параметра
*/

// ! #1

interface Id {
	id: number
}

function sortById<T extends Id>(arr: T[], sortType: 'asc' | 'dsc' = 'asc'): T[] {
	return arr.sort((a, b) => {
		if (sortType === 'asc') {
			return a.id - b.id
		} else {
			return b.id - a.id
		}
	})
}

console.log(
	sortById(
		[
			{ id: 1, name: 'fff', country: 'Poland' },
			{ id: 5, name: 'fff', country: 'Germany' },
			{ id: 4, name: 'fff', country: 'USA' },
			{ id: 66, name: 'fdsa', age: 12 },
			{ id: 2, name: 'ffff' }
		],
		'asc'
	)
)
console.log(sortById([], 'dsc'))

// используя дженерики и extends написать функцию, которая получает массив автомобилей с разными свойствами, из общего у них есть один или другой завод по производству это и нужно экстендить. В зависимости от второго параметра, который передан в функцию, нужно выводить авто либо одного либо второго завода.

// ! #2

interface Car {
	id: number
	name: string
	manufacturer: string
}

function filteredArr<T extends Car>(
	cars: T[],
	manufacturer: 'Manufacturer A' | 'Manufacturer B'
): T[] {
	return cars.filter((car) => car.manufacturer === manufacturer)
}

const filteredCars = filteredArr(
	[
		{ id: 3, name: 'Car 1', manufacturer: 'Manufacturer A' },
		{ id: 7, name: 'Car 3', manufacturer: 'Manufacturer A' },
		{ id: 1, name: 'Car 44', manufacturer: 'Manufacturer A' },
		{ id: 4, name: 'Car 11', manufacturer: 'Manufacturer B' },
		{ id: 5, name: 'Car 32', manufacturer: 'Manufacturer B' }
	],
	'Manufacturer B'
)

console.log(filteredCars)
