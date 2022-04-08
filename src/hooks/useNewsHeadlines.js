import { useState, useEffect } from 'react'
import axios from 'axios'
import { useCurrentLocation } from './useCurrentLocation'

export const useNewsHeadlines = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [articles, setArticles] = useState(undefined)
	const { location } = useCurrentLocation()

	useEffect(() => {
		getNews()
	}, [setLoading, setError, setArticles, location])

	const getNews = async () => {
		setLoading(true)
		await axios
			.get(
				`https://content.guardianapis.com/search?page=1&page-size=20&q=the&api-key=${
					import.meta.env.VITE_REACT_APP_NEWS_API_KEY
				}`,
			)
			.then(response => {
				setLoading(false)
				setError(false)
				setArticles(response?.data?.response?.results)
			})
			.catch(() => {
				setError(true)
				setLoading(false)
			})
	}
	return { articles, error, loading }
}
