import React from 'react'
import styled from 'styled-components'
import { Img, useCurrentFrame, interpolate } from 'remotion'
import { Images } from '../assets'

export const Umbrella: React.FunctionComponent = () => {
    const frame = useCurrentFrame()
    const animatedTranslateY = interpolate(
        frame,
        [0, 60, 120],
        [0, -75, 0]
    )
    const animatedRotateY = interpolate(
        frame,
        [0, 60, 120],
        [0, 20, 0]
    )

    return (
        <BaseUmbrella
            src={Images.Umbrella}
            style={{
                transform: `translateY(${animatedTranslateY}px) rotateY(${animatedRotateY}deg)`,
            }}
        />
    )
}

const BaseUmbrella = styled(Img)`
    width: 656px;
    height: 496px;
`
