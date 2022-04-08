import NewsHeadline from '../../components/news/NewsHeadline'

function NewsHeadlineContainer() {
	return (
		<div className='grid grid-cols-2 lg:grid-cols-[repeat(4,minmax(18rem,_1fr))]  grid-rows-[3rem_repeat(4,1fr)] row-start-2 row-end-3 col-span-full grid-flow-row gap-1'>
			<NewsHeadline />
		</div>
	)
}

export default NewsHeadlineContainer
