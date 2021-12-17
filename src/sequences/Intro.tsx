import React from 'react'
import { VideoBackground, VideoTitleBox, Cloud } from '../components'
import { COMPOSITION_CONFIG } from '../config'

export const Intro: React.FunctionComponent = () => {
    const { VIDEO } = COMPOSITION_CONFIG
    const cloudPositions = [
        {
            scale: 0.7,
            translateX: -340,
            translateY: -760,
        },
        {
            scale: 1.3,
            translateX: 350,
            translateY: -960,
        },
        {
            scale: 0.45,
            translateX: 50,
            translateY: -660,
        },
        {
            scale: 0.7,
            rotate: 160,
            translateX: 460,
            translateY: -560,
        },
        {
            scale: 0.45,
            translateX: -430,
            translateY: -470,
        },
        {
            scale: 0.45,
            translateX: -350,
            translateY: -120,
        },
        {
            scale: 0.7,
            translateX: 570,
            translateY: 20,
        },
        {
            scale: 1.4,
            rotate: -10,
            translateX: -520,
            translateY: 240,
        },
        {
            scale: 1.3,
            translateX: 420,
            translateY: 680,
        },
        {
            scale: 0.45,
            translateX: -120,
            translateY: 540,
        },
        {
            scale: 1.3,
            translateX: -320,
            translateY: 880,
        },
    ]

    return (
        <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
            <VideoTitleBox />
            {cloudPositions.map((position, index) => (
                <Cloud
                    key={index}
                    {...position}
                />
            ))}
        </VideoBackground>
    )
}
