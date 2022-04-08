import { useState, useEffect } from 'react'
import { useModal } from '../../hooks/useModal'
import { auth, db } from '../../firebase'
import { onSnapshot, collection } from 'firebase/firestore'
import { IoEllipsisVerticalOutline } from 'react-icons/io5'
import BookmarkModalSix from './BookmarksModal'

function BookmarkSix() {
	const [bookmarkSix, setBookmarkSix] = useState([
		{
			name: 'Spotify',
			url: 'https://www.spotify.com',
		},
	])
	const currentUser = auth?.currentUser
	const { isOpen, toggle } = useModal()
	const colRef = collection(db, 'users', `${currentUser?.uid}`, 'bookmarksSix')

	useEffect(() => {
		onSnapshot(colRef, snapshot => {
			let marks = []
			snapshot.forEach(doc => {
				marks.push({ ...doc.data(), id: doc.id })
				setBookmarkSix(marks[0])
			})
		})
	}, [])

	return (
		<>
			{isOpen === true && (
				<BookmarkModalSix isOpen={isOpen} toggle={toggle} />
			)}
			<div className='bookmark-container'>
				<IoEllipsisVerticalOutline
					className='bookmark-icon'
					onClick={toggle}
				/>

				<div
					onClick={() => window.open(`${bookmarkSix?.url}`, '_blank')}
					className='bookmark-link'>
					<img
						src={`https://www.google.com/s2/favicons?domain=${bookmarkSix?.url}&sz=48`}
						alt='link'
					/>
				</div>
			</div>
		</>
	)
}

export default BookmarkSix
