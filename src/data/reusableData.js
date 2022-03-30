// import BrokenClouds from '../../assets/weather/broken-clouds.svg?component'
// import ClearSky from '../../assets/weather/clear-sky.svg?component'
// import FewClouds from '../../assets/weather/few-clouds.svg?component'
// import Mist from '../../assets/weather/mist.svg?component'
// import Rain from '../../assets/weather/rain.svg?component'
// import ScatteredClouds from '../../assets/weather/scattered-clouds.svg?component'
// import ShowerRain from '../../assets/weather/shower-rain.svg?component'
// import ThunderStorm from '../../assets/weather/thunderstorm.svg?component'
// import Snow from '../../assets/weather/snow.svg?component'

//	useEffect(() => {
// weatherIcon.map(() => {
//    if (description === 'clear sky') {
//       setSvg(<ClearSky className='w-20 md:w-32 xl:w-36 ' />)
//    } else if (description === 'few clouds') {
//       setSvg(<FewClouds className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    } else if (description === 'scattered clouds') {
//       setSvg(<ScatteredClouds className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    } else if (description === 'broken clouds') {
//       setSvg(<BrokenClouds className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    } else if (description === 'overcast clouds') {
//       setSvg(<BrokenClouds className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    } else if (description === 'shower rain') {
//       setSvg(<ShowerRain className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    } else if (description === 'light rain') {
//       setSvg(<ShowerRain className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    } else if (description === 'rain') {
//       setSvg(<Rain className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    } else if (description === 'moderate rain') {
//       setSvg(<ShowerRain className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    } else if (description === 'thunderstorm') {
//       setSvg(<ThunderStorm className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    } else if (description === 'snow') {
//       setSvg(<Snow className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    } else if (description === 'mist') {
//       setSvg(<Mist className='w-20 h-18 md:w-32 xl:w-36 ' />)
//    }
// })
// }, [])

// const weatherIcons = [
// 	{
// 		name: 'clear sky',
// 		icon: <ClearSky />,
// 	},
// 	{
// 		name: 'few clouds',
// 		icon: <FewClouds />,
// 	},
// 	{
// 		name: 'scattered clouds',
// 		icon: <ScatteredClouds />,
// 	},
// 	{
// 		name: 'broken clouds',
// 		icon: <BrokenClouds />,
// 	},
// 	{
// 		name: 'shower rain',
// 		icon: <ShowerRain />,
// 	},
// 	{
// 		name: 'rain',
// 		icon: <Rain />,
// 	},
// 	{
// 		name: 'thunder storm',
// 		icon: <ThunderStorm />,
// 	},
// 	{
// 		name: 'snow',
// 		icon: <Snow />,
// 	},
// 	{
// 		name: 'mist',
// 		icon: <Mist />,
// 	},
// ]

export const checkFormat = index => {
	if (index < 10) {
		index = index.toString().padStart(2, '0')
	}
	return index
}
