import React, { Suspense } from 'react'
import Loading from '../../components/loading/Loading'
import { motion } from 'framer-motion'

const Login = React.lazy(() => import('../../components/auth/Login'))
const Blob = React.lazy(() => import('../../components/blob/Blob'))

function LoginContainer() {
	return (
		<Suspense fallback={<Loading />}>
			<motion.section
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='relative flex items-center justify-between row-start-2 row-end-[8] col-span-full'>
				<Login />
				<Blob />
			</motion.section>
		</Suspense>
	)
}

export default LoginContainer
