import React from 'react'
import styled from 'styled-components'
import { Img, useCurrentFrame, interpolate } from 'remotion'
import { Images } from '../assets'

export const Sunbeds: React.FunctionComponent = () => {
    const frame = useCurrentFrame()
    const animatedSkewX = interpolate(
        frame,
        [0, 45, 90, 120],
        [0, 1.5, 0, -1.5]
    )

    return (
        <BaseSunbeds
            src={Images.Sunbeds}
            style={{
                transform: `skewX(${animatedSkewX}deg)`,
            }}
        />
    )
}

const BaseSunbeds = styled(Img)`
    width: 814px;
    height: 465px;
    transform-origin: bottom center;
`
