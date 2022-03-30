import SearchEngine from '../../components/search/SearchEngine'
import User from '../../components/user/User'

function SearchAndUserContainer() {
	return (
		<section className='flex items-center justify-between row-start-1 row-end-2 col-span-full'>
			<SearchEngine />
			<User />
		</section>
	)
}

export default SearchAndUserContainer
