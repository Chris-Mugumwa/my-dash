import { useNewsHeadlines } from '../../hooks/useNewsHeadlines'
import ClipLoader from 'react-spinners/ClipLoader'

function NewsHeadline({ article }) {
	const { loading, articles } = useNewsHeadlines(article)

	console.log(articles)
	return (
		<div className='flex flex-wrap justify-center row-start-2 row-end-6 gap-2 col-span-full'>
			{loading && (
				<div className='relative z-50 flex items-center justify-center w-[80%] h-[80%] bg-blue-dark'>
					<ClipLoader color={'#e6bf17'} size={35} />
				</div>
			)}
			{articles?.map(article => (
				<div
					className='flex items-center justify-between w-48 h-48 row-span-2 p-1 transition duration-300 cursor-pointer max-w-1/4 lg:w-60 lg:h-60 c-span-1 lg:row-span-1 flip-card bg-blue-light'
					key={article?.publishedAt}
					onClick={() => window.open(`${articles?.url}`, '_blank')}>
					<span className='block content-["*"] h-full w-[5px] rounded-full bg-yellow-dark'></span>
					<div className='w-[98%]'>
						<p className='p-1 text-xs text-center text-white md:text-sm font-poppins'>
							{article?.title}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default NewsHeadline
