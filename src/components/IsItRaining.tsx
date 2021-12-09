import React from 'react'
import { APP_CONFIG, COMPOSITION_CONFIG } from '../config'
import { useTranslations } from '../hooks'

export const IsItRaining = () => {
    const { TEXT, VIDEO } = COMPOSITION_CONFIG
    const T = useTranslations()

    return (
        <div
            style={{
                flex: 1,
                backgroundColor: VIDEO.BACKGROUND_COLOR,
            }}
        >
            <h1
                style={{
                    fontSize: TEXT.FONT_SIZE.LARGE,
                    color: TEXT.COLOR.REGULAR
                }}
            >
                {T.intro.question}
            </h1>
        </div>
    )
}
