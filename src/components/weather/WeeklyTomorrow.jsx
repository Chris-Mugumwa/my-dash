import {
	IoMoonOutline,
	IoSunnyOutline,
	IoTrendingUpOutline,
	IoTrendingDownOutline,
	IoBalloonOutline,
	IoIceCreamOutline,
	IoWaterOutline,
} from 'react-icons/io5'

function WeeklyTomorrow({ daily }) {
	return (
		<section className='flex flex-col items-center row-start-3 row-end-4 gap-4 py-4 overflow-y-scroll dashboard-card lg:row-start-2 lg:row-end-4 col-span-full lg:col-start-1 lg:col-end-6 scrollbar scroll-thumb-yellow-dark scrollbar-track-transparent scroll-thumb-rounded-full'>
			<div className='flex justify-around w-full lg:w-[80%] flex-wrap'>
				<div className='flex flex-col items-center'>
					<h2 className='relative flex justify-center pb-1 text-xl text-center text-white uppercase border-b-2 md:text-3xl xl:text-4xl border-b-yellow-dark'>
						Tomorrow
					</h2>
					<div className='flex items-center gap-1'>
						<img
							src={`http://openweathermap.org/img/w/${daily?.[1]?.weather?.[0].icon}.png`}
							alt='cloud'
							className='w-20 h-20 lg:w-32 lg:h-32'
						/>
						<div className='flex flex-col items-center justify-center text-center'>
							<h2 className='flex text-xl text-white font-poppins md:text-5xl xl:text-6xl'>
								{daily?.[1]?.temp?.morn}
								<span className='text-sm text-yellow-dark font-ropa-sans'>
									&#8451;
								</span>
							</h2>
							<h4 className='text-base text-center md:text-lg xl:text-2xl text-yellow-dark font-poppins'>
								{daily?.[1]?.weather?.[0]?.description}
							</h4>
						</div>
					</div>
				</div>
				<div className='flex justify-around gap-2 lg:flex-col lg:justify-center lg:items-between w-[50%]'>
					<div className='relative z-50 flex flex-col gap-1 lg:gap-0 lg:w-full lg:flex-row lg:justify-around'>
						<div className=''>
							<label className='flex justify-center weather-label '>
								Min
							</label>
							<h5 className='justify-center weather-heading'>
								<IoTrendingDownOutline className='weather-icon' />
								<span className='weather-subheading'>
									{daily?.[1]?.temp?.min}
								</span>
								<span className='text-sm text-yellow-dark font-ropa-sans'>
									&#8451;
								</span>
							</h5>
						</div>
						<div>
							<label className='flex justify-center weather-label'>
								Max
							</label>
							<h5 className='justify-center weather-heading'>
								<IoTrendingUpOutline className='weather-icon' />
								<span className='weather-subheading'>
									{daily?.[1]?.temp?.max}
								</span>
								<span className='text-sm text-yellow-dark font-ropa-sans'>
									&#8451;
								</span>
							</h5>
						</div>
					</div>
					<div className='relative z-50 flex flex-col gap-1 lg:gap-0 lg:w-full lg:flex-row lg:justify-around'>
						<div>
							<label className='flex justify-center weather-label '>
								Humidity
							</label>
							<h5 className='justify-center weather-heading'>
								<IoWaterOutline className='weather-icon' />
								<span className='weather-subheading'>
									{daily?.[1]?.humidity}
								</span>
								<span className='text-sm text-yellow-dark'>&#37;</span>
							</h5>
						</div>
						<div>
							<label className='flex justify-center weather-label '>
								Pressure
							</label>
							<h5 className='weather-heading'>
								<IoBalloonOutline className='weather-icon' />
								<span className='weather-subheading'>
									{daily?.[1]?.pressure}
								</span>
								<span className='text-sm text-yellow-dark font-ropa-sans'>
									hPa
								</span>
							</h5>
						</div>
					</div>
				</div>
			</div>

			<section className='flex justify-around w-[80%] gap-4 flex-wrap'>
				<div className='p-4 rounded-md bg-blue-dark w-[10rem]'>
					<label className='flex items-center justify-center gap-1 pb-1 border-b-2 lg:pb-3 weather-label border-b-yellow-dark'>
						<IoSunnyOutline className='weather-icon' />
						Morning
					</label>
					<div className='flex flex-col items-center gap-1'>
						<label className='justify-center w-full text-center weather-label text-blue-lighter font-ropa-sans'>
							Temp
						</label>
						<h5 className='weather-heading'>
							<IoIceCreamOutline className='weather-icon' />
							<span className='weather-subheading'>
								{daily?.[1].temp?.morn}
							</span>
							<span className='text-sm text-yellow-dark'>&#8451;</span>
						</h5>
						<label className='justify-center w-full text-center weather-label text-blue-lighter font-ropa-sans'>
							Feels Like
						</label>
						<h5 className='weather-heading'>
							<IoIceCreamOutline className='weather-icon' />
							<span className='weather-subheading'>
								{daily?.[1].feels_like?.morn}
							</span>
							<span className='text-sm text-yellow-dark'>&#8451;</span>
						</h5>
					</div>
				</div>

				<div className='p-4 rounded-md bg-blue-dark w-[10rem]'>
					<label className='flex items-center justify-center gap-1 pb-1 border-b-2 lg:pb-3 weather-label border-b-yellow-dark'>
						<IoSunnyOutline className='weather-icon' />
						Day
					</label>
					<div className='flex flex-col items-center gap-1'>
						<label className='justify-center w-full text-center weather-label text-blue-lighter font-ropa-sans'>
							Temp
						</label>
						<h5 className='weather-heading'>
							<IoIceCreamOutline className='weather-icon' />
							<span className='weather-subheading'>
								{daily?.[1].temp?.day}
							</span>
							<span className='text-sm text-yellow-dark'>&#8451;</span>
						</h5>
						<label className='justify-center w-full text-center weather-label text-blue-lighter font-ropa-sans'>
							Feels Like
						</label>
						<h5 className='weather-heading'>
							<IoIceCreamOutline className='weather-icon' />
							<span className='weather-subheading'>
								{daily?.[1].feels_like?.day}
							</span>
							<span className='text-sm text-yellow-dark'>&#8451;</span>
						</h5>
					</div>
				</div>

				<div className='p-4 rounded-md bg-blue-dark w-[10rem]'>
					<label className='flex items-center justify-center gap-1 pb-1 border-b-2 lg:pb-3 weather-label border-b-yellow-dark'>
						<IoMoonOutline className='weather-icon' />
						Evening
					</label>
					<div className='flex flex-col items-center gap-1'>
						<label className='justify-center w-full text-center weather-label text-blue-lighter font-ropa-sans'>
							Temp
						</label>
						<h5 className='weather-heading'>
							<IoIceCreamOutline className='weather-icon' />
							<span className='weather-subheading'>
								{daily?.[1].temp?.eve}
							</span>
							<span className='text-sm text-yellow-dark'>&#8451;</span>
						</h5>
						<label className='justify-center w-full text-center weather-label text-blue-lighter font-ropa-sans'>
							Feels Like
						</label>
						<h5 className='weather-heading'>
							<IoIceCreamOutline className='weather-icon' />
							<span className='weather-subheading'>
								{daily?.[1].feels_like?.eve}
							</span>
							<span className='text-sm text-yellow-dark'>&#8451;</span>
						</h5>
					</div>
				</div>

				<div className='p-4 rounded-md bg-blue-dark w-[10rem]'>
					<label className='flex items-center justify-center gap-1 pb-1 border-b-2 lg:pb-3 weather-label border-b-yellow-dark'>
						<IoMoonOutline className='weather-icon' />
						Night
					</label>
					<div className='flex flex-col items-center gap-1'>
						<label className='justify-center w-full text-center weather-label text-blue-lighter font-ropa-sans'>
							Temp
						</label>
						<h5 className='weather-heading'>
							<IoIceCreamOutline className='weather-icon' />
							<span className='weather-subheading'>
								{daily?.[1].temp?.night}
							</span>
							<span className='text-sm text-yellow-dark'>&#8451;</span>
						</h5>
						<label className='justify-center w-full text-center weather-label text-blue-lighter font-ropa-sans'>
							Feels Like
						</label>
						<h5 className='weather-heading'>
							<IoIceCreamOutline className='weather-icon' />
							<span className='weather-subheading'>
								{daily?.[1].feels_like?.night}
							</span>
							<span className='text-sm text-yellow-dark'>&#8451;</span>
						</h5>
					</div>
				</div>
			</section>
		</section>
	)
}

export default WeeklyTomorrow
