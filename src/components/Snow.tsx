import React from 'react'
import styled from 'styled-components'
import { Img, useCurrentFrame, interpolate } from 'remotion'
import { Images } from '../assets'

type SnowProps = {
    slower?: boolean,
    bottom: number,
    left: number,
    opacity: number,
}

export const Snow: React.FunctionComponent<SnowProps> = ({
    slower,
    bottom,
    left,
    opacity
}) => {
    const frame = useCurrentFrame()
    const animatedOpacity = interpolate(
        frame,
        [0, slower ? 50 : 35],
        [opacity, 0]
    )
    const animatedBottom = interpolate(
        frame,
        [0, slower ? 50 : 35],
        [0, slower ? bottom * 0.75 : bottom * 0.9],
        {
            extrapolateRight: 'clamp',
        }
    )
    const animatedLeft = interpolate(
        frame,
        [0, slower ? 50 : 35],
        [left, left - 5],
        {
            extrapolateRight: 'clamp',
        }
    )
    const rotation = slower ? 5 : 15
    const animatedRotate = interpolate(
        frame,
        [0, 15, 30, 45],
        [0, rotation, 2 * rotation, 3 * rotation],
        {
            extrapolateRight: 'clamp',
        }
    )

    return (
        <BaseSnow
            src={Images.Snow}
            style={{
                bottom: animatedBottom,
                left: animatedLeft,
                opacity: animatedOpacity,
                transform: `rotate(${animatedRotate}deg)`,
            }}
        />
    )
}

const BaseSnow = styled(Img)`
    width: 42px;
    height: 42px;
    position: absolute;
`
