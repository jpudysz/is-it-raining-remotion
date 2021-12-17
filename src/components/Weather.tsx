import React from 'react'
import { Sun } from './Sun'
import { SunBehindTheCloud } from './SunBehindTheCloud'
import { SnowCloud } from './SnowCloud'
import { RainCloud } from './RainCloud'
import { Cloud } from './Cloud'
import { WeatherState } from '../common'

type WeatherProps = {
    weatherState: WeatherState
}

export const Weather: React.FunctionComponent<WeatherProps> = ({
    weatherState
}) => {
    const cloudPositions = [
        {
            rotate: 15,
            scale: 0.6,
            translateX: 500,
            translateY: -940
        },
        {
            rotate: -15,
            scale: 0.6,
            translateX: -430,
            translateY: -980
        },
        {
            scale: 0.8,
            translateX: -530,
            translateY: -300
        },
        {
            scale: 0.7,
            translateX: -580,
            translateY: 500
        },
        {
            scale: 0.7,
            translateX: 560,
            translateY: 300
        }
    ]

    switch (weatherState) {
        case WeatherState.Raining:
        case WeatherState.Thunderstorm:
            return (
                <React.Fragment>
                    <RainCloud
                        translateX={0}
                        translateY={-600}
                        withThunder={weatherState === WeatherState.Thunderstorm}
                    />
                    {cloudPositions.map((position, index) => (
                        <RainCloud
                            key={index}
                            {...position}
                        />
                    ))}
                </React.Fragment>
            )
        case WeatherState.Snowing:
            return (
                <React.Fragment>
                    <SnowCloud
                        translateX={0}
                        translateY={-600}
                    />
                    {cloudPositions.map((position, index) => (
                        <SnowCloud
                            key={index}
                            {...position}
                        />
                    ))}
                </React.Fragment>
            )
        case WeatherState.Cloudy:
            return (
                <React.Fragment>
                    <SunBehindTheCloud
                        translateX={0}
                        translateY={-600}
                    />
                    {cloudPositions.map((position, index) => (
                        <Cloud
                            key={index}
                            {...position}
                        />
                    ))}
                </React.Fragment>
            )
        case WeatherState.Sunny:
            return (
                <React.Fragment>
                    <Sun
                        translateX={0}
                        translateY={-600}
                    />
                    {cloudPositions.map((position, index) => (
                        <Cloud
                            key={index}
                            {...position}
                        />
                    ))}
                </React.Fragment>
            )
        default:
            return null
    }
}

