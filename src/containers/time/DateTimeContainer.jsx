import Time from '../../components/time/Time'
import Date from '../../components/date/Date'

function DateTimeContainer() {
	return (
		<section className='flex flex-col items-center justify-center col-start-1 col-end-4 row-start-2 row-end-3 gap-2  dashboard-card lg:order-1 lg:col-start-1 lg:col-end-3'>
			<Time />
			<Date />
		</section>
	)
}

export default DateTimeContainer
