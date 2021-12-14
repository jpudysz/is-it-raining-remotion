import { Img, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'
import { TitleBox } from './TitleBox'

export const VideoTitleBox: React.FunctionComponent = () => {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const scale = spring({
        frame: frame - 10,
        from: 0,
        to: 1,
        fps
    })
    const top = interpolate(
        frame,
        [30, 55, 80],
        [-340, -350, -340]
    )

    return (
        <Container
            style={{
                transform: `scale(${scale})`
            }}
        >
            <Umbrellas
                src={Images.Umbrellas}
                style={{
                    top
                }}
            />
            <TitleBox />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    z-index: 2;
`

const Umbrellas = styled(Img)`
    width: 700px;
    height: 700px;
    position: absolute;
    top: -340px;
    left: 60px;
`
