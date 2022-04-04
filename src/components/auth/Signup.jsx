import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGoogleAuth } from '../../hooks/useGoogleAuth'
import { db, auth } from '../../firebase'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import {
	updateProfile,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
} from 'firebase/auth'
import { signupData, validationSchema, initialValues } from './authData'
import { FcGoogle } from 'react-icons/fc'

function Signup() {
	const [signupSchema] = useState(signupData)
	const provider = new GoogleAuthProvider()
	const { googleClick, setGoogleClick } = useGoogleAuth(provider)
	const navigate = useNavigate()

	const googleSignup = () => setGoogleClick(true)

	return (
		<div className='relative z-20 justify-center w-full md:justify-start md:w-1/2'>
			<div className='relative z-50 px-4 pt-4 md:px-6 '>
				<h1 className='text-6xl tracking-wider text-white md:text-8xl font-ropa-sans'>
					Sign Up
				</h1>

				<h3 className='pt-2 pb-4 text-md text-teal-light font-poppins md:text-xl'>
					Hey there, glad to have you here
				</h3>
			</div>
			<div className='max-w-sm px-6 py-2 mt-2 bg-blue-light rounded-2xl md:px-6 md:mx-6'>
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

								navigate(`/dashboard`)
							})
							.catch(error => {
								const errorCode = error.code
								const errorMessage = error.message
								console.log(errorCode)
								console.log(errorMessage)
							})
					}}>
					<Form
						className='flex flex-col items-center bg-blue-light'
						autocomplete='off'>
						{signupSchema.map(data => (
							<div
								className='relative flex flex-col w-full'
								key={data.id}>
								<label className='self-start py-2 text-sm text-blue-lighter font-poppins'>
									{data.name}
								</label>
								<Field
									id={data.id}
									type={data.type}
									name={data.name}
									autocomplete='off'
									placeholder={data.placeholder}
									className='field-primary'
								/>
								{googleClick === true ||
								googleClick === false ? null : (
									<ErrorMessage
										name={data.name}
										component='div'
										className='error-message'
									/>
								)}
							</div>
						))}

						<div className='w-full pt-4'>
							<button type='submit' className='button-auth'>
								Sign In
							</button>
						</div>

						<div className='flex items-center self-end pt-4'>
							<p className='pr-2 text-blue-lighter'>
								Sign in with Google instead
							</p>

							<div className='button-google'>
								<button
									className='focus:outline-none'
									onClick={() => googleSignup()}>
									<FcGoogle
										icon='flat-color-icons:google'
										className='w-8 h-8'
									/>
								</button>
							</div>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	)
}

export default Signup
