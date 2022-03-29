import News from '../../components/news/News'

function NewsContainer() {
	return (
		<section className='relative z-10 row-start-4 row-end-5 dashboard-card col-span-full lg:col-start-1 lg:col-end-6 lg:row-start-3 lg:row-end-5'>
			<News />
		</section>
	)
}

export default NewsContainer
