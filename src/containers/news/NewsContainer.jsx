import News from '../../components/news/News'

function NewsContainer() {
	return (
		<section className='relative z-40 grid w-full h-full grid-cols-3 grid-rows-2 row-start-4 row-end-5 gap-1 p-0 overflow-hidden overflow-y-hidden dashboard-card bg-blue-dark col-span-full lg:col-start-1 lg:col-end-6 lg:row-start-3 lg:row-end-5'>
			<News />
		</section>
	)
}

export default NewsContainer
