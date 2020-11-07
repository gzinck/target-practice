import React from 'react';
import Menu from './Menu';
import Toggle from './Toggle';
import Link from './Link';

const dimensionOpts = ['1D', '2D'];
const randomOpts = ['Fixed', 'Semi', 'Random'];
const interactionOpts = ['Tap', 'Drag'];

function MainMenu() {
	const [dimensions, setDimensions] = React.useState(0);
	const [rand, setRand] = React.useState(0);
	const [interaction, setInteraction] = React.useState(0);

	const currInt = (interactionOpts[interaction] || '').toLowerCase();
	const currDims = (dimensionOpts[dimensions] || '').toLowerCase();
	const currRand = (randomOpts[rand] || '').toLowerCase();
	return (
		<Menu
			title="Target Practice"
		>
			<p>
				This research analyses how you move when hitting targets.
				Select one of the evaluation modes below.
			</p>
			<Toggle
				opts={interactionOpts}
				curr={interaction}
				setCurr={(i) => setInteraction(i)}
			/>
			<Toggle
				opts={dimensionOpts}
				curr={dimensions}
				setCurr={(i) => setDimensions(i)}
			/>
			<Toggle
				opts={randomOpts}
				curr={rand}
				setCurr={(i) => setRand(i)}
			/>
			<br />
			<Link
				to={`/${currInt}/${currDims}${currRand}`}
			>
				Start Exercise
			</Link>
		</Menu>
	);
}

export default MainMenu;
