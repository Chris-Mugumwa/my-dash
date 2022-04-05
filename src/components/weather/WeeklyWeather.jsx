import { useWeeklyWeather } from '../../hooks/useWeeklyWeather'
import ClipLoader from 'react-spinners/ClipLoader'
import WeatherSearch from './WeatherSearch'
import {
	IoIceCreamOutline,
	IoWaterOutline,
	IoSpeedometerOutline,
	IoBalloonOutline,
	IoCloudyNightOutline,
	IoPartlySunnyOutline,
	IoCloudOutline,
	IoLeafOutline,
} from 'react-icons/io5'

function WeeklyWeather() {
	const { loading, error, location, weeklyData } = useWeeklyWeather()

	console.log(weeklyData)
	return (
		<>
			{loading && <ClipLoader color={'#e6bf17'} size={35} />}

			{error ||
				(weeklyData === undefined && (
					<div className='relative z-50 flex items-center justify-center w-full h-full bg-blue-light'>
						<p className='text-base text-center md:text-lg xl:text-2xl text-yellow-dark font-poppins'>
							Something went wrong
						</p>
					</div>
				))}

			<WeatherSearch />

			<div className='row-start-2 row-end-3 lg:row-end-6 dashboard-card col-span-full lg:col-start-6 lg:col-end-[8]'>
				<h2>current weather</h2>
			</div>

			<div className='row-start-3 row-end-4 dashboard-card lg:row-start-2 lg:row-end-4 col-span-full lg:col-start-1 lg:col-end-6'>
				<h2>Tomorrow</h2>
			</div>

			<div className='row-start-4 row-end-5 lg:row-start-4 lg:row-end-5 dashboard-card col-span-full lg:col-start-1 lg:col-end-6'>
				<h2>Rest of the week</h2>
			</div>
		</>
	)
}

export default WeeklyWeather
