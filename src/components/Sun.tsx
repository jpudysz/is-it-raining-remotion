import React from 'react'
import { Img, useCurrentFrame, interpolate } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'

type SunProps = {
    scale?: number,
    className?: string,
    translateX?: number,
    translateY?: number,
}

export const Sun: React.FunctionComponent<SunProps> = ({
    scale = 1,
    className,
    translateX = 0,
    translateY = 0
}) => {
    const frame = useCurrentFrame()
    const aniamtedRotataion = interpolate(
        frame,
        [0, 120],
        [0, 45]
    )

    return (
        <Container
            className={className}
            style={{
                transform: `translate(${translateX}px, ${translateY}px)`
            }}
        >
            <BaseSun
                src={Images.Sun}
                style={{
                    transform: `scale(${scale}) rotate(${aniamtedRotataion}deg)`
                }}
            />
        </Container>
    )
}

const BaseSun = styled(Img)`
    width: 374px;
    height: 374px;
`

const Container = styled.div`
    position: absolute;
`
