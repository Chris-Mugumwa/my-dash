import Weather from '../../components/weather/Weather'
import WeatherBlob from '../../components/blob/WeatherBlob'

function WeatherContainer() {
	return (
		<aside className='relative col-start-4 col-end-8 row-start-2 row-end-4 overflow-hidden dashboard-card lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-6'>
			<Weather />
			<WeatherBlob />
		</aside>
	)
}

export default WeatherContainer
