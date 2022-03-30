import { useState } from 'react'
import {
	IoAddOutline,
	IoCheckmarkOutline,
	IoTrashOutline,
	IoPencilOutline,
} from 'react-icons/io5'

function Notes() {
	const [note, setNote] = useState('')

	const handleSubmit = () => console.log('I like it a lot')
	return (
		<section className='flex flex-col gap-3 items-center w-[80%] lg:w-[70%] '>
			<form onSubmit={handleSubmit} className='relative w-full'>
				<input
					type='text'
					name='note'
					placeholder='Write your note here ...'
					onChange={event => setNote(event.target.value)}
					value={note}
					className='w-full form-input bg-blue-dark'
				/>
				<button
					type='submit'
					className='absolute top-0 right-0 p-3 bg-white rounded-md'>
					<IoAddOutline className='text-gray-900 duration-300 transtion hover:scale-110' />
				</button>
			</form>
			<div className='relative w-full cursor-pointer form-input bg-blue-dark'>
				<p>I like Cheese on toast</p>
				<div className='absolute top-0 right-0 flex'>
					<button
						type='submit'
						className='p-3 rounded-md hover:bg-yellow-dark'>
						<IoCheckmarkOutline className='text-white duration-300 transtion hover:scale-110' />
					</button>
					<button
						type='submit'
						className='p-3 rounded-md hover:bg-teal-light'>
						<IoPencilOutline className='text-white duration-300 transtion hover:scale-110' />
					</button>
					<button
						type='submit'
						className='p-3 rounded-md hover:bg-blue-lighter'>
						<IoTrashOutline className='text-white duration-300 transtion hover:scale-110' />
					</button>
				</div>
			</div>
		</section>
	)
}

export default Notes
