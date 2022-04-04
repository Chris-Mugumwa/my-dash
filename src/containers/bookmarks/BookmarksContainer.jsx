import Bookmarks from '../../components/bookmarks/Bookmarks'
import BookmarksTwo from '../../components/bookmarks/BookmarksTwo'
import BookmarksThree from '../../components/bookmarks/BookmarksThree'
import BookmarksFour from '../../components/bookmarks/BookmarksFour'

function BookmarksContainer() {
	return (
		<footer className='flex items-center justify-around row-start-5 col-span-full dashboard-card rol-end-6 lg:col-start-1 lg:col-end-4'>
			<Bookmarks />
			<BookmarksTwo />
			<BookmarksThree />
			<BookmarksFour />
		</footer>
	)
}

export default BookmarksContainer
