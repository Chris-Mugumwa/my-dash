import { useTime } from '../../hooks/useTime'

function Time() {
	const { hour, minute } = useTime()

	return (
		<>
			<h2 className='text-center text-3xl transition md:text-5xl xl:text-6xl text-teal-light font-semi-bold font-ropa-sans'>{`${hour}:${minute}`}</h2>
		</>
	)
}

export default Time
