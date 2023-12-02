let input: unknown

input = 5
input = ['fff', 51, false]

function fn(i: unknown) {
	if (typeof i == 'number') i++
	else i
}

fn(input)

// unknown с другими типами
type u1 = unknown | null // u1: unknown
type u2 = unknown | undefined // u2: unknown
type u3 = unknown | string // u3: unknown
type u4 = unknown & string // u4: string
type u5 = unknown & number // u5: number

// проблема any и unknown. Раньше ошибка была типом any, но после обновления ts стала unknown
async function getData() {
	try {
		await fetch('')
	} catch (err) {
		if (err instanceof Error) console.log(err.message)
	}
}

async function getData2() {
	try {
		await fetch('')
	} catch (err) {
		const e = err as Error // допустимо лишь при полной уверенности
		console.log(e)
	}
}

function parseJSON(jsonString: string): unknown {
	return JSON.parse(jsonString)
}

const data = parseJSON('{"test": "value"}')

if (typeof data === 'object' && data !== null && 'test' in data) {
	console.log(data.test) // Ок
}
