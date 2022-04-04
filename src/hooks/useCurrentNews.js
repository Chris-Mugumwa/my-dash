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
		getCurrentNews(location)
	}, [location, setLoading, setError, setNews])

	useEffect(() => {
		getCurrentArticles(location)
	}, [location, setLoading, setError, setArticles])

	const getCurrentNews = async location => {
		setLoading(true)
		await axios
			.get(
				`https://newsapi.org/v2/top-headlines?country=${
					location?.country_code
				}&page=1&pageSize=3&apiKey=${
					import.meta.env.VITE_REACT_APP_NEWS_API_KEY
				}`,
			)
			.then(response => {
				setLoading(false)
				setNews(response?.data?.articles)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}

	const getCurrentArticles = async location => {
		setLoading(true)
		await axios
			.get(
				`https://newsapi.org/v2/top-headlines?country=${
					location?.country_code
				}&page=2&pageSize=3&apiKey=${
					import.meta.env.VITE_REACT_APP_NEWS_API_KEY
				}`,
			)
			.then(response => {
				setLoading(false)
				setArticles(response?.data?.articles)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}

	return { loading, error, location, news, articles }
}
