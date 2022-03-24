import { configureStore } from '@reduxjs/toolkit'
import geolocationReducer from '../features/geolocation/geolocationSlice'
import weatherReducer from '../features/weather/weatherSlice'
import newsReducer from '../features/news/newsSlice'
import quotesReducer from '../features/quotes/quotesSlice'

export const store = configureStore({
	reducer: {
		geolocation: geolocationReducer,
		weather: weatherReducer,
		news: newsReducer,
		quotes: quotesReducer,
	},
})
