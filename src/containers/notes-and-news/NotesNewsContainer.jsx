import { useState } from 'react'
import NotesContainer from '../notes/NotesContainer'
import NewsContainer from '../news/NewsContainer'
import { useModal } from '../../hooks/useModal'
import {
	IoNewspaperOutline,
	IoBookOutline,
	IoChevronForwardOutline,
	IoChevronBackOutline,
} from 'react-icons/io5'

function NotesNewsContainer() {
	const [currentTab, setCurrentTab] = useState(1)
	const { isOpen, toggle } = useModal()

	const activeTab = index => setCurrentTab(index)

	return (
		<>
			<div className='fixed top-[64%] -left-0'>
				{!isOpen && (
					<IoChevronForwardOutline
						className='w-6 h-6 menu-icon hover:text-yellow-dark'
						onClick={toggle}
					/>
				)}
				{isOpen && (
					<IoChevronBackOutline
						className='w-6 h-6 menu-icon hover:text-yellow-dark'
						onClick={toggle}
					/>
				)}
			</div>
			<div
				className={
					!isOpen
						? 'menu-closed z-50 top-[70%] p-1 flex flex-col gap-2 ring-2 ring-yellow-600 dashboard-card'
						: 'menu-open z-50 top-[70%] p-1 flex flex-col gap-2 ring-2 ring-yellow-600 dashboard-card'
				}>
				<div
					className={currentTab === 1 ? 'tab-active' : 'tab-normal'}
					onClick={() => activeTab(1)}>
					<IoNewspaperOutline />
				</div>
				<div
					className={currentTab === 2 ? 'tab-active' : 'tab-normal'}
					onClick={() => activeTab(2)}>
					<IoBookOutline />
				</div>
			</div>
			<NotesContainer currentTab={currentTab} />
			<NewsContainer currentTab={currentTab} />
		</>
	)
}

export default NotesNewsContainer
