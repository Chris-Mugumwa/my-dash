import { useState, useEffect } from 'react'
import axios from 'axios'
import {
	IoIceCreamOutline,
	IoWaterOutline,
	IoSpeedometerOutline,
	IoBalloonOutline,
} from 'react-icons/io5'
import { Icon } from '../icons/index'

function Weather() {
	const [locationData, setLocationData] = useState([])
	const [weatherData, setWeatherData] = useState([])

	useEffect(() => {
		axios
			.get('https://ipapi.co/json/')
			.then(response => setLocationData(response.data))
	}, [])

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${
					locationData.city
				}&units=metric&appid=${
					import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
				}`,
			)
			.then(response => setWeatherData(response.data))
	}, [])

	console.log(locationData)
	console.log(weatherData)

	return (
		<section className='relative z-20 flex flex-col items-center justify-start gap-1 overflow-hidden'>
			<div className='flex flex-col gap-1'>
				<main className='flex items-center justify-around'>
					<Icon
						description={weatherData?.weather?.[0].description}
						height={130}
						width={130}
					/>
					<h2 className='flex text-xl text-white font-poppins md:text-5xl xl:text-6xl'>
						{weatherData?.main?.temp}
						<span className='text-sm text-yellow-dark '>&#8451;</span>
					</h2>
				</main>
				<h4 className='text-base text-center md:text-lg xl:text-2xl text-yellow-dark font-poppins'>
					{weatherData?.weather?.[0].description}
				</h4>
				<h3 className='relative flex justify-center text-xl text-center text-white uppercase md:text-3xl xl:text-4xl'>
					{locationData?.city}
					<span className='absolute top-0 right-0 text-sm font-ropa-sans text-yellow-dark'>
						{locationData?.country_code}
					</span>
				</h3>
			</div>
			<div className='weather-container'>
				<div className='weather-subcontainer'>
					<label className='weather-label'>Feels Like</label>
					<h5 className='weather-heading'>
						<IoIceCreamOutline className='weather-icon' />
						<span className='weather-subheading'>
							{weatherData?.main?.feels_like}
						</span>
					</h5>
				</div>
				<div className='weather-subcontainer'>
					<label className='weather-label'>Humidity</label>
					<h5 className='weather-heading'>
						<IoWaterOutline className='weather-icon' />
						<span className='weather-subheading'>
							{weatherData?.main?.humidity}
						</span>
					</h5>
				</div>
			</div>
			<div className='weather-container'>
				<div className='weather-subcontainer'>
					<label className='weather-label'>Wind Speed</label>
					<h5 className='weather-heading'>
						<IoSpeedometerOutline className='weather-icon' />
						<span className='weather-subheading'>
							{weatherData?.wind?.speed}
						</span>
					</h5>
				</div>
				<div className='weather-subcontainer'>
					<label className='weather-label'>Air Pressure</label>
					<h5 className='weather-heading'>
						<IoBalloonOutline className='weather-icon' />
						<span className='weather-subheading'>
							{weatherData?.main?.pressure}
						</span>
					</h5>
				</div>
			</div>
		</section>
	)
}

export default Weather
