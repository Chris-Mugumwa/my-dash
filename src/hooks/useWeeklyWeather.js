import { useState, useEffect } from 'react'
import { useCurrentLocation } from './useCurrentLocation'
import axios from 'axios'

export const useWeeklyWeather = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [weeklyData, setWeeklyData] = useState(undefined)
	const { location } = useCurrentLocation()

	useEffect(() => {
		getWeeklyData(location)
	}, [location, setLoading, setError, setWeeklyData])

	const getWeeklyData = async location => {
		setLoading(true)
		await axios
			.get(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${
					location?.latitude
				}&lon=${
					location?.longitude
				}&exclude=minutely&units=metric&mode=json&appid=${
					import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
				}`,
			)
			.then(response => {
				setLoading(false)
				setWeeklyData(response?.data)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}

	return { loading, error, location, weeklyData }
}
