import { useState, useEffect } from 'react'
import { checkFormat } from '../data/reusableData'

export const useDate = () => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date())
		}, 50000)

		return () => clearInterval(timer)
	}, [])

	let dayFormat = { weekday: 'short' }
	let day = date.toLocaleDateString('en-US', dayFormat)

	let monthFormat = { month: 'short' }
	let month = date.toLocaleDateString('en-US', monthFormat)

	let today = date.getDate()
	const year = date.getFullYear()

	checkFormat(day)
	checkFormat(date)

	return { day, today, month, year }
}
