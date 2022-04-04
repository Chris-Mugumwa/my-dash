import { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import Avatar from 'react-nice-avatar'

function User() {
	const [name, setName] = useState('User')
	const [photo, setPhoto] = useState(undefined)
	const currentUser = auth?.currentUser

	useEffect(() => {
		if (currentUser) {
			setName(currentUser?.displayName)
			setPhoto(currentUser?.photoURL)
		}
	}, [currentUser, setName, setPhoto])

	return (
		<section className='flex items-center justify-center'>
			<h5 className='hidden text-sm text-white md:flex font-poppins'>
				{name}
			</h5>

			{currentUser?.photoURL !== null ? (
				<img src={photo} alt='User' className='w-10 h-10 ml-1 rounded-md' />
			) : (
				<Avatar className='w-10 h-10 ml-1 rounded-md' />
			)}
		</section>
	)
}

export default User
