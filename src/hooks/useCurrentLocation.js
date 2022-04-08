import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCurrentLocation = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [location, setLocation] = useState(undefined)

	useEffect(() => {
		getLocation()
	}, [setLocation, setError, setLoading])

	const getLocation = async () => {
		setLoading(true)
		await axios
			.get(`https://ipapi.co/json/`)
			.then(response => {
				setLoading(false)
				setLocation(response?.data)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}

	return { location, loading, error }
}
