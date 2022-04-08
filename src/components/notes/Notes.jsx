import { useState, useEffect } from 'react'
import { auth, db } from '../../firebase'
import {
	collection,
	doc,
	setDoc,
	updateDoc,
	onSnapshot,
	Timestamp,
	deleteDoc,
} from 'firebase/firestore'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {
	IoAddOutline,
	IoCheckmarkOutline,
	IoTrashOutline,
	IoPencilOutline,
} from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'

function Notes() {
	const [note, setNote] = useState('')
	const [notes, setNotes] = useState([])
	const [isComplete, setIsComplete] = useState(false)
	const currentUser = auth?.currentUser
	const [randomId, setRandomId] = useState(1)
	const colRef = collection(db, 'users', `${currentUser?.uid}`, 'notes')

	useEffect(() => {
		onSnapshot(colRef, snapshot => {
			setNotes(snapshot.docs.map(doc => doc.data()))
		})
	}, [])

	const addNote = newNote => {
		setRandomId(prevState => prevState + 1)
		const notesRef = doc(
			db,
			'users',
			`${currentUser.uid}`,
			'notes',
			`${randomId}`,
		)
		if (newNote?.length >= 1) {
			setDoc(notesRef, {
				id: randomId,
				note: newNote,
				complete: false,
				createdAt: Timestamp.fromDate(new Date()),
			}).then(() => setNote(''))
		}
	}

	const completeNote = existingNote => {
		const notesRef = doc(
			db,
			'users',
			`${currentUser.uid}`,
			'notes',
			`${existingNote.id}`,
		)
		setIsComplete(prevState => !prevState)
		updateDoc(notesRef, {
			complete: isComplete,
		})
	}

	const editNote = existingNote => {
		const notesRef = doc(
			db,
			'users',
			`${currentUser.uid}`,
			'notes',
			`${existingNote.id}`,
		)

		setNote(existingNote.note)
		deleteDoc(notesRef)
		updateDoc(notesRef, {
			note,
		})
	}

	const deleteNote = existingNote => {
		const notesRef = doc(
			db,
			'users',
			`${currentUser.uid}`,
			'notes',
			`${existingNote.id}`,
		)
		deleteDoc(notesRef)
	}

	const handleSubmit = event => {
		event.preventDefault()
		addNote()
	}

	const handleEnd = result => {
		if (!result.destination) return
		const items = Array.from(notes)
		const [reorderedItem] = items.splice(result.source.index, 1)
		items.splice(result.destination.index, 0, reorderedItem)
		setNotes(items)
	}

	return (
		<section className='flex flex-col gap-3 items-center w-[80%] lg:w-[70%] '>
			<form className='relative w-full' onSubmit={handleSubmit}>
				<input
					type='text'
					name='note'
					required
					autoComplete='off'
					placeholder='Write your note here ...'
					onChange={event => setNote(event.target.value)}
					value={note}
					className='w-full form-input bg-blue-dark'
				/>
				<button
					type='submit'
					className='absolute top-0 right-0 p-3 bg-white rounded-md'
					onClick={() => addNote(note)}>
					<IoAddOutline className='text-gray-900 transition duration-300 hover:scale-110' />
				</button>
			</form>

			<DragDropContext onDragEnd={handleEnd}>
				<Droppable droppableId='notes'>
					{provided => (
						<AnimatePresence exitBeforeEnter>
							<motion.ul
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								{...provided.droppableProps}
								ref={provided.innerRef}
								className='flex flex-col w-full h-full gap-2'>
								{notes.map((todo, index) => (
									<Draggable
										key={todo.id}
										draggableId={todo.id.toString()}
										index={index}>
										{provided => (
											<div
												className='relative w-full cursor-pointer form-input bg-blue-dark'
												{...provided.draggableProps}
												ref={provided.innerRef}
												{...provided.dragHandleProps}
												key={todo.id}>
												<p
													key={todo.id}
													className={
														todo.complete === true
															? 'line-through text-gray-300'
															: ''
													}>
													{todo.note}
												</p>
												<div className='absolute top-0 right-0 flex'>
													<button
														className='p-3 rounded-md hover:bg-yellow-dark'
														onClick={() => completeNote(todo)}>
														<IoCheckmarkOutline
															className={
																'text-white duration-300 transition hover:scale-110'
															}
														/>
													</button>
													<button
														className='p-3 rounded-md hover:bg-teal-light'
														onClick={() => editNote(todo)}>
														<IoPencilOutline className='text-white transition duration-300 hover:scale-110' />
													</button>
													<button
														className='p-3 rounded-md hover:bg-blue-lighter'
														onClick={() => deleteNote(todo)}>
														<IoTrashOutline className='text-white transition duration-300 hover:scale-110' />
													</button>
												</div>
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</motion.ul>
						</AnimatePresence>
					)}
				</Droppable>
			</DragDropContext>
		</section>
	)
}

export default Notes
