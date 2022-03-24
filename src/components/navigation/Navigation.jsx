import Icon from '../../assets/icon.svg?component'
import { IoMenuOutline } from 'react-icons/io5'

function Navigation() {
	return (
		<header className='row-span-1 col-span-full'>
			<nav className='flex items-center justify-between'>
				<Icon />

				<IoMenuOutline className='w-6 h-6 text-white' />
			</nav>
		</header>
	)
}

export default Navigation
