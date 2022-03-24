import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTopHeadlines = createAsyncThunk(
	'topHeadlines/getTopHeadlines',
	async country => {
		const response = await axios.get(
			`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
		)
		const formatResponse = await response.json()
		console.log(formatResponse)
		return formatResponse
	},
)

export const getSearchedNews = createAsyncThunk(
	'searchedNews/getSearchedNews',
	async (query, date) => {
		const response = await axios.get(
			`https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
		)
		const formatResponse = await response.json()
		console.log(formatResponse)
		return formatResponse
	},
)

export const newsSlice = createSlice({
	name: 'news',
	initialState: {
		topHeadlines: [],
		searchedNews: [],
	},
	extraReducers: {
		[getTopHeadlines.fulfilled]: (state, action) => {
			state.topHeadlines = action.payload
		},
		[getSearchedNews.fulfilled]: (state, action) => {
			state.searchedNews = action.payload
		},
	},
})

export default newsSlice.reducer
