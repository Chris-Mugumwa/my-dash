import { useState, useEffect } from 'react'
import { useModal } from '../../hooks/useModal'
import { auth, db } from '../../firebase'
import { onSnapshot, collection } from 'firebase/firestore'
import { IoEllipsisVerticalOutline } from 'react-icons/io5'
import BookmarksModalThree from './BookmarksModalThree'

function BookmarksThree() {
	const [bookmarkThree, setBookmarkThree] = useState({
		name: 'bbc news',
		url: 'https://www.bbc.com/news/world',
	})
	const currentUser = auth?.currentUser
	const { isOpen, toggle } = useModal()
	const colRef = collection(
		db,
		'users',
		`${currentUser?.uid}`,
		'bookmarksThree',
	)

	useEffect(() => {
		onSnapshot(colRef, snapshot => {
			let marks = []
			snapshot.forEach(doc => {
				marks.push({ ...doc.data(), id: doc.id })
				setBookmarkThree(marks[0])
			})
		})
	}, [])

	return (
		<>
			{isOpen === true && (
				<BookmarksModalThree isOpen={isOpen} toggle={toggle} />
			)}
			<div className='bookmark-container'>
				<IoEllipsisVerticalOutline
					className='bookmark-icon'
					onClick={toggle}
				/>

				<div
					onClick={() => window.open(`${bookmarkThree?.url}`, '_blank')}
					className='bookmark-link'>
					<img
						src={`https://www.google.com/s2/favicons?domain=${bookmarkThree?.url}&sz=48`}
						alt='link'
					/>
				</div>
			</div>
		</>
	)
}

export default BookmarksThree