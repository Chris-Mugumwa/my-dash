import { useState, useEffect } from 'react'
import { useModal } from '../../hooks/useModal'
import { Link } from 'react-router-dom'

import { IoEllipsisVerticalOutline } from 'react-icons/io5'
import BookmarksModal from './BookmarksModal'

const bookmarksData = [
	{
		name: 'youtube',
		url: 'https://www.youtube.com',
	},
	{
		name: 'linkedin',
		url: 'https://www.linkedin.com',
	},
	{
		name: 'bbc news',
		url: 'https://www.bbc.com/news/world',
	},
	{
		name: 'netflix',
		url: 'https://www.netflix.com/',
	},
]

function Bookmarks() {
	const [name, setName] = useState('')
	const [url, setUrl] = useState('')

	const { isOpen, toggle } = useModal()

	return (
		<section className='flex items-center justify-around h-full'>
			{isOpen === true && (
				<BookmarksModal
					isOpen={isOpen}
					toggle={toggle}
					setName={setName}
					setUrl={setUrl}
					name={name}
					url={url}
				/>
			)}
			{bookmarksData.map(bookmark => (
				<div
					key={bookmark.name}
					className='relative flex flex-col justify-center px-4 py-2 rounded-md hover:bg-blue-dark transition duration-300 h-[4rem]'>
					<IoEllipsisVerticalOutline
						className='absolute right-0 text-white transition duration-300 cursor-pointer hover:scale-110 top-1'
						onClick={toggle}
					/>

					<a
						href={bookmark.url}
						target='_blank'
						rel='noopener noreferrer'
						className='w-10 h-10 p-1 bg-white rounded-full'>
						<img
							src={`https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=48`}
							alt='link'
						/>
					</a>
				</div>
			))}
		</section>
	)
}

export default Bookmarks
