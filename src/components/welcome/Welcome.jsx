import { useNavigate } from 'react-router-dom'

function Welcome() {
	const navigate = useNavigate()

	return (
		<section className='relative z-20 flex flex-col items-center justify-center w-full h-screen sm:w-1/2 md:items-start'>
			<h1 className='mb-4 font-medium tracking-wider text-white text-7xl md:8xl xl:text-9xl font-ropa-sans'>
				My Dash
			</h1>
			<h2 className='mb-4 text-4xl tracking-wide md:6xl xl:7xl text-teal-light font-poppins'>
				Simplify your browser <span className='block'>home page</span>
			</h2>
			<div className='flex flex-col w-[80%] pt-4 md:pt-8 lg:flex-row lg:items-center'>
				<button
					className='w-full text-white transition duration-300 h-14 bg-yellow-dark hover:bg-yellow-500 hover:scale-105 active:scale-100 font-poppins md:h-14 md:w-48 rounded-xl md:text-xl lg:mr-6'
					onClick={() => navigate('/sign-up')}>
					Sign Up
				</button>

				<button
					className='w-full mt-4 transition duration-300 border-4 h-14 text-yellow-dark border-yellow-dark md:mt-8 lg:mt-0 hover:border-yellow-500 hover:text-yellow-500 font-poppins md:h-14 md:w-48 rounded-xl md:text-xl hover:scale-105 active:scale-100'
					onClick={() => navigate('/login')}>
					Login
				</button>
			</div>
		</section>
	)
}

export default Welcome
