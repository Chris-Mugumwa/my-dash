import { useState, useEffect } from 'react'
import { useCurrentLocation } from './useCurrentLocation'
import axios from 'axios'

export const useWeeklyWeather = city => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [latitude, setLatitude] = useState(undefined)
	const [longitude, setLongitude] = useState(undefined)
	const [weeklyData, setWeeklyData] = useState(undefined)
	const { location } = useCurrentLocation()

	useEffect(() => {
		getWeeklyData(location)
	}, [location, setLoading, setError, setWeeklyData, latitude, longitude])

	useEffect(() => {
		getLocation(city)
	}, [setLatitude, setLongitude, city])

	const getLocation = async city => {
		if (city.length > 0) {
			await axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
						import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
					}`,
				)
				.then(response => {
					setLatitude(response?.data?.coord?.lat)
					setLongitude(response?.data?.coord?.lon)
				})
		}
	}

	const getWeeklyData = async location => {
		setLoading(true)
		await axios
			.get(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${
					latitude === undefined ? location?.latitude : latitude
				}&lon=${
					longitude === undefined ? location?.longitude : longitude
				}&exclude=minutely&units=metric&mode=json&appid=${
					import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
				}`,
			)
			.then(response => {
				setLoading(false)
				setWeeklyData(response?.data)
				console.log(weeklyData)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}

	console.log(city)

	return { loading, error, location, weeklyData }
}
