import Quotes from '../../components/quotes/Quotes'

function QuotesContainer() {
	return (
		<section className='col-start-1 col-end-4 row-start-3 row-end-4 p-2 dashboard-card lg:order-2 lg:col-start-3 lg:col-end-6 lg:row-start-2 lg:row-end-3'>
			<Quotes />
		</section>
	)
}

export default QuotesContainer
