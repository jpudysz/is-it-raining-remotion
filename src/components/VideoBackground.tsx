import styled from 'styled-components'

type VideoBackgroundProps = {
    backgroundColor: string
}

export const VideoBackground = styled.div<VideoBackgroundProps>`
    flex: 1;
    background-color: ${props => props.backgroundColor};
`
