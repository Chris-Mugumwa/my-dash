import { useDate } from '../../hooks/useDate'

function Date() {
	const { day, today, month, year } = useDate()

	return (
		<>
			<h3 className='text-lg text-center text-white transition-all sm:text-2xl md:text-3xl xl:text-3xl font-poppins'>{`${day}, ${today} ${month}, ${year}`}</h3>
		</>
	)
}

export default Date
