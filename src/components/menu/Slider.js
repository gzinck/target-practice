import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const diameter = 40;
const useStyles = makeStyles({
	slideContainer: {
		width: '100%',
	},
	slider: {
		WebkitAppearance: 'none',
		appearange: 'none',
		width: '100%',
		height: diameter * 0.8,
		background: '#FFF',
		borderRadius: diameter / 2,
		outline: 'none',
		opacity: 0.7,
		transition: 'all 0.2s',
		'&:hover': {
			opacity: 1,
		},
		'&::-webkit-slider-thumb': {
			WebkitAppearance: 'none',
			appearance: 'none',
			width: diameter,
			height: diameter,
			background: '#0091ff',
			cursor: 'pointer',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
			borderRadius: diameter / 2,
		},
		'&::-moz-range-thumb': {
			width: diameter,
			height: diameter,
			background: '#0091ff',
			cursor: 'pointer',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
			borderRadius: diameter / 2,
		},
	},
	scale: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
	},
});

function Slider(props) {
	const classes = useStyles();
	return (
		<div>
			<h4>{props.label}</h4>
			<div className={classes.slideContainer}>
				<input
					type="range"
					min={props.min}
					max={props.max}
					value={props.value}
					step={0.1}
					onChange={(e) => props.setValue(parseFloat(e.target.value))}
					className={classes.slider}
				/>
			</div>
			<div className={classes.scale}>
				{props.scaleItems.map((item) => (
					<div key={item}>
						{item}
					</div>
				))}
			</div>
		</div>
	);
}

Slider.defaultProps = {
	label: '',
	scaleItems: [],
	min: 0,
	max: 1,
	value: 0.5,
	setValue: () => null,
};

Slider.propTypes = {
	label: PropTypes.string,
	scaleItems: PropTypes.array,
	min: PropTypes.number,
	max: PropTypes.number,
	value: PropTypes.number,
	setValue: PropTypes.func,
};

export default Slider;
