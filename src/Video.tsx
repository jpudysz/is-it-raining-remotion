import React, { useState, useEffect } from 'react'
import { Composition, continueRender, delayRender } from 'remotion'
import { WeatherState } from './common'
import { IsItRaining } from './components'
import { VIDEO_CONFIG, APP_CONFIG } from './config'
import { fetchWeatherDataForCity } from './actions'
import './reset.css'

export const RemotionVideo: React.FunctionComponent = () => {
    const {
        FPS,
        VIDEO_DURATION_IN_FRAMES,
        VIDEO_HEIGHT,
        VIDEO_WIDTH,
        VIDEO_ID
    } = VIDEO_CONFIG
    const { CITY } = APP_CONFIG
    const [handle] = useState(() => delayRender())
    const [isReadyToRender, setIsReadyToRender] = useState(false)
    const [temperature, setTemperature] = useState<number>()
    const [weatherState, setWeatherState] = useState<WeatherState>()
    const fetchWeatherData = async () => {
        const { temperature, weatherState } = await fetchWeatherDataForCity(CITY)

        setTemperature(temperature)
        setWeatherState(weatherState)
        setIsReadyToRender(true)
        continueRender(handle)
    }

    useEffect(() => {
        fetchWeatherData()
    }, [])

    return isReadyToRender ? (
        <Composition
            fps={FPS}
            id={VIDEO_ID}
            width={VIDEO_WIDTH}
            height={VIDEO_HEIGHT}
            component={IsItRaining}
            durationInFrames={VIDEO_DURATION_IN_FRAMES}
            defaultProps={{
                temperature: temperature as number,
                weatherState: weatherState as WeatherState
            }}
        />
    ) : null
}
