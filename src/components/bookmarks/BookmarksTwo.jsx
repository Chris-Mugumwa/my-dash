import { useState, useEffect } from 'react'
import { useModal } from '../../hooks/useModal'
import { auth, db } from '../../firebase'
import { onSnapshot, collection } from 'firebase/firestore'
import BookmarksModalTwo from './BookmarksModalTwo'
import { IoEllipsisVerticalOutline } from 'react-icons/io5'

function BookmarksTwo() {
	const [bookmarkTwo, setBookmarkTwo] = useState({
		name: 'linkedin',
		url: 'www.linkedin.com',
	})
	const currentUser = auth?.currentUser
	const { isOpen, toggle } = useModal()
	const colRef = collection(db, 'users', `${currentUser?.uid}`, 'bookmarksTwo')

	useEffect(() => {
		onSnapshot(colRef, snapshot => {
			let marks = []
			snapshot.forEach(doc => {
				marks.push({ ...doc.data(), id: doc.id })
				setBookmarkTwo(marks[0])
			})
		})
	}, [])

	return (
		<>
			{isOpen === true && (
				<BookmarksModalTwo isOpen={isOpen} toggle={toggle} />
			)}
			<div className='bookmark-container'>
				<IoEllipsisVerticalOutline
					className='bookmark-icon'
					onClick={toggle}
				/>

				<a
					target='_blank'
					rel='noopener noreferrer'
					href={`https://${bookmarkTwo?.url}`}
					className='bookmark-link'>
					<img
						src={`https://www.google.com/s2/favicons?domain=https://${bookmarkTwo?.url}&sz=48`}
						alt='link'
					/>
				</a>
			</div>
		</>
	)
}

export default BookmarksTwo
