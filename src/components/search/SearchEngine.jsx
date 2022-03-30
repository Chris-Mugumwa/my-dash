import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

function SearchEngine() {
	const [link, setLink] = useState('')

	const searchEngine = event => {
		event.preventDefault()
		window.open(`https://www.google.com/search?q=${link}`, '_blank')
	}

	return (
		<form
			autoComplete='off'
			className='relative xl:w-[23.4rem]'
			onSubmit={searchEngine}>
			<input
				type='text'
				name='google search'
				id='googleSearch'
				placeholder='Google Search'
				onChange={event => setLink(event.target.value)}
				value={link}
				className='w-full form-input'
			/>
			<a
				href={`https://www.google.com/search?q=${link}`}
				target='_blank'
				rel='noopener noreferrer'
				className='absolute top-0 z-10 p-3 bg-white rounded-md cursor-pointer -right-0'>
				<FcGoogle className='transition duration-300 hover:scale-105' />
			</a>
		</form>
	)
}

export default SearchEngine
