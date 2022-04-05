import { useState, useEffect } from 'react'
import axios from 'axios'

export const useWeatherSearch = location => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [searchData, setSearchData] = useState(undefined)

	useEffect(() => {
		getSearchData(location)
	}, [location, setLoading, setError, setWeeklyData])

	const getSearchData = async location => {
		setLoading(true)
		await axios
			.get(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${
					location?.latitude
				}&lon=${
					location?.longitude
				}&exclude=minutely,current,hourly&units=metric&mode=json&appid=${
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

	return { loading, error, location, searchData }
}
