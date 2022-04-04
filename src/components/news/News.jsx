import { useState, useEffect } from 'react'
import { useCurrentNews } from '../../hooks/useCurrentNews'
import { useModal } from '../../hooks/useModal'
import NewsModal from './NewsModal'
import ClipLoader from 'react-spinners/ClipLoader'

function News() {
	const [article, setArticle] = useState('')
	const [publishTime, setPublishTime] = useState('')
	const { loading, error, news, articles } = useCurrentNews()
	const { isOpen, toggle } = useModal()

	console.log(news)

	const readArticle = async (news, time) => {
		await setArticle(news)
		await setPublishTime(time)
		toggle()
	}

	return (
		<>
			{loading ||
				(news === undefined && (
					<div className='relative z-50 flex items-center justify-center w-full h-full bg-blue-dark'>
						<ClipLoader color={'#e6bf17'} size={35} />
					</div>
				))}
			{error && news === undefined && (
				<p className='text-base text-center md:text-lg xl:text-2xl text-yellow-dark font-poppins'>
					Something went wrong
				</p>
			)}
			{news !== undefined &&
				news?.map(articles => (
					<div
						className='flex items-center justify-between col-span-1 row-span-2 p-1 cursor-pointer lg:row-span-1 flip-card bg-blue-light'
						key={articles?.publishedAt}
						onClick={() =>
							readArticle(articles?.title, articles?.publishedAt)
						}>
						<span className='block content-["*"] h-full w-[5px] rounded-full bg-yellow-dark'></span>
						<div className='w-[98%]'>
							<p className='p-1 text-xs text-center text-white md:text-sm font-poppins'>
								{articles?.title}
							</p>
						</div>
					</div>
				))}
			{articles !== undefined &&
				articles?.map(article => (
					<div
						className='items-center justify-between hidden col-span-1 row-span-1 p-1 cursor-pointer lg:flex flip-card bg-blue-light'
						key={article?.publishedAt}
						onClick={() =>
							readArticle(articles?.title, articles?.publishedAt)
						}>
						<span className='block content-["*"] h-full w-[5px] rounded-full bg-yellow-dark'></span>
						<div className='w-[98%]'>
							<p className='p-1 text-xs text-center text-white md:text-sm font-poppins'>
								{article?.title}
							</p>
						</div>
					</div>
				))}
			{isOpen && (
				<NewsModal
					article={article}
					setArticle={setArticle}
					publishTime={publishTime}
					isOpen={isOpen}
					toggle={toggle}
				/>
			)}
		</>
	)
}

export default News
