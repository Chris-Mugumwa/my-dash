import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUserWeather = createAsyncThunk(
	'userWeather/getUserWeather',
	async (latitude, longitude) => {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
		)
		const formatResponse = await response.json()
		console.log(formatResponse)
		return formatResponse
	},
)

export const getExtendedWeather = createAsyncThunk(
	'extendedWeather/getExtendedWeather',
	async (latitude, longitude) => {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
		)
		const formatResponse = await response.json()
		console.log(formatResponse)
		return formatResponse
	},
)

export const getSearchedWeather = createAsyncThunk(
	'searchedWeather/getSearchedWeather',
	async location => {
		const response = await axios.get(
			`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${proces.env.REACT_APP_WEATHER_API_KEY}`,
		)
		const formatResponse = await response.json()
		console.log(formatResponse)
		return formatResponse
	},
)

export const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		userWeather: [],
		extendedWeather: [],
		searchedWeather: [],
	},
	extraReducers: {
		[getUserWeather.fulfilled]: (state, action) => {
			state.userWeather = action.payload
		},
		[getExtendedWeather.fulfilled]: (state, action) => {
			state.extendedWeather = action.payload
		},
		[getSearchedWeather.fulfilled]: (state, action) => {
			state.searchedWeather = action.payload
		},
	},
})

export default weatherSlice.reducer
