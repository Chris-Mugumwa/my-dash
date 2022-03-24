import HashLoader from 'react-spinners/HashLoader'
import { motion } from 'framer-motion'

function Loading() {
	return (
		<motion.section
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className='relative inset-0 flex items-center justify-center w-screen h-screen bg-blue-dark'>
			<HashLoader color={'#e6bf17'} size={100} />
		</motion.section>
	)
}

export default Loading
