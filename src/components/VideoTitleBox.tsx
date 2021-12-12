import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'
import { TitleBox } from './TitleBox'

export const VideoTitleBox: React.FunctionComponent = () => (
    <Container>
        <Umbrellas src={Images.Umbrellas} />
        <TitleBox />
    </Container>
)

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
