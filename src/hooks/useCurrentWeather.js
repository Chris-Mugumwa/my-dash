import { useState, useEffect } from 'react'
import { useCurrentLocation } from './useCurrentLocation'
import axios from 'axios'

export const useCurrentWeather = () => {
	const { location } = useCurrentLocation()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [weatherData, setWeatherData] = useState(undefined)

	useEffect(() => {
		getCurrentWeather(location)
	}, [location, setError, setLoading, setWeatherData])

	const getCurrentWeather = async location => {
		setLoading(true)
		await axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${
					location?.latitude
				}&lon=${location?.longitude}&units=metric&appid=${
					process.env.REACT_APP_WEATHER_API_KEY
				}`,
			)
			.then(response => {
				setLoading(false)
				setWeatherData(response?.data)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}

	return { loading, error, location, weatherData }
}
