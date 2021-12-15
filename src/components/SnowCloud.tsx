import React, { Fragment } from 'react'
import { Loop } from 'remotion'
import styled from 'styled-components'
import { Cloud } from './Cloud'
import { Snow } from './Snow'

type SnowCloudProps = {
    translateX?: number,
    translateY?: number,
    scale?: number,
    rotate?: number,
}

export const SnowCloud: React.FunctionComponent<SnowCloudProps> = ({
    translateX = 0,
    translateY = 0,
    scale = 1,
    rotate = 0
}) => {
    const snowPosition = [
        {
            bottom: -60,
            left: 60,
        },
        {
            bottom: -70,
            left: 180,
        },
        {
            bottom: -60,
            left: 300,
        },
        {
            bottom: -170,
            left: 100,
        },
        {
            bottom: -140,
            left: 220,
        },
        {
            bottom: -145,
            left: 350,
        },
        {
            bottom: -225,
            left: 150,
        },
        {
            bottom: -225,
            left: 280,
        }
    ]

    return (
        <Cloud
            translateX={translateX}
            translateY={translateY}
            scale={scale}
            rotate={rotate}
        >
            <Loop
                times={Infinity}
                durationInFrames={45}
            >
                {snowPosition.map((position, index) => (
                    <Fragment>
                        <Snow
                            key={`${index}-1`}
                            left={position.left}
                            bottom={position.bottom}
                            opacity={1}
                        />
                        <Snow
                            slower
                            key={`${index}-2`}
                            left={position.left - 30}
                            bottom={position.bottom - 70}
                            opacity={0.7}
                        />
                    </Fragment>
                ))}
            </Loop>
        </Cloud>
    )
}
