import { useState } from 'react'
import User from '../user/User'
import { IoCloudyNightOutline } from 'react-icons/io5'

function WeatherSearch() {
	const [destination, setDestination] = useState('')

	const handleSubmit = event => {
		event.preventDefault()
	}

	return (
		<div className='flex items-center justify-between w-full h-full row-start-1 row-end-2 col-span-full'>
			<form
				autoComplete='off'
				className='relative xl:w-[23.4rem]'
				onSubmit={handleSubmit}>
				<input
					type='text'
					name='weather search'
					placeholder='Search a location'
					onChange={event => setDestination(event.target.value)}
					value={destination}
					className='w-full form-input'
				/>
				<button
					type='submit'
					className='absolute top-0 right-0 p-3 bg-white rounded-md'>
					<IoCloudyNightOutline className='text-gray-900 transition duration-300 hover:scale-110' />
				</button>
			</form>
			<User />
		</div>
	)
}

export default WeatherSearch
