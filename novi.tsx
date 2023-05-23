import {AbsoluteFill, Audio, Sequence, useCurrentFrame} from 'remotion';
import {BestQualities} from './BestQualities';
import {Blue} from './Blue';
import {CodeFrame} from './CodeFrame';
import {EndCard} from './EndCard';
import {FadeTransition} from './FadeTransition';
import {FastRefreshDemo} from './FastRefreshDemo';
import {Fork} from './Fork';
import {GoToGithub} from './GoToGithub';
import {Howto} from './HowTo';
import {InspectAndRefactor} from './InspectAndRefactor';
import {Install} from './Install';
import {Intro} from './Intro/Intro';
import {JustWhite} from './JustWhite';
import {Logo} from './Logo/Logo';
import {Multithreaded} from './MultiThreaded';
import {OpenSource} from './OpenSource';
import {Pricing} from './Pricing';
import {PullRequest} from './PullRequest';
import {RemotionPlayerDemo} from './RemotionPlayerDemo';
import {Ssr} from './SSRMultithreaded';
import {TerminalRender} from './TerminalRender';
import {Transition} from './Transition';
import voiceover from './voiceover-no-music.mp3';
import {Website} from './Website';
import {WebTechnologies} from './WebTechnologies';

export const Main: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div>
				<Sequence from={0} durationInFrames={120 + 8}>
					<Transition type="out">
						<Intro showText offset={0} />
					</Transition>
				</Sequence>
				<Sequence from={120} durationInFrames={60}>
					<Transition type="in">
						<GoToGithub />
					</Transition>
				</Sequence>
				<Sequence from={180} durationInFrames={40}>
					<Fork />
				</Sequence>
				<Sequence from={220} durationInFrames={78}>
					<Transition type="out">
						<InspectAndRefactor />
					</Transition>
				</Sequence>
				<Sequence from={290} durationInFrames={60}>
					<Transition type="in">
						<PullRequest />
					</Transition>
				</Sequence>
				<Sequence from={350} durationInFrames={90}>
					<Intro showText offset={-40} />
				</Sequence>
				<Sequence from={440} durationInFrames={58}>
					<Transition type="out">
						<AbsoluteFill>
							<Howto />
						</AbsoluteFill>
					</Transition>
				</Sequence>
				<Sequence from={490} durationInFrames={170}>
					<Transition type="in">
						<AbsoluteFill style={{overflow: 'hidden'}}>
							<Logo showText offset={0} textStartOffset={0} />
						</AbsoluteFill>
					</Transition>
				</Sequence>
				<Sequence from={660} durationInFrames={190}>
					<CodeFrame
						width={1200}
						title="Video.tsx"
