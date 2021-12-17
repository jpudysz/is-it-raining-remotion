import React from 'react'
import { Img, useCurrentFrame, interpolate } from 'remotion'
import styled from 'styled-components'
import { Typography, VideoBackground, Codemask } from '../components'
import { COMPOSITION_CONFIG, APP_CONFIG } from '../config'
import { Images } from '../assets'
import { useTranslations } from '../hooks'

export const Outro: React.FunctionComponent = () => {
    const T = useTranslations()
    const { VIDEO } = COMPOSITION_CONFIG
    const { DISCORD_URL } = APP_CONFIG
    const frame = useCurrentFrame()
    const borderOpacity = interpolate(
        frame,
        [0, 15],
        [0, 1]
    )
    const contentOpacity = interpolate(
        frame,
        [0, 15, 30],
        [0, 0, 1]
    )

    return (
        <VideoBackground backgroundColor={VIDEO.OUTRO_BACKGROUND_COLOR}>
            <Border
                style={{
                    opacity: borderOpacity
                }}
            >
                <Container
                    style={{
                        opacity: contentOpacity
                    }}
                >
                    <Codemask />
                    <Section>
                        <Typography.Regular>
                            {T.outro.question}
                        </Typography.Regular>
                        <DiscordContainer>
                            <Discord src={Images.Discord} />
                        </DiscordContainer>
                        <Typography.Regular>
                            {T.outro.discord}
                        </Typography.Regular>
                        <Typography.Regular>
                            {DISCORD_URL}
                        </Typography.Regular>
                    </Section>
                    <Typography.Note>
                        {T.outro.note}
                    </Typography.Note>
                </Container>
            </Border>
        </VideoBackground>
    )
}

const Border = styled.div`
    position: absolute;
    border: 9px solid white;
    top: 70px;
    bottom: 70px;
    left: 70px;
    right: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const Discord = styled(Img)`
    width: 133px;
    height: 101px;
`
const Container = styled.div`
    max-width: 630px;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 200px;
    margin-bottom: 200px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
`
const DiscordContainer = styled.div`
    height: 250px;
    align-items: center;
    display: flex;
`
