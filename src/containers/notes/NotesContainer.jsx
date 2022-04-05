import Notes from '../../components/notes/Notes'

function NotesContainer({ currentTab }) {
	return (
		<div
			className={
				currentTab === 2
					? 'relative z-20 flex justify-center row-start-4 row-end-5 overflow-y-scroll dashboard-card col-span-full lg:col-start-1 lg:col-end-6 lg:row-start-3 lg:row-end-5 scrollbar scroll-thumb-yellow-dark scrollbar-track-transparent scroll-thumb-rounded-full'
					: 'hidden'
			}>
			<Notes />
		</div>
	)
}

export default NotesContainer
