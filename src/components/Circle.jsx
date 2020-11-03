import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: ({
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
	children: PropTypes.node,
};

export default Circle;
