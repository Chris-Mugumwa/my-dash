import { useState } from 'react'
import { db, auth } from '../../firebase'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import { doc, setDoc } from 'firebase/firestore'
import {
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth'

const initialValues = { name: '', email: '', password: '' }

const validationSchema = Yup.object().shape({
	name: yup
		.string()
		.min(2, 'Name too short')
		.max(15, 'Name too Long')
		.required('Required'),
	email: yup.string().email('Invalid email').required('Required'),
	password: yup
		.string()
		.min(5, 'Password too short, password should be at least 6 characters')
		.max(20, 'Password too long, password should be less than 20 characters')
		.required('Required'),
})

function Signup() {
	const [googleClick, setGoogleClick] = useState(false)
	const provider = new GoogleAuthProvider()

	const googleSignup = () => {
		setGoogleClick(true)
		signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user

				try {
					const usersRef = doc(db, 'users', `${user.uid}`)
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

				setOpenSignup(false)
			})
			.catch(error => console.log('Error has occurred', error))
	}

	return (
		<div className='w-1/2'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={values => {
					createUserWithEmailAndPassword(
						auth,
						values.email,
						values.password,
					)
						.then(userCredential => {
							const user = userCredential.user

							updateProfile(user, {
								displayName: values.name,
							})

							try {
								const usersRef = doc(db, 'users', `${user.uid}`)
								setDoc(usersRef, {
									id: user.uid,
									displayName: values.name,
									email: values.email,
									photo: null,
									active: true,
								}).catch(error =>
									console.log('Did not save to db,', error),
								)
							} catch (error) {
								console.error('Error adding document: ', error)
							}
							setOpenSignup(false)
						})
						.catch(error => {
							const errorCode = error.code
							const errorMessage = error.message
							console.log(errorCode)
							console.log(errorMessage)
						})
				}}>
				<Form className='flex flex-col items-center' autocomplete='off'>
					<div className='flex flex-col w-full'>
						<label className='self-start py-2 text-sm text-blue-lighter font-poppins'>
							name
						</label>
						<Field
							id='name'
							type='text'
							name='name'
							autocomplete='off'
							placeholder='e.g. Chris'
							className='h-10 px-4 py-2 text-gray-400 transition rounded-lg bg-blue-dark placeholder-blue-light focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						{googleClick && (
							<ErrorMessage
								name='name'
								component='div'
								className='flex justify-end px-1 pt-1 text-xs text-red-400 transition font-ropa-sans'
							/>
						)}
					</div>

					<div className='flex flex-col w-full'>
						<label className='self-start py-2 text-sm text-blue-lighter font-poppins'>
							email
						</label>
						<Field
							id='email'
							type='email'
							name='email'
							autocomplete='off'
							placeholder='e.g. myName@myEmail.com'
							className='h-10 px-4 py-2 text-gray-400 transition rounded-lg bg-blue-dark placeholder-blue-light focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						{googleClick && (
							<ErrorMessage
								name='email'
								component='div'
								className='flex justify-end px-1 pt-1 text-xs text-red-400 transition font-ropa-sans'
							/>
						)}
					</div>

					<div className='flex flex-col w-full'>
						<label className='self-start py-2 text-sm text-blue-lighter font-poppins'>
							password
						</label>
						<Field
							type='password'
							name='password'
							autocomplete='off'
							placeholder='Must be 6 characters or longer'
							className='h-10 px-4 py-2 text-gray-400 transition rounded-lg bg-blue-dark placeholder-blue-light focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						{googleClick && (
							<ErrorMessage
								name='password'
								component='div'
								className='flex justify-end px-1 pt-1 text-xs text-red-400 transition font-ropa-sans'
							/>
						)}
					</div>

					<div className='w-full pt-4'>
						<button
							type='submit'
							className='w-full px-4 py-2 text-xl text-white transition border-none rounded-lg bg-yellow-dark font-ropa-sans hover:bg-yellow-500 active:bg-yellow-dark focus:outline-none focus:ring-2 focus:ring-yellow-600 active:outline-none'>
							Sign In
						</button>
					</div>

					<div className='flex items-center self-end pt-4'>
						<p className='pr-2 text-blue-lighter'>
							Sign in with Google instead
						</p>

						<div className='flex items-center justify-center p-2 transition transform bg-white rounded-md cursor-pointer hover:scale-110 active:scale-100 focus:outline-none'>
							<button
								className='focus:outline-none'
								onClick={() => googleSignup()}>
								<Icon
									icon='flat-color-icons:google'
									className='w-8 h-8'
								/>
							</button>
						</div>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default Signup
