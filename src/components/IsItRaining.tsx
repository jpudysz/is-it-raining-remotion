import React from 'react'
import { Sequence, useVideoConfig } from 'remotion'
import { Intro } from '../sequences'

export const IsItRaining = () => {
    const { fps } = useVideoConfig()

    return (
        <Sequence
            from={0}
            durationInFrames={3 * fps}
            name="Intro"
        >
            <Intro />
        </Sequence>
    )
}
