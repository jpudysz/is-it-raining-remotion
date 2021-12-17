import React from 'react'
import styled from 'styled-components'
import { Img, useCurrentFrame, spring, useVideoConfig } from 'remotion'
import { Images } from '../assets'

export const Codemask: React.FunctionComponent= () => {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const animatedScale = spring({
        frame: frame - 15,
        fps,
        from: 1.5,
        to: 1,
    })

    return (
        <BaseCodemask
            src={Images.Codemask}
            style={{
                transform: `scale(${animatedScale})`
            }}
        />
    )
}

const BaseCodemask = styled(Img)`
    width: 324px;
    height: 251px;
`
