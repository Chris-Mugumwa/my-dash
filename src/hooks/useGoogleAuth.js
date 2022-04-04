import { useState, useEffect } from 'react'
import { db, auth } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { bookmarkData } from '../data/reusableData'

export const useGoogleAuth = provider => {
	const [googleClick, setGoogleClick] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		if (googleClick === true) {
			signInWithPopup(auth, provider)
				.then(result => {
					const user = result.user

					try {
						const usersRef = doc(db, 'users', `${user.uid}`)
						setDoc(usersRef, {
							id: user.uid,
							displayName: user.displayName,
							email: user.email,
							photo: user.photoURL,
							active: true,
						}).then(() => {
							bookmarkData.map(bookmark => {
								const bookmarksRef = doc(
									db,
									'users',
									`${User.uid}`,
									'bookmarks',
									`${bookmark.id}`,
								)
								setDoc(bookmarksRef, {
									name: bookmark.name,
									url: bookmark.url,
									favicon: `https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=36`,
									createdAt: serverTimestamp(),
								})
							})
						})
					} catch (error) {
						console.error('Error adding document: ', error)
					}
					navigate(`/dashboard`)
				})
				.catch(error => console.log('Error has occurred', error))
		}

		return () =>
			setTimeout(() => {
				setGoogleClick(false)
			}, 3000)
	}, [googleClick])

	return { googleClick, setGoogleClick }
}
