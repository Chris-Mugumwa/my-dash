import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getQuotes } from '../../features/quotes/quotesSlice'

function Quotes() {
	const dispatch = useDispatch()
	const dailyQuote = useSelector(state => state.quotes.dailyQuotes)
	console.log(dailyQuote)

	useEffect(() => {
		dispatch(getQuotes())
	}, [dispatch])

	return (
		<div>
			<h1>{dailyQuote.q}</h1>
		</div>
	)
}

export default Quotes
