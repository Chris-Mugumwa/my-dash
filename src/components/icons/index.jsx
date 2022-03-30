import { useState } from 'react'
import { BrokenClouds } from './BrokenClouds'
import { ClearSky } from './ClearSky'
import { FewClouds } from './FewClouds'
import { Mist } from './Mist'
import { Rain } from './Rain'
import { ScatteredClouds } from './ScatteredClouds'
import { ShowerRain } from './ShowerRain'
import { Snow } from './Snow'
import { ThunderStorm } from './ThunderStorm'

const Icon = props => {
	const [description] = useState(props.description)

	switch (description?.toLowerCase()) {
		case 'clear sky':
			return <ClearSky {...props} />
		case 'few clouds':
			return <FewClouds {...props} />
		case 'scattered clouds':
			return <ScatteredClouds {...props} />
		case 'broken clouds':
			return <BrokenClouds {...props} />
		case 'overcast clouds':
			return <BrokenClouds {...props} />
		case 'shower rain':
			return <ShowerRain {...props} />
		case 'light rain':
			return <ShowerRain {...props} />
		case 'rain':
			return <Rain {...props} />
		case 'moderate rain':
			return <ShowerRain {...props} />
		case 'thunderstorm':
			return <ThunderStorm {...props} />
		case 'snow':
			return <Snow {...props} />
		case 'mist':
			return <Mist {...props} />
		default:
			return <ClearSky {...props} />
	}
}

export { Icon }
