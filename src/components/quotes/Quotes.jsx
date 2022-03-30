import { useState, useEffect } from 'react'
import axios from 'axios'

function Quotes() {
	const [result, setResult] = useState(undefined)

	useEffect(() => {
		axios
			.get(
				`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`,
			)
			.then(response => {
				let dataQuotes = response.data.quotes
				let randomIndex = Math.floor(Math.random() * dataQuotes.length)
				let randomQuote = dataQuotes[randomIndex]
				setResult(randomQuote)
			})
	}, [setResult])

	return (
		<section className='relative flex flex-col justify-center w-full overflow-y-scroll transition lg:hover:scrollbar-thumb-transparent scroll scroll-thumb-blue-800 scrollbar-thin scroll-thumb-rounded-md'>
			<p className='text-white font-poppins lg:text-xl'>{result?.quote}</p>
			<h4 className='self-end text-yellow-dark font-ropa-sans'>
				{result?.author}
			</h4>
		</section>
	)
}

export default Quotes
