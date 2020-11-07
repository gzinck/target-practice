import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import useEvent from '../hooks/useEvent';

const getDist = (x1, y1, x2, y2) => {
	const dx = x2 - x1;
	const dy = y2 - y1;
	return Math.sqrt(dx * dx + dy * dy);
};

const useStyles = makeStyles({
	downCircle: ({
		downDiameter, circX, circY, downColor, isDrag,
	}) => ({
		transition: (isDrag) ? 'none' : 'all 0.2s',
		position: 'absolute',
		left: circX,
		top: circY,
		width: downDiameter,
		height: downDiameter,
		backgroundColor: downColor,
		borderRadius: downDiameter / 2,
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		'&:hover, &:focus, &:active': {
			cursor: 'move',
			boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
			backgroundColor: '#0008ff',
		},
	}),
	upCircle: ({
		x2, y2, upDiameter, upColor,
	}) => ({
		transition: 'all 0.2s',
		position: 'absolute',
		left: x2 - upDiameter / 2,
		top: y2 - upDiameter / 2,
		width: upDiameter,
		height: upDiameter,
		borderRadius: '50%',
		backgroundColor: upColor,
	}),
	bar: ({
		upDiameter, x1, y1, length, rotation, color, isDrag,
	}) => ({
		transition: (isDrag) ? 'none' : 'all 0.2s',
		position: 'absolute',
		left: x1,
		top: y1 - upDiameter / 2,
		transformOrigin: `0 ${upDiameter / 2}px`,
		transform: `rotate(${rotation}rad)`,
		width: length,
		height: upDiameter,
		backgroundColor: color,
		borderRadius: upDiameter / 2,
	}),
});

function Dragbar(props) {
	const circRef = React.useRef(null);
	const [isDrag, setIsDrag] = React.useState(false);
	const [mouseX, setMouseX] = React.useState(0);
	const [mouseY, setMouseY] = React.useState(0);

	const dX = props.x2 - props.x1;
	const dY = props.y2 - props.y1;

	// Keep track of where the user is selecting
	const [circX, setCircX] = React.useState(0);
	const [circY, setCircY] = React.useState(0);

	React.useEffect(() => {
		setCircX(props.x1 - props.downDiameter / 2);
		setCircY(props.y1 - props.downDiameter / 2);
	}, [props.x1, props.y1, props.downDiameter]);

	// When start dragging
	const dragStart = (e) => {
		if (e.target === circRef.current) {
			setIsDrag(true);

			// Set the current position for touch events.
			// @TODO: test this! It might not work.
			// See https://developer.mozilla.org/en-US/docs/Web/API/Touch
			if (e.type === 'touchstart') {
				setMouseX(e.touches[0].clientX);
				setMouseY(e.touches[0].clientY);
			}
		}
	};

	// When continue dragging
	const drag = (e) => {
		if (isDrag) {
			e.preventDefault();
			if (e.type === 'touchmove') {
				setCircX(props.x1 + e.touches[0].clientX - mouseX);
				setCircY(props.y1 + e.touches[0].clientY - mouseY);
			} else {
				setCircX(circX + e.movementX);
				setCircY(circY + e.movementY);
			}
		}
	};

	// When done dragging
	const dragEnd = () => {
		if (isDrag) {
			setIsDrag(false);
			const x = circX + props.downDiameter / 2;
			const y = circY + props.downDiameter / 2;
			// Test if we hit the target
			if (getDist(props.x2, props.y2, x, y) < props.downDiameter / 2) {
				props.onComplete();
			}
		}
	};

	useEvent('mousedown', dragStart);
	useEvent('mousemove', drag);
	useEvent('mouseup', dragEnd);

	useEvent('touchstart', dragStart);
	useEvent('touchmove', drag);
	useEvent('touchend', dragEnd);

	const classes = useStyles({
		...props,
		circX,
		circY,
		isDrag,
		length: Math.sqrt(dX * dX + dY * dY) + props.upDiameter / 2,
		rotation: Math.atan2(dY, dX),
	});

	return (
		<>
			<div className={classes.bar} />
			<div className={classes.upCircle} />
			<div
				className={classes.downCircle}
				ref={circRef}
			/>
		</>
	);
}

Dragbar.defaultProps = {
	downDiameter: 150,
	upDiameter: 100,
	x1: 0,
	y1: 0,
	x2: 100,
	y2: 100,
	downColor: '#0091ff',
	color: '#a8d9ff',
	upColor: '#87cbff',
	onComplete: () => null,
};

Dragbar.propTypes = {
	downDiameter: PropTypes.number,
	upDiameter: PropTypes.number,
	x1: PropTypes.number,
	y1: PropTypes.number,
	x2: PropTypes.number,
	y2: PropTypes.number,
	downColor: PropTypes.string,
	color: PropTypes.string,
	upColor: PropTypes.string,
	onComplete: PropTypes.func,
};

export default Dragbar;
