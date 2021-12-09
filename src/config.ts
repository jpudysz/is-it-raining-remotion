const FPS = 30
const VIDEO_DURATION_IN_SECONDS = 10
const VIDEO_DURATION_IN_FRAMES = VIDEO_DURATION_IN_SECONDS * FPS
const VIDEO_WIDTH = 1080
const VIDEO_HEIGHT = 1920
const VIDEO_ID = 'IsItRaining'

export const VIDEO_CONFIG = {
    FPS,
    VIDEO_DURATION_IN_FRAMES,
    VIDEO_WIDTH,
    VIDEO_HEIGHT,
    VIDEO_ID
}

export const APP_CONFIG = {
    CITY: 'Rzeszów',
    DISCORD_URL: 'todo',
    WEATHER_API_KEY: 'todo'
}

export const COMPOSITION_CONFIG = {
    VIDEO: {
        BACKGROUND_COLOR: '#2FD7F5',
        OUTRO_BACKGROUND_COLOR: '#22313D',
    },
    TEXT: {
        FONT_SIZE: {
            SMALL: '26px',
            MEDIUM: '36px',
            LARGE: '75px',
            EXTRA_LARGE: '94px'
        },
        COLOR: {
            REGULAR: '#FFFFFF',
            ACCENT: '#7D2A39'
        }
    }
}
