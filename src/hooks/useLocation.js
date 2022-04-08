import { useState, useEffect } from 'react'
import axios from 'axios'

export const useLocation = city => {
	const [latitude, setLatitude] = useState(undefined)
	const [longitude, setLongitude] = useState(undefined)

	useEffect(() => {
		getLocation(city)
	}, [setLatitude, setLongitude, city])

	const getLocation = async city => {
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

	return { latitude, longitude }
}
