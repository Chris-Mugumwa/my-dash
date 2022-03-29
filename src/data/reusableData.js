// import BrokenClouds from '../assets/broken-clouds.svg?component'
// import ClearClouds from '../assets/clear-clouds.svg?component'
// import FewClouds from '../assets/few-clouds.svg?component'
// import Mist from '../assets/mist.svg?component'
// import Rain from '../assets/rain.svg?component'
// import ScatteredClouds from '../assets/scattered-clouds.svg?component'
// import ShowerRain from '../assets/shower-rain.svg?component'
// import ThunderStorm from '../assets/thunderstorm.svg?component'
// import Snow from '../assets/snow.svg?component'

export const checkFormat = index => {
	if (index < 10) {
		index = index.toString().padStart(2, '0')
	}
	return index
}
