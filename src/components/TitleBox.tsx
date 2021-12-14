import styled from 'styled-components'
import { Img, useCurrentFrame, interpolate } from 'remotion'
import { Typography } from '../components'
import { Images } from '../assets'
import { useTranslations } from '../hooks'

export const TitleBox = () => {
    const T = useTranslations()
    const frame = useCurrentFrame()
    const opacity = interpolate(
        frame,
        [0, 40, 50],
        [0, 0, 1]
    )

    return (
        <Container>
            <TitleBoxImage src={Images.TitleBox} />
            <QuestionRow
                style={{
                    opacity
                }}
            >
                <Typography.Title>
                    {T.intro.question1}
                </Typography.Title>
                <Typography.Title accent>
                    {` ${T.intro.question2}`}
                </Typography.Title>
            </QuestionRow>
        </Container>
    )
}

const TitleBoxImage = styled(Img)`
    height: 468px;
    width: 761px;
`

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const QuestionRow = styled.div`
    position: absolute;
    text-align: center;
    width: 600px;
`
