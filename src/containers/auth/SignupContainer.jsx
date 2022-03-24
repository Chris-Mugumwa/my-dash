import React, { Suspense } from 'react'
import Loading from '../../components/loading/Loading'
import { motion } from 'framer-motion'

const Signup = React.lazy(() => import('../../components/auth/Signup'))
const Blob = React.lazy(() => import('../../components/blob/Blob'))

function SignupContainer() {
	return (
		<Suspense fallback={<Loading />}>
			<motion.section
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='relative flex items-center justify-between row-start-2 row-end-[8] col-span-full'>
				<Signup />
				<Blob />
			</motion.section>
		</Suspense>
	)
}

export default SignupContainer
