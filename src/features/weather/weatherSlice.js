import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUserWeather = createAsyncThunk(
	'userWeather/getUserWeather',
	async city => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
				import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
			}`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
// 				import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
// 			}
export const getExtendedWeather = createAsyncThunk(
	'extendedWeather/getExtendedWeather',
	async (latitude, longitude) => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${
				import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
			}&units=metric`,
		)
		const formatResponse = await response.json()
		console.log(formatResponse)
		return formatResponse
	},
)

export const getSearchedWeather = createAsyncThunk(
	'searchedWeather/getSearchedWeather',
	async location => {
		try {
			const response = await fetch(
				`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${
					import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
				}`,
			)
			const formatResponse = await response.json()
			console.log(formatResponse)
			return formatResponse
		} catch (error) {
			throw new error()
		}
	},
)

export const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		userWeather: [],
		extendedWeather: [],
		searchedWeather: [],
		isLoading: false,
	},
	extraReducers: {
		[getUserWeather.pending]: state => {
			state.isLoading = true
		},
		[getUserWeather.fulfilled]: (state, action) => {
			state.userWeather = action?.payload
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
