import WeeklyWeather from '../../components/weather/WeeklyWeather'
import Bookmarks from '../bookmarks/BookmarksContainer'

function WeeklyWeatherContainer() {
	return (
		<section className='col-span-full row-start-2 row-end-3 grid grid-cols-7 grid-rows-[3rem_repeat(3,_1fr)_5rem] gap-1'>
			<WeeklyWeather />
			<Bookmarks />
		</section>
	)
}

export default WeeklyWeatherContainer
