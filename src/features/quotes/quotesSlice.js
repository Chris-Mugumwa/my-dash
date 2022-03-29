import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getQuotes = createAsyncThunk('dailyQuotes/getQuotes', async () => {
	const response = await fetch(
		`https://quote-garden.herokuapp.com/api/v3/quotes`,
	)
	const formatResponse = await response.json()
	console.log(formatResponse)
	return formatResponse
})

export const quotesSlice = createSlice({
	name: 'quotes',
	initialState: {
		dailyQuotes: [],
	},
	extraReducers: {
		[getQuotes.fulfilled]: (state, action) => {
			state.dailyQuotes = action.payload
		},
	},
})

export default quotesSlice.reducer
