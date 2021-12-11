import styled from 'styled-components'
import { COMPOSITION_CONFIG } from '../../config'

type TitleProps = {
    accent?: boolean
}

export const Title = styled.h2<TitleProps>`
    color: ${props => props.accent
        ? COMPOSITION_CONFIG.TEXT.COLOR.ACCENT
        : COMPOSITION_CONFIG.TEXT.COLOR.REGULAR};
    font-size: ${COMPOSITION_CONFIG.TEXT.FONT_SIZE.LARGE};
    font-weight: bold;
    font-family: "Comic Sans MS", cursive, sans-serif;
`
