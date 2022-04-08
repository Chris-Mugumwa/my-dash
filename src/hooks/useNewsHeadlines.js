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
				`https://newsapi.org/v2/top-headlines?country=${
					location?.country_code
				}&apiKey=${import.meta.env.VITE_REACT_APP_NEWS_API_KEY}`,
			)
			.then(response => {
				setLoading(false)
				setError(false)
				setArticles(response?.data?.articles)
			})
			.catch(() => {
				setError(true)
				setLoading(false)
			})
	}
	return { articles, error, loading }
}
