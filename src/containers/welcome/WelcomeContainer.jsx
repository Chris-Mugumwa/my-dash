import React, { Suspense } from 'react'
import Loading from '../../components/loading/Loading'
import { motion } from 'framer-motion'

const Welcome = React.lazy(() => import('../../components/welcome/Welcome'))
const Blob = React.lazy(() => import('../../components/blob/Blob'))

function WelcomeContainer() {
	return (
		<Suspense fallback={<Loading />}>
			<motion.section
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='relative flex items-center justify-between row-start-2 row-end-[8] col-span-full min-h-screen'>
				<Welcome />
				<Blob />
			</motion.section>
		</Suspense>
	)
}

export default WelcomeContainer
