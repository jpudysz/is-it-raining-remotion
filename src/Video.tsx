import {Composition} from 'remotion'
import { Test } from './components'

export const RemotionVideo: React.FC = () => {
	return (
			<Composition
				id="HelloWorld"
				component={Test}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
	)
}
