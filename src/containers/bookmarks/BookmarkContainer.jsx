function BookmarkContainer() {
	const bookmarks = [
		{
			name: 'Gmail',
			url: 'https://mail.google.com/',
		},
		{
			name: 'Youtube',
			url: 'https://www.youtube.com',
		},

		{
			name: 'Zoom',
			url: 'https://www.zoom.com',
		},
	]
	return (
		<footer className='items-center justify-around hidden row-start-5 lg:flex col-span-full dashboard-card rol-end-6 lg:col-start-4 lg:col-end-6'>
			{bookmarks.map(bookmark => (
				<div className='bookmark-container' key={bookmark.name}>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href={bookmark.url}
						className='bookmark-link'>
						<img
							src={`https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=48`}
							alt='link'
						/>
					</a>
				</div>
			))}
		</footer>
	)
}

export default BookmarkContainer
