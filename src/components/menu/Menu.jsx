import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
	IoExitOutline,
	IoBookOutline,
	IoPartlySunnyOutline,
} from 'react-icons/io5'

const menuData = [
	{
		name: 'News Feed',
		icon: <IoBookOutline />,
		path: '/news',
	},
	{
		name: 'Weather Data',
		icon: <IoPartlySunnyOutline />,
		path: '/weather',
	},
]

function Menu({ isOpen, toggle }) {
	const [menuItems] = useState(menuData)

	return (
		<nav className={isOpen === false ? 'menu-closed' : 'menu-open'}>
			<ul className='flex flex-col gap-2'>
				{menuItems.map(item => (
					<NavLink
						to={item.path}
						key={item.name}
						className={({ isActive }) =>
							isActive ? 'link-active' : 'link-normal'
						}
						onClick={toggle}>
						<span className='mr-1'>{item.icon}</span>
						<h5>{item.name}</h5>
					</NavLink>
				))}
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? 'link-active' : 'link-normal'
					}
					onClick={() => auth.signOut()}>
					<IoExitOutline className='mr-1' />
					<h5>Logout</h5>
				</NavLink>
			</ul>
		</nav>
	)
}

export default Menu
