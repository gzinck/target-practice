import React from 'react';
import Menu from './Menu';
import Toggle from './Toggle';
import Link from './Link';
import Slider from './Slider';
import { getRouteFor } from '../../routes';

const dimensionOpts = ['1D', '2D'];
const randomScale = ['Fixed', 'Semi', 'Random'];
const interactionOpts = ['Tap', 'Drag'];
const easeOpts = ['Ease', 'Linear'];
const diameterScale = [50, 400];
const lengthScale = [50, 1000];
const timeScale = [0, 5];

function MainMenu() {
	const [interaction, setInteraction] = React.useState(0);
	const [dimensions, setDimensions] = React.useState(0);
	const [rand, setRand] = React.useState(0);
	const [diam, setDiam] = React.useState(150);
	const [time, setTime] = React.useState(0.2);
	const [length, setLength] = React.useState(300);
	const [ease, setEase] = React.useState(0);

	const currDim = dimensionOpts[dimensions];
	const currInteract = interactionOpts[interaction];
	const currEase = easeOpts[ease];
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
				setCurr={setInteraction}
			/>
			<Toggle
				opts={dimensionOpts}
				curr={dimensions}
				setCurr={setDimensions}
			/>
			<Toggle
				opts={easeOpts}
				curr={ease}
				setCurr={setEase}
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
			<Slider
				label="Animation Time"
				min={timeScale[0]}
				max={timeScale[1]}
				value={time}
				setValue={setTime}
				scaleItems={timeScale}
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
				to={getRouteFor(currInteract, currDim, rand, diam, currEase, `${time}s`, length)}
			>
				Start Exercise
			</Link>
		</Menu>
	);
}

export default MainMenu;
