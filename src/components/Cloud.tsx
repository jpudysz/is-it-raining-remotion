import styled from 'styled-components'
import { Img, interpolate, useCurrentFrame } from 'remotion'
import { Images } from '../assets'

type CloudProps = {
    translateX?: number,
    translateY?: number,
    scale?: number,
    rotate?: number,
}


export const Cloud: React.FunctionComponent<CloudProps> = ({
    translateX = 0,
    translateY = 0,
    scale = 1,
    rotate = 0,
    children
}) => {
    const frame = useCurrentFrame()
    const animatedTranslateX = interpolate(
        frame,
        [0, 120 * scale],
        [translateX, translateX - 50],
    )

    return (
        <Container
            style={{
                transform: `translateX(${animatedTranslateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
            }}
        >
            <BaseCloud src={Images.Cloud} />
            {children}
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
`

const BaseCloud = styled(Img)`
    width: 457px;
    height: 295px;
`
