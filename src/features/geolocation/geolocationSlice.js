import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getGeolocation = createAsyncThunk(
	'geolocation/getGeolocation',
	async () => {
		const response = await axios.get('https://ipapi.co/json/')
		const formatResponse = await response.json()
		console.log(formatResponse)
		return formatResponse
	},
)

export const geolocationSlice = createSlice({
	name: 'geolocation',
	initialState: {
		location: [],
	},
	extraReducers: {
		[getGeolocation.fulfilled]: (state, action) => {
			state.location = action.payload
		},
	},
})

export default geolocationSlice.reducer
