import { useState } from 'react'
import { auth, db } from '../../firebase'
import { setDoc, doc, collection, onSnapshot } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

function BookmarksModal({ isOpen, toggle, setName, setUrl, name, url }) {
	const currentUser = auth?.currentUser

	const submitHandler = () => console.log('Handled!')
	const bookmarksRef = doc(
		db,
		'users',
		`${currentUser.uid}`,
		'bookmarks',
		`${uuidv4()}`,
	)

	const addBookmark = async event => {
		event.preventDefault()
		await setDoc(bookmarksRef, {
			id: uuidv4(),
			name: name,
			url: url,
			favicon: `https://www.google.com/s2/favicons?domain=${url}&sz=48`,
		})
	}

	return createPortal(
		<AnimatePresence exitBeforeEnter>
			{isOpen === true && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed z-50 top-0 left-0 right-0 flex justify-center w-[100vw] h-[100vh] bg-black-faded items-center'>
					<div className='p-4 rounded-md bg-blue-dark h-[14rem] w-[80%] md:w-[55%] lg:w-[45%] '>
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
						</form>
					</div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.getElementById('bookmarks'),
	)
}

export default BookmarksModal
