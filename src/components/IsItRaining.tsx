import React, { Fragment } from 'react'
import { Sequence, useVideoConfig, Audio } from 'remotion'
import { Intro, Result, Outro } from '../sequences'
import { WeatherState } from '../common'

import source from '../assets/music.mp3'

type IsItRainingProps = {
    weatherState: WeatherState,
    temperature: number,
}

export const IsItRaining: React.FunctionComponent<IsItRainingProps> = ({
    weatherState,
    temperature,
}) => {
    const { fps } = useVideoConfig()

    return (
        <Fragment>
            <Sequence
                from={0}
                durationInFrames={3 * fps}
                name="Intro"
            >
                <Intro />
            </Sequence>
            <Sequence
                from={3 * fps}
                durationInFrames={4 * fps}
                name="Result"
            >
                <Result
                    temperature={temperature}
                    weatherState={weatherState}
                />
            </Sequence>
            <Sequence
                from={7 * fps}
                durationInFrames={3 * fps}
                name="Outro"
            >
                <Outro />
            </Sequence>
            <Audio src={source} />
        </Fragment>
    )
}
