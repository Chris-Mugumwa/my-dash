import { useState, useEffect } from 'react'
import { useModal } from '../../hooks/useModal'
import { auth, db } from '../../firebase'
import { onSnapshot, collection } from 'firebase/firestore'
import { IoEllipsisVerticalOutline } from 'react-icons/io5'
import BookmarksModalFour from './BookmarksModalFour'

function BookmarksFour() {
	const [bookmarkFour, setBookmarkFour] = useState({
		name: 'netflix',
		url: 'https://www.netflix.com/',
	})
	const currentUser = auth?.currentUser
	const { isOpen, toggle } = useModal()
	const colRef = collection(
		db,
		'users',
		`${currentUser?.uid}`,
		'bookmarksFour',
	)

	useEffect(() => {
		onSnapshot(colRef, snapshot => {
			let marks = []
			snapshot.forEach(doc => {
				marks.push({ ...doc.data(), id: doc.id })
				setBookmarkFour(marks[0])
			})
		})
	}, [])

	return (
		<>
			{isOpen === true && (
				<BookmarksModalFour isOpen={isOpen} toggle={toggle} />
			)}
			<div className='bookmark-container'>
				<IoEllipsisVerticalOutline
					className='bookmark-icon'
					onClick={toggle}
				/>

				<a
					target='_blank'
					rel='noopener noreferrer'
					href={`https://${bookmarkFour?.url}`}
					className='bookmark-link'>
					<img
						src={`https://www.google.com/s2/favicons?domain=https://${bookmarkFour?.url}&sz=48`}
						alt='link'
					/>
				</a>
			</div>
		</>
	)
}

export default BookmarksFour
