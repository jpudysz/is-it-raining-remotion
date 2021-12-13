import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'
import { WeatherState } from '../common'

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
                <Umbrella src={Images.Umbrella} />
            )
        case WeatherState.Snowing:
            return (
                <ChristmasTree src={Images.ChristmasTree} />
            )
        case WeatherState.Cloudy:
        case WeatherState.Sunny:
            return (
                <Sunbeds src={Images.Sunbeds} />
            )
        default:
            return null
    }
}

const Umbrella = styled(Img)`
    width: 656px;
    height: 496px;
`
const ChristmasTree = styled(Img)`
    width: 409px;
    height: 627px;
`

const Sunbeds = styled(Img)`
    width: 814px;
    height: 465px;
`
