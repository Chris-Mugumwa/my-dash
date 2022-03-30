import News from '../../components/news/News'

function NewsContainer() {
	return (
		<section className='relative z-10 grid grid-cols-3 grid-rows-2 row-start-4 row-end-5 p-0 dashboard-card col-span-full lg:col-start-1 lg:col-end-6 lg:row-start-3 lg:row-end-5'>
			<News />
		</section>
	)
}

export default NewsContainer
