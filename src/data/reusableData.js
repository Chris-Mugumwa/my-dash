export const checkFormat = index => {
	if (index < 10) {
		index = index.toString().padStart(2, '0')
	}
	return index
}

export const getRandom = async (array, number) => {
	let result = await new Array(number),
		length = array.length,
		taken = new Array(length)
	// if (number > length)
	// 	throw new RangeError('getRandom: more elements taken than available')
	while (number--) {
		let x = Math.floor(Math.random() * length)
		result[number] = array[x in taken ? taken[x] : x]
		taken[x] = --length in taken ? taken[length] : length
	}
	return result
}

export const bookmarkData = () => [
	{
		id: 1,
		name: 'Youtube',
		url: 'https://www.youtube.com',
	},
	{
		id: 2,
		name: 'Netflix',
		url: 'https://www.netlfix.com',
	},
	{
		id: 3,
		name: 'LinkedIn',
		url: 'https://www.linkedin.com',
	},
	{
		id: 4,
		name: 'Gmail',
		url: 'https://www.gmail.com',
	},
]
