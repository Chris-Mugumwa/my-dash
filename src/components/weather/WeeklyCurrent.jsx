import {
	IoIceCreamOutline,
	IoWaterOutline,
	IoTrendingUpOutline,
	IoTrendingDownOutline,
} from 'react-icons/io5'

function WeeklyCurrent({ current, location, daily, place }) {
	return (
		<div className='relative z-40 overflow-hidden p-2 flex justify-around items-center lg:flex-col row-start-2 row-end-3 lg:row-end-4 dashboard-card col-span-full lg:col-start-6 lg:col-end-[8] lg:justify-start lg:gap-4'>
			<span className='absolute left-1 top-0 block content-["*"] h-full w-1 rounded-full bg-yellow-dark lg:hidden'></span>
			<div className='flex flex-col items-center gap-1'>
				<h2 className='relative flex justify-center pb-1 text-xl text-center text-white uppercase border-b-2 md:text-3xl xl:text-4xl border-b-yellow-dark'>
					Today
				</h2>
				<div className='flex items-center justify-center'>
					<img
						src={`http://openweathermap.org/img/w/${current?.weather?.[0].icon}.png`}
						alt='weather'
						className='w-20 h-20 lg:w-28 lg:h-28'
					/>
					<div className='flex flex-col items-center justify-center text-center'>
						<h2 className='flex text-xl text-white font-poppins md:text-5xl xl:text-6xl'>
							{current?.temp}
							<span className='text-sm text-yellow-dark font-ropa-sans'>
								&#8451;
							</span>
						</h2>
						<h4 className='text-base text-center md:text-lg xl:text-2xl text-yellow-dark font-poppins lg:hidden'>
							{current?.weather?.[0].description}
						</h4>
					</div>
				</div>
				<h4 className='hidden text-base text-center md:text-lg xl:text-2xl text-yellow-dark font-poppins lg:flex'>
					{current?.weather?.[0].description}
				</h4>
				<h2 className='relative flex justify-center text-xl text-center text-white uppercase md:text-3xl xl:text-4xl'>
					{place?.length > 0 ? place : location?.city}
				</h2>
			</div>
			<div className='relative z-50 flex flex-col gap-1 lg:gap-0 lg:w-full lg:flex-row lg:justify-around'>
				<div>
					<label className='weather-label'>Minimum</label>
					<h5 className='weather-heading'>
						<IoTrendingDownOutline className='weather-icon' />
						<span className='weather-subheading'>
							{daily?.[0].temp?.min}
						</span>
						<span className='text-sm text-yellow-dark font-ropa-sans'>
							&#8451;
						</span>
					</h5>
				</div>
				<div>
					<label className='weather-label'>Maximum</label>
					<h5 className='weather-heading'>
						<IoTrendingUpOutline className='weather-icon' />
						<span className='weather-subheading'>
							{daily?.[0].temp?.max}
						</span>
						<span className='text-sm text-yellow-dark'>&#37;</span>
					</h5>
				</div>
			</div>
			<div className='relative z-50 flex flex-col gap-1 lg:gap-0 lg:w-full lg:flex-row lg:justify-around'>
				<div>
					<label className='weather-label'>Feels Like</label>
					<h5 className='weather-heading'>
						<IoIceCreamOutline className='weather-icon' />
						<span className='weather-subheading'>
							{current?.feels_like}
						</span>
						<span className='text-sm text-yellow-dark font-ropa-sans'>
							&#8451;
						</span>
					</h5>
				</div>
				<div>
					<label className='weather-label'>Humidity</label>
					<h5 className='weather-heading'>
						<IoWaterOutline className='weather-icon' />
						<span className='weather-subheading'>
							{current?.humidity}
						</span>
						<span className='text-sm text-yellow-dark'>&#37;</span>
					</h5>
				</div>
			</div>
		</div>
	)
}

export default WeeklyCurrent
