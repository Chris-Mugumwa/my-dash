import Notes from '../../components/notes/Notes'
// import { DnDProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'

function NotesContainer() {
	return (
		// <DnDProvider backend={HTML5Backend}>// </DnDProvider>
		<div className='relative z-20 flex justify-center row-start-4 row-end-5 dashboard-card col-span-full lg:col-start-1 lg:col-end-6 lg:row-start-3 lg:row-end-5'>
			<Notes />
		</div>
	)
}

export default NotesContainer
