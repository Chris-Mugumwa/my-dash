import * as Yup from 'yup'

export const initialValues = { name: '', email: '', password: '' }

export const validationSchema = Yup.object().shape({
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

export const signupData = [
	{
		id: 'name',
		type: 'text',
		name: 'name',
		placeholder: 'e.g. John',
	},
	{
		id: 'email',
		type: 'email',
		name: 'email',
		placeholder: 'e.g. John@gmail.com',
	},
	{
		id: 'password',
		type: 'password',
		name: 'password',
		placeholder: 'Must be 6 characters or longer',
	},
]

export const loginData = [
	{
		id: 'email',
		type: 'email',
		name: 'email',
		placeholder: 'e.g. John@gmail.com',
	},
	{
		id: 'password',
		type: 'password',
		name: 'password',
		placeholder: 'Must be 6 characters or longer',
	},
]
