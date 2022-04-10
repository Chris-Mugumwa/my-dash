import { useState } from 'react'
import { useGoogleAuth } from '../../hooks/useGoogleAuth'
import { auth } from '../../firebase'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth'
import { loginData } from './authData'
import * as Yup from 'yup'
import { FcGoogle } from 'react-icons/fc'

const initialValues = { name: '', email: '', password: '' }

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Name too short')
		.max(15, 'Name too Long')
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string()
		.min(5, 'Password too short, password should be at least 6 characters')
		.max(20, 'Password too long, password should be less than 20 characters')
		.required('Required'),
})

function Login() {
	const [loginSchema, setLoginSchema] = useState(loginData)
	const provider = new GoogleAuthProvider()
	const { googleClick, setGoogleClick } = useGoogleAuth(provider)

	const googleSignup = () => setGoogleClick(true)

	return (
		<div className='relative z-20 justify-center w-full md:justify-start md:w-1/2'>
			<div className='relative z-50 px-4 pt-4 md:px-6 '>
				<h1 className='text-6xl tracking-wider text-white md:text-8xl font-ropa-sans'>
					Login
				</h1>

				<h3 className='pt-2 pb-4 text-md text-teal-light font-poppins md:text-xl'>
					Hey there, glad to have you back
				</h3>
			</div>
			<div className='max-w-sm px-6 py-2 mt-2 bg-blue-light rounded-2xl md:px-6 md:mx-6'>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={values => {
						signInWithEmailAndPassword(
							auth,
							values.email,
							values.password,
						).catch(error => {
							const errorCode = error.code
							const errorMessage = error.message
							errorCode || errorMessage
								? console.log(errorCode)
								: console.log(errorMessage)
						})
					}}>
					<Form
						className='flex flex-col items-center bg-blue-light'
						autocomplete='off'>
						{loginSchema.map(data => (
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
								Login
							</button>
						</div>

						<div className='flex items-center self-end pt-4'>
							<p className='pr-2 text-blue-lighter'>
								Login with Google instead
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

export default Login
