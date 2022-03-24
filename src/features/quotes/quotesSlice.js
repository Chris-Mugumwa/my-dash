import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getQuotes = createAsyncThunk('quotes/getQuotes', async () => {
	const response = await axios.get(`https://zenquotes.io/api/today`)
	const formatResponse = await response.json()
	console.log(formatResponse)
	return formatResponse
})

export const quotesSlice = createSlice({
	name: 'quotes',
	initialState: {
		quotes: [],
	},
	extraReducers: {
		[getQuotes.fulfilled]: (state, action) => {
			state.quotes = action.payload
		},
	},
})

export default quotesSlice.reducer
