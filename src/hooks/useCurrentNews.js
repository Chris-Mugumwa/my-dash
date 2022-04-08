import { useState, useEffect } from 'react'
import { useCurrentLocation } from './useCurrentLocation'
import axios from 'axios'

export const useCurrentNews = () => {
	const { location } = useCurrentLocation()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [news, setNews] = useState(undefined)
	const [articles, setArticles] = useState(undefined)

	useEffect(() => {
		getCurrentNews()
	}, [setLoading, setError, setNews])

	useEffect(() => {
		getCurrentArticles()
	}, [setLoading, setError, setArticles])

	const getCurrentNews = async () => {
		setLoading(true)
		await axios
			.get(
				`https://content.guardianapis.com/search?page=1&page-size=3&q=the&api-key=${
					import.meta.env.VITE_REACT_APP_NEWS_API_KEY
				}`,
			)
			.then(response => {
				setLoading(false)
				setNews(response?.data?.response?.results)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}

	const getCurrentArticles = async () => {
		setLoading(true)
		await axios
			.get(
				`https://content.guardianapis.com/search?page=2&page-size=3&q=the&api-key=${
					import.meta.env.VITE_REACT_APP_NEWS_API_KEY
				}`,
			)
			.then(response => {
				setLoading(false)
				setArticles(response?.data?.response?.results)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}

	return { loading, error, location, news, articles }
}
