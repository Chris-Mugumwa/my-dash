import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getGeolocation = createAsyncThunk(
	'geolocation/getGeolocation',
	async () => {
		const response = await fetch('https://ipapi.co/json/')
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const geolocationSlice = createSlice({
	name: 'geolocation',
	initialState: {
		location: [],
		isLoading: false,
	},
	extraReducers: {
		[getGeolocation.pending]: state => {
			state.isLoading = true
		},
		[getGeolocation.fulfilled]: (state, action) => {
			state.location = action?.payload
		},
	},
})

export default geolocationSlice.reducer
