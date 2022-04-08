import { useCurrentNews } from '../../hooks/useCurrentNews'
import ClipLoader from 'react-spinners/ClipLoader'

function News() {
	const { loading, news, articles } = useCurrentNews()

	return (
		<>
			{loading ||
				(news === undefined && (
					<div className='absolute z-50 flex items-center justify-center w-full h-full bg-blue-dark'>
						<ClipLoader color={'#e6bf17'} size={35} />
					</div>
				))}
			{!loading &&
				news?.map(articles => (
					<a
						href={articles?.webUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center justify-between col-span-1 row-span-2 p-1 transition duration-300 cursor-pointer lg:row-span-1 flip-card bg-blue-light'
						key={articles?.id}>
						<span className='block content-["*"] h-full w-[5px] rounded-full bg-yellow-dark'></span>
						<div className='w-[98%] flex flex-col'>
							<p className='p-1 text-xs text-center text-white md:text-sm font-poppins'>
								{articles?.webTitle}
							</p>
							<h4 className='self-end text-yellow-dark font-ropa-sans'>
								{articles?.sectionName}
							</h4>
						</div>
					</a>
				))}
			{articles !== undefined &&
				articles?.map(article => (
					<a
						href={articles?.webUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='items-center justify-between hidden col-span-1 row-span-1 p-1 transition duration-300 cursor-pointer lg:flex flip-card bg-blue-light'
						key={article?.id}>
						<span className='block content-["*"] h-full w-[5px] rounded-full bg-yellow-dark'></span>
						<div className='w-[98%] flex flex-col'>
							<p className='p-1 text-xs text-center text-white md:text-sm font-poppins'>
								{article?.webTitle}
							</p>
							<h4 className='self-end text-yellow-dark font-ropa-sans'>
								{article?.sectionName}
							</h4>
						</div>
					</a>
				))}
		</>
	)
}

export default News
