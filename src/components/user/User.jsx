import { auth } from '../../firebase'
import Avatar from 'react-nice-avatar'

function User() {
	const currentUser = auth?.currentUser

	return (
		<section className='flex items-center justify-center'>
			<h5 className='hidden text-sm text-white md:flex font-poppins'>
				{currentUser?.displayName}
			</h5>

			{currentUser?.photoURL !== null ? (
				<img
					src={currentUser?.photoURL}
					alt='User'
					className='w-10 h-10 ml-1 rounded-md'
				/>
			) : (
				<Avatar className='w-10 h-10 ml-1 rounded-md' />
			)}
		</section>
	)
}

export default User
