import Weather from '../../components/weather/Weather'

function WeatherContainer() {
	return (
		<aside className='col-start-4 col-end-8 row-start-2 row-end-4 dashboard-card lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-6'>
			<Weather />
		</aside>
	)
}

export default WeatherContainer
