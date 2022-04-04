import { useState, useEffect } from 'react'
import axios from 'axios'
import { createPortal } from 'react-dom'
import { IoCloseOutline } from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'
import ClipLoader from 'react-spinners/ClipLoader'

function NewsModal({ article, isOpen, toggle, publishTime, setArticle }) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [news, setNews] = useState(article)
	const [time, setTime] = useState(publishTime)
	const [articleData, setArticleData] = useState(undefined)

	useEffect(() => {
		articleClicked()
	}, [article, setArticleData, setLoading, setError])

	const articleClicked = async () => {
		setLoading(true)
		await axios
			.get(
				`https://newsapi.org/v2/everything?q="${news}"&from=${time}&sortBy=popularity&apiKey=${
					import.meta.env.VITE_REACT_APP_NEWS_API_KEY
				}`,
			)
			.then(response => {
				setLoading(false)
				setArticleData(response?.data?.articles?.[0])
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}

	const closeModal = () => {
		setArticle('')
		setArticleData(undefined)
		toggle()
	}

	return createPortal(
		<AnimatePresence exitBeforeEnter>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-screen h-screen bg-black-faded'>
				<div className='bg-blue-dark p-4 h-[80%] w-[90%] md:w-[60%] md:h-[60%] rounded-md overflow-y-scroll flex flex-col scrollbar scroll-thumb-blue-dark scrollbar-track-transparent scroll-thumb-rounded-full gap-2'>
					{loading && <ClipLoader color={'#e6bf17'} size={35} />}

					<IoCloseOutline
						className='self-end menu-icon'
						onClick={closeModal}
					/>
					<div className='flex flex-wrap gap-2'>
						<img
							src={articleData?.urlToImage}
							alt='article'
							className='w-full overflow-hidden rounded-md md:w-[40%]'
						/>
						<div className='flex flex-col'>
							<p className='font-semibold text-white font-poppins'>
								{articleData?.title}
							</p>
							<label className='text-yellow-dark font-ropa-sans'>
								Author: {articleData?.author}
							</label>
							<p
								className='text-white font-poppins'
								dangerouslySetInnerHTML={{
									__html: articleData?.description,
								}}
							/>
						</div>
					</div>

					<div className='flex items-center self-end gap-2'>
						<button className='modal-done'>
							<a
								href={articleData?.url}
								target='_blank'
								rel='noopener noreferrer'>
								Full Story
							</a>
						</button>
						<button
							className='px-4 py-1 text-white transition duration-300 rounded-md bg-blue-light font-ropa-sans hover:bg-blue-lighter'
							onClick={closeModal}>
							close
						</button>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>,
		document.getElementById('news'),
	)
}

export default NewsModal
