import { useState, useEffect } from 'react'
import { useModal } from '../../hooks/useModal'
import { auth, db } from '../../firebase'
import { onSnapshot, collection } from 'firebase/firestore'
import { IoEllipsisVerticalOutline } from 'react-icons/io5'
import BookmarksModal from './BookmarksModal'

function Bookmarks() {
	const [bookmarkOne, setBookmarkOne] = useState([
		{
			name: 'youtube',
			url: 'https://www.youtube.com',
		},
	])
	const currentUser = auth?.currentUser
	const { isOpen, toggle } = useModal()
	const colRef = collection(db, 'users', `${currentUser?.uid}`, 'bookmarks')

	useEffect(() => {
		onSnapshot(colRef, snapshot => {
			let marks = []
			snapshot.forEach(doc => {
				marks.push({ ...doc.data(), id: doc.id })
				setBookmarkOne(marks[0])
			})
		})
	}, [])

	return (
		<>
			{isOpen === true && <BookmarksModal isOpen={isOpen} toggle={toggle} />}
			<div className='bookmark-container'>
				<IoEllipsisVerticalOutline
					className='bookmark-icon'
					onClick={toggle}
				/>

				<div
					onClick={() => window.open(`${bookmarkOne?.url}`, '_blank')}
					className='bookmark-link'>
					<img
						src={`https://www.google.com/s2/favicons?domain=${bookmarkOne?.url}&sz=48`}
						alt='link'
					/>
				</div>
			</div>
		</>
	)
}

export default Bookmarks
