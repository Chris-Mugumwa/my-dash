import { useState, useEffect } from 'react'
import { checkFormat } from '../data/reusableData'

export const useTime = () => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	const hour = checkFormat(time.getHours())
	const minute = checkFormat(time.getMinutes())

	return { hour, minute }
}
