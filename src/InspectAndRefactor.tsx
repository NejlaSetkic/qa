import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {Inspect} from './Inspect';

const Container = styled.div`
	background-color: white;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const start = 25;

export const InspectAndRefactor: React.FC = () => {
	const inspectandrefactor = require('./inspect-and-refactor.png');

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({
		fps,
		frame: frame - start,
		config: {
			damping: 200,
			stiffness: 200,
		},
	});

	const scale = interpolate(progress, [0, 1], [1, 0.8]);
	const browserY = interpolate(progress, [0, 1], [0, -150]);
	const translateY = interpolate(progress, [0, 1], [1500, 0]);
	const browserOpacity = interpolate(progress, [0, 1], [1, 0.5]);

	return (
		<Container>
			<div
				style={{
					transform: `scale(${scale}) translateY(${browserY}px)`,
					position: 'absolute',
					opacity: browserOpacity,
				}}
			>
				<Inspect />
			</div>
			<div style={{position: 'absolute', zIndex: 1}}>
				<img
					src={inspectandrefactor}
					style={{width: 1400, transform: `translateY(${translateY}px)`}}
				/>
			</div>
		</Container>
	);
};