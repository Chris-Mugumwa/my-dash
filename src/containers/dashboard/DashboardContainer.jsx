import React, { Suspense } from 'react'
import Loading from '../../components/loading/Loading'
import { motion } from 'framer-motion'

function DashboardContainer() {
	return (
		<Suspense fallback={<Loading />}>
			<motion.main
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}>
				<h1>I like a do, da chacha</h1>
			</motion.main>
		</Suspense>
	)
}

export default DashboardContainer
