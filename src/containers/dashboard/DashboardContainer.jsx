import React, { Suspense } from 'react'
import Loading from '../../components/loading/Loading'
import { motion } from 'framer-motion'

const SearchAndUserContainer = React.lazy(() =>
	import('../Search&User/SearchAndUserContainer'),
)
const DateTimeContainer = React.lazy(() => import('../time/DateTimeContainer'))
const QuotesContainer = React.lazy(() => import('../quotes/QuotesContainer'))
const WeatherContainer = React.lazy(() => import('../weather/WeatherContainer'))
const NotesNewsContainer = React.lazy(() =>
	import('../notes-and-news/NotesNewsContainer'),
)
const BookmarksContainer = React.lazy(() =>
	import('../bookmarks/BookmarksContainer'),
)
const BookmarkContainer = React.lazy(() =>
	import('../bookmarks/BookmarkContainer'),
)

function DashboardContainer() {
	return (
		<Suspense fallback={<Loading />}>
			<motion.main
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='relative grid col-span-full row-start-2 row-end-[8] grid-cols-7 md:grid-rows-[3rem_repeat(3,_1fr)_5rem] grid-rows-[3rem_repeat(3,minmax(fit-content,_1fr))_minmax(fit-content,_2fr)_5rem] gap-1 scrollbar scroll-thumb-yellow-dark scrollbar-track-transparent scroll-thumb-rounded-full'>
				<SearchAndUserContainer />
				<DateTimeContainer />
				<QuotesContainer />
				<WeatherContainer />
				<NotesNewsContainer />
				<BookmarksContainer />
				<BookmarkContainer />
			</motion.main>
		</Suspense>
	)
}

export default DashboardContainer
