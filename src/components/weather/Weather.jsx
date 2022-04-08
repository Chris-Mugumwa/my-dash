import { useCurrentWeather } from '../../hooks/useCurrentWeather'
import {
	IoIceCreamOutline,
	IoWaterOutline,
	IoSpeedometerOutline,
	IoBalloonOutline,
} from 'react-icons/io5'
import ClipLoader from 'react-spinners/ClipLoader'
import { Icon } from '../icons/index'

function Weather() {
	const { loading, error, location, weatherData } = useCurrentWeather()

	return (
		<section className='relative z-20 flex items-center justify-start w-full h-full gap-1 overflow-hidden md:flex-col'>
			{loading ||
				(weatherData === undefined && (
					<div className='relative z-50 flex items-center justify-center w-full h-full'>
						<ClipLoader color={'#e6bf17'} size={35} />
					</div>
				))}
			{error ||
				(weatherData === undefined && (
					<div className='relative z-50 flex items-center justify-center w-full h-full bg-blue-light'>
						<p className='text-base text-center md:text-lg xl:text-2xl text-yellow-dark font-poppins'>
							Something went wrong
						</p>
					</div>
				))}
			{weatherData !== undefined && (
				<>
					<div className='flex flex-col gap-1'>
						<main className='flex items-center justify-around'>
							<Icon
								description={weatherData?.weather?.[0]?.description}
								height={130}
								width={130}
							/>
							<h2 className='flex text-xl text-white font-poppins md:text-5xl xl:text-6xl'>
								{weatherData?.main?.temp}
								<span className='text-sm text-yellow-dark font-ropa-sans'>
									&#8451;
								</span>
							</h2>
						</main>
						<h4 className='text-base text-center md:text-lg xl:text-2xl text-yellow-dark font-poppins'>
							{weatherData?.weather?.[0]?.description}
						</h4>
						<h3 className='relative flex justify-center text-xl text-center text-white uppercase md:text-3xl xl:text-4xl'>
							{location?.city}
							<span className='absolute top-0 text-sm -right-2 font-ropa-sans text-yellow-dark'>
								{location?.country_code}
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
									<span className='text-sm text-yellow-dark font-ropa-sans'>
										&#8451;
									</span>
								</span>
							</h5>
						</div>
						<div className='weather-subcontainer'>
							<label className='weather-label'>Humidity</label>
							<h5 className='weather-heading'>
								<IoWaterOutline className='weather-icon' />
								<span className='weather-subheading'>
									{weatherData?.main?.humidity}
									<span className='text-sm text-yellow-dark'>
										{' '}
										&#37;
									</span>
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
									<span className='text-sm text-yellow-dark font-ropa-sans'>
										km/h
									</span>
								</span>
							</h5>
						</div>
						<div className='weather-subcontainer'>
							<label className='weather-label'>Air Pressure</label>
							<h5 className='weather-heading'>
								<IoBalloonOutline className='weather-icon' />
								<span className='weather-subheading'>
									{weatherData?.main?.pressure}
									<span className='text-sm text-yellow-dark font-ropa-sans'>
										hPa
									</span>
								</span>
							</h5>
						</div>
					</div>
				</>
			)}
		</section>
	)
}

export default Weather
