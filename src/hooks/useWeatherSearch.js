import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from './useLocation'

export const useWeatherSearch = city => {
	const { latitude, longitude } = useLocation(city)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [searchData, setSearchData] = useState(undefined)

	useEffect(() => {
		getSearchData(city)
	}, [latitude, longitude, setLoading, setError, setSearchData])

	const getSearchData = async city => {
		setLoading(true)
		await axios
			.get(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&mode=json&appid=${
					import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
				}`,
			)
			.then(response => {
				setLoading(false)
				setSearchData(response?.data)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}
	return { loading, error, location, searchData }
}
