import { useState } from 'react'
import WeeklyWeather from '../../components/weather/WeeklyWeather'
import User from '../../components/user/User'
import { IoCloudyNightOutline } from 'react-icons/io5'

function WeeklyWeatherContainer() {
	const [destination, setDestination] = useState('')
	const [place, setPlace] = useState('')

	const handleSubmit = event => {
		event.preventDefault()
		setPlace(destination)
	}

	return (
		<section className='col-span-full row-start-2 row-end-3 grid grid-cols-7 grid-rows-[3rem_minmax(h-fit,_1fr)_minmax(h-fit,_2fr)_minmax(h-fit,_1fr)_5rem] gap-1 '>
			<div className='flex items-center justify-between w-full h-full row-start-1 row-end-2 col-span-full'>
				<form
					autoComplete='off'
					className='relative xl:w-[23.4rem]'
					onSubmit={handleSubmit}>
					<input
						type='text'
						name='weather search'
						placeholder='Search a location'
						required
						onChange={event => setDestination(event.target.value)}
						value={destination}
						className='w-full form-input'
					/>
					<button
						type='submit'
						onClick={handleSubmit}
						className='absolute top-0 right-0 p-3 bg-white rounded-md'>
						<IoCloudyNightOutline className='text-gray-900 transition duration-300 hover:scale-110' />
					</button>
				</form>
				<User />
			</div>
			<WeeklyWeather place={place} />
		</section>
	)
}

export default WeeklyWeatherContainer
