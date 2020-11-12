import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: ({
		animationTiming, animationEase,
		diameter, x, y, color,
	}) => ({
		position: 'absolute',
		left: x,
		top: y,
		width: diameter,
		height: diameter,
		backgroundColor: color,
		borderRadius: diameter / 2,
		border: 'none',
		transition: `all ${animationTiming}`,
		transitionTimingFunction: animationEase,
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		'&:hover, &:focus': {
			cursor: 'pointer',
			boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
			backgroundColor: '#0008ff',
		},
	}),
});

function Circle(props) {
	const classes = useStyles({ ...props });
	return (
		<button
			type="button"
			className={classes.root}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}

Circle.defaultProps = {
	x: 0,
	y: 0,
	diameter: 100,
	color: '#0091ff',
	onClick: () => null,
	animationTiming: '0.2s',
	animationEase: 'linear',
	children: ' ', // Note that buttons cannot have no content
};

Circle.propTypes = {
	x: PropTypes.number,
	y: PropTypes.number,
	diameter: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
	color: PropTypes.string,
	onClick: PropTypes.func,
	animationTiming: PropTypes.string,
	animationEase: PropTypes.string,
	children: PropTypes.node,
};

export default Circle;
