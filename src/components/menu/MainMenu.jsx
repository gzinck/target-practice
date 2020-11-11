import React from 'react';
import Menu from './Menu';
import Toggle from './Toggle';
import Link from './Link';
import Slider from './Slider';
import { getRouteFor } from '../../routes';

const dimensionOpts = ['1D', '2D'];
const randomScale = ['Fixed', 'Semi', 'Random'];
const interactionOpts = ['Tap', 'Drag'];
const diameterScale = [50, 400];
const lengthScale = [50, 1000];

function MainMenu() {
	const [interaction, setInteraction] = React.useState(0);
	const [dimensions, setDimensions] = React.useState(0);
	const [rand, setRand] = React.useState(0);
	const [diam, setDiam] = React.useState(150);
	const [length, setLength] = React.useState(300);

	const currDim = dimensionOpts[dimensions];
	const currInteract = interactionOpts[interaction];
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
			<Slider
				label="Randomness"
				min={0}
				max={1}
				value={rand}
				setValue={setRand}
				scaleItems={randomScale}
			/>
			<Slider
				label="Diameter"
				min={diameterScale[0]}
				max={diameterScale[1]}
				value={diam}
				setValue={setDiam}
				scaleItems={diameterScale}
			/>
			{(interaction === 1) && (
				<Slider
					label="Length"
					min={lengthScale[0]}
					max={lengthScale[1]}
					value={length}
					setValue={setLength}
					scaleItems={lengthScale}
				/>
			)}
			<br />
			<Link
				to={getRouteFor(currInteract, currDim, rand, diam, length)}
			>
				Start Exercise
			</Link>
		</Menu>
	);
}

export default MainMenu;
