import Weather from '../../components/weather/Weather'
import WeatherBlob from '../../components/blob/WeatherBlob'

function WeatherContainer() {
	return (
		<aside className='relative row-start-3 row-end-4 overflow-hidden col-span-full md:col-start-4 md:col-end-8 md:row-start-2 md:row-end-4 dashboard-card lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-6'>
			<Weather />
			<WeatherBlob />
		</aside>
	)
}

export default WeatherContainer
