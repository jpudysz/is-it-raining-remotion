import styled from 'styled-components'
import { Typography, VideoBackground, WeatherBaseImage, Cloud, RainCloud } from '../components'
import { COMPOSITION_CONFIG } from '../config'
import { WeatherState } from '../common'
import { useTranslations, useWeatherStateName } from '../hooks'

type ResultProps = {
    weatherState: WeatherState,
    temperature: number,
}

export const Result: React.FunctionComponent<ResultProps> = ({
    weatherState,
    temperature,
}) => {
    const { VIDEO } = COMPOSITION_CONFIG
    const T = useTranslations()
    const stateName = useWeatherStateName(weatherState)

    return (
        <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
            <Container>
                <WeatherBaseImage weatherState={weatherState} />
                <TextContainer>
                    <Typography.Heading>
                        {temperature}{T.common.celsius}
                    </Typography.Heading>
                    <Typography.Heading>
                        {stateName}
                    </Typography.Heading>
                </TextContainer>
            </Container>
            <RainCloud
                rotate={15}
                scale={0.6}
                translateX={500}
                translateY={-940}
            />
            <RainCloud
                rotate={-15}
                scale={0.6}
                translateX={-430}
                translateY={-980}
            />
            <RainCloud
                translateX={0}
                translateY={-600}
            />
            <RainCloud
                scale={0.8}
                translateX={-530}
                translateY={-300}
            />
            <RainCloud
                scale={0.7}
                translateX={-580}
                translateY={500}
            />
            <RainCloud
                scale={0.7}
                translateX={560}
                translateY={300}
            />
        </VideoBackground>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`
