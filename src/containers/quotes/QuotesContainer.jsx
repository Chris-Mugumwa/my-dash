import Quotes from '../../components/quotes/Quotes'

function QuotesContainer() {
	return (
		<section className='flex row-end-5 gap-2 p-2 overflow-y-hidden col-span-full row-stat-4 md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-4 dashboard-card lg:order-2 lg:col-start-3 lg:col-end-6 lg:row-start-2 lg:row-end-3'>
			<span className='block content-["*"] h-full w-1 rounded-full bg-yellow-dark'></span>
			<Quotes />
		</section>
	)
}

export default QuotesContainer
