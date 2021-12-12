import { Composition } from 'remotion'
import { IsItRaining } from './components'
import { VIDEO_CONFIG } from './config'
import './reset.css'

export const RemotionVideo: React.FunctionComponent = () => {
    const {
        FPS,
        VIDEO_DURATION_IN_FRAMES,
        VIDEO_HEIGHT,
        VIDEO_WIDTH,
        VIDEO_ID
    } = VIDEO_CONFIG

    return (
        <Composition
            fps={FPS}
            id={VIDEO_ID}
            width={VIDEO_WIDTH}
            height={VIDEO_HEIGHT}
            component={IsItRaining}
            durationInFrames={VIDEO_DURATION_IN_FRAMES}
        />
    )
}
