import { useState, useEffect, useRef } from 'react'
import { useWeeklyWeather } from '../../hooks/useWeeklyWeather'
import ClipLoader from 'react-spinners/ClipLoader'
import WeeklyCurrent from './WeeklyCurrent'
import WeeklyTomorrow from './WeeklyTomorrow'
import { motion } from 'framer-motion'
import {
	IoIceCreamOutline,
	IoMoonOutline,
	IoSunnyOutline,
} from 'react-icons/io5'

function WeeklyWeather({ place }) {
	const { loading, location, weeklyData } = useWeeklyWeather(place)
	const [current, setCurrent] = useState(undefined)
	const [daily, setDaily] = useState(undefined)
	const [width, setWidth] = useState(0)
	const carousel = useRef()

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
	}, [])

	useEffect(() => {
		setCurrent(weeklyData?.current)
		setDaily(weeklyData?.daily)
	}, [setCurrent, setDaily, weeklyData])

	const localTime = timeStamp => {
		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		]

		const dayNum = new Date(timeStamp * 1e3).getDay()
		const localized = days[dayNum]
		return localized
	}

	return (
		<>
			{loading && (
				<div className='absolute z-50 flex items-center justify-center h-[80%] w-[90%]'>
					<ClipLoader color={'#e6bf17'} size={35} />
				</div>
			)}

			<>
				<WeeklyCurrent
					current={current}
					location={location}
					daily={daily}
					place={place}
				/>

				<WeeklyTomorrow daily={daily} />

				<motion.div
					ref={carousel}
					className='row-start-4 row-end-6 overflow-x-hidden lg:row-start-4 lg:row-end-5 dashboard-card col-span-full cursor-grab '
					whileTap={{ cursor: 'grabbing' }}>
					<motion.div
						drag='x'
						dragConstraints={{ right: 0, left: -width }}
						whileTap={{ cursor: 'grabbing' }}
						className='flex flex-col gap-2 lg:flex-row cursor-grab'>
						{daily?.map(day => (
							<motion.section
								whileTap={{ cursor: 'grabbing' }}
								className='flex flex-col gap-2 p-2 rounded-md cursor-grab bg-blue-dark'
								key={day?.dt}>
								<h2 className='pb-1 text-white border-b-2 border-b-yellow-dark font-ropa-sans w-[10%]'>
									{localTime(day?.dt)}
								</h2>
								<div className='flex justify-around lg:w-[25rem]'>
									<div>
										<label className='weekly-label'>
											<IoMoonOutline className='weather-icon' />
											Morning
										</label>
										<div className='flex flex-col items-center gap-1'>
											<label className='weekly-sublabel'>Temp</label>
											<h5 className='weather-heading'>
												<IoIceCreamOutline className='weather-icon' />
												<span className='weather-subheading'>
													{day?.temp?.morn}
												</span>
												<span className='text-sm text-yellow-dark'>
													&#8451;
												</span>
											</h5>
											<label className='weekly-sublabel'>
												Feels Like
											</label>
											<h5 className='weather-heading'>
												<IoIceCreamOutline className='weather-icon' />
												<span className='weather-subheading'>
													{day?.feels_like?.morn}
												</span>
												<span className='text-sm text-yellow-dark'>
													&#8451;
												</span>
											</h5>
										</div>
									</div>

									<div>
										<label className='weekly-label'>
											<IoMoonOutline className='weather-icon' />
											Day
										</label>
										<div className='flex flex-col items-center gap-1'>
											<label className='weekly-sublabel'>Temp</label>
											<h5 className='weather-heading'>
												<IoIceCreamOutline className='weather-icon' />
												<span className='weather-subheading'>
													{day?.temp?.day}
												</span>
												<span className='text-sm text-yellow-dark'>
													&#8451;
												</span>
											</h5>
											<label className='weekly-sublabel'>
												Feels Like
											</label>
											<h5 className='weather-heading'>
												<IoIceCreamOutline className='weather-icon' />
												<span className='weather-subheading'>
													{day?.feels_like?.day}
												</span>
												<span className='text-sm text-yellow-dark'>
													&#8451;
												</span>
											</h5>
										</div>
									</div>
									<div>
										<label className='weekly-label'>
											<IoSunnyOutline className='weather-icon' />
											Night
										</label>
										<div className='flex flex-col items-center gap-1'>
											<label className='weekly-sublabel'>Temp</label>
											<h5 className='weather-heading'>
												<IoIceCreamOutline className='weather-icon' />
												<span className='weather-subheading'>
													{day?.temp?.night}
												</span>
												<span className='text-sm text-yellow-dark'>
													&#8451;
												</span>
											</h5>
											<label className='weekly-sublabel'>
												Feels Like
											</label>
											<h5 className='weather-heading'>
												<IoIceCreamOutline className='weather-icon' />
												<span className='weather-subheading'>
													{day?.feels_like?.night}
												</span>
												<span className='text-sm text-yellow-dark'>
													&#8451;
												</span>
											</h5>
										</div>
									</div>
								</div>
							</motion.section>
						))}
					</motion.div>
				</motion.div>
			</>
		</>
	)
}

export default WeeklyWeather
