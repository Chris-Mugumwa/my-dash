import { useState } from 'react'
import { auth, db } from '../../firebase'
import { setDoc, doc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

function BookmarksModal({ isOpen, toggle }) {
	const [name, setName] = useState('')
	const [url, setUrl] = useState('')
	const currentUser = auth?.currentUser

	const bookmarksRef = doc(
		db,
		'users',
		`${currentUser.uid}`,
		'bookmarks',
		`bookmark`,
	)

	const addBookmark = () => {
		deleteDoc(bookmarksRef)
		setDoc(bookmarksRef, {
			name,
			url,
			favicon: `https://www.google.com/s2/favicons?domain=${url}&sz=48`,
			createdAt: serverTimestamp(),
		}).then(() => toggle())
	}

	return createPortal(
		<AnimatePresence exitBeforeEnter>
			{isOpen === true && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed z-50 top-0 left-0 right-0 flex justify-center w-[100vw] h-[100vh] bg-black-faded items-center gap-2'>
					<div className='p-4 flex flex-col gap-2 rounded-md bg-blue-dark h-[14rem] w-[80%] md:w-[55%] lg:w-[45%] '>
						<form className='flex flex-col gap-2' autoComplete='off'>
							<label className='self-start text-sm text-blue-lighter font-poppins'>
								name
							</label>
							<input
								type='text'
								name='name'
								placeholder='e.g. Gmail'
								className='form-input'
								onChange={event => setName(event.target.value)}
								value={name}
							/>
							<label className='self-start text-sm text-blue-lighter font-poppins'>
								url
							</label>
							<input
								type='text'
								name='url'
								placeholder='e.g. www.gmail.com'
								className='form-input'
								onChange={event => setUrl(event.target.value)}
								value={url}
							/>
						</form>

						<div className='flex self-end gap-2 mt-1'>
							<button
								type='submit'
								className='px-4 py-1 text-white transition duration-300 rounded-md bg-yellow-dark font-ropa-sans hover:bg-yellow-500'
								onClick={() => addBookmark()}>
								Done
							</button>
							<button
								className='px-4 py-1 text-white transition duration-300 rounded-md bg-blue-light font-ropa-sans hover:bg-blue-lighter'
								onClick={toggle}>
								Cancel
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.getElementById('bookmarks'),
	)
}

export default BookmarksModal
