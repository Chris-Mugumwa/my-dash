import Icon from '../../assets/icon.svg?component'
import { useNavigate } from 'react-router-dom'
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import { auth } from '../../firebase'
import { useModal } from '../../hooks/useModal'
import Menu from '../menu/Menu'

function Navigation() {
	const navigate = useNavigate()
	const currentUser = auth?.currentUser
	const { isOpen, toggle } = useModal()

	return (
		<header className='relative row-start-1 row-end-2 col-span-full'>
			<nav className='flex items-center justify-between'>
				{currentUser &&
					(isOpen === false ? (
						<IoMenuOutline className='menu-icon' onClick={toggle} />
					) : (
						<IoCloseOutline className='menu-icon' onClick={toggle} />
					))}

				<Icon
					className='cursor-pointer'
					onClick={() => navigate('/dashboard')}
				/>
			</nav>
			<Menu isOpen={isOpen} toggle={toggle} />
		</header>
	)
}

export default Navigation
