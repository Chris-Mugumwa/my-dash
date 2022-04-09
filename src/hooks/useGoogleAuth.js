import { useState, useEffect } from 'react'
import { db, auth } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export const useGoogleAuth = provider => {
	const [googleClick, setGoogleClick] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		if (googleClick === true) {
			signInWithPopup(auth, provider)
				.then(result => {
					const user = result?.user

					try {
						const usersRef = doc(db, 'users', `${user?.uid}`)
						setDoc(usersRef, {
							id: user.uid,
							displayName: user.displayName,
							email: user.email,
							photo: user.photoURL,
							active: true,
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
