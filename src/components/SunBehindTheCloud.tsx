import React from 'react'
import styled from 'styled-components'
import { Sun } from './Sun'
import { Cloud } from './Cloud'

type SunBehindTheCloudProps = {
    translateX: number,
    translateY: number,
}

export const SunBehindTheCloud: React.FunctionComponent<SunBehindTheCloudProps> = ({
    translateX,
    translateY
}) => {
    return (
        <Cloud
            translateX={translateX}
            translateY={translateY}
        >
            <PositionedSun scale={0.8}/>
        </Cloud>
    )
}

const PositionedSun = styled(Sun)`
    right: -90px;
    z-index: -1;
    bottom: 0px;
`
