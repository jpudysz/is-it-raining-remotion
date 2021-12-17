import { WeatherState } from '../common'
import { Umbrella } from './Umbrella'
import { ChristmasTree } from './ChristmasTree'
import { Sunbeds } from './Sunbeds'

type WeatherBaseImageProps = {
    weatherState: WeatherState
}

export const WeatherBaseImage: React.FunctionComponent<WeatherBaseImageProps> = ({
    weatherState
}) => {
    switch (weatherState) {
        case WeatherState.Raining:
        case WeatherState.Thunderstorm:
            return (
                <Umbrella />
            )
        case WeatherState.Snowing:
            return (
                <ChristmasTree />
            )
        case WeatherState.Cloudy:
        case WeatherState.Sunny:
            return (
                <Sunbeds />
            )
        default:
            return null
    }
}

