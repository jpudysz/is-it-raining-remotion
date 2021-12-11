import React from 'react'
import { COMPOSITION_CONFIG } from '../config'
import { useTranslations } from '../hooks'
import { VideoBackground } from './VideoBackground'
import { Cloud } from './Cloud'
import { Heading } from './typography'

export const IsItRaining = () => {
    const { TEXT, VIDEO } = COMPOSITION_CONFIG
    const T = useTranslations()

    return (
        <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
            <Heading>
                {T.intro.question}
            </Heading>
            <Cloud
                translateX={20}
                translateY={-20}
                scale={2}
                rotate={-50}
            />
            <Cloud
                translateX={150}
                translateY={-100}
            />
        </VideoBackground>
    )
}
