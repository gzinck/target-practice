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
		animationTiming, animationEase,
		downDiameter, circX, circY, downColor, isDrag,
	}) => ({
		transition: (isDrag) ? 'none' : `all ${animationTiming}`,
		transitionTimingFunction: animationEase,
		position: 'absolute',
		left: circX - downDiameter / 2,
		top: circY - downDiameter / 2,
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
		animationTiming, animationEase,
		x2, y2, upDiameter, upColor,
	}) => ({
		transition: `all ${animationTiming}`,
		transitionTimingFunction: animationEase,
		position: 'absolute',
		left: x2 - upDiameter / 2,
		top: y2 - upDiameter / 2,
		width: upDiameter,
		height: upDiameter,
		borderRadius: '50%',
		backgroundColor: upColor,
	}),
	bar: ({
		animationTiming, animationEase,
		upDiameter, x1, y1, length, rotation, color, isDrag,
	}) => ({
		transition: (isDrag) ? 'none' : `all ${animationTiming}`,
		transitionTimingFunction: animationEase,
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

	// Keep track of where the circle currently is
	const [circX, setCircX] = React.useState(0);
	const [circY, setCircY] = React.useState(0);

	// Keep track of where circle was before most recent drag
	const [circWasX, setCircWasX] = React.useState(0);
	const [circWasY, setCircWasY] = React.useState(0);

	React.useEffect(() => {
		setCircX(props.x1);
		setCircY(props.y1);
		setCircWasX(props.x1);
		setCircWasY(props.y1);
	}, [props.x1, props.y1]);

	// When start dragging
	const dragStart = (e) => {
		if (e.target === circRef.current) {
			// Set where mouse was at the start of the drag
			if (e.type === 'touchstart') {
				setMouseX(e.touches[0].clientX);
				setMouseY(e.touches[0].clientY);
			} else {
				setMouseX(e.clientX);
				setMouseY(e.clientY);
			}

			// Set isDrag after other vars to ensure we don't drag until we
			// have the other variables set properly (otherwise, we have
			// a race condition).
			setIsDrag(true);
		}
	};

	// When continue dragging
	const drag = (e) => {
		if (isDrag) {
			e.preventDefault();
			if (e.type === 'touchmove') {
				setCircX(circWasX + e.touches[0].clientX - mouseX);
				setCircY(circWasY + e.touches[0].clientY - mouseY);
			} else {
				setCircX(circWasX + e.clientX - mouseX);
				setCircY(circWasY + e.clientY - mouseY);
			}
		}
	};

	// When done dragging
	const dragEnd = () => {
		if (isDrag) {
			setIsDrag(false);
			setCircWasX(circX);
			setCircWasY(circY);
			// Test if we hit the target
			if (getDist(props.x2, props.y2, circX, circY) < props.downDiameter / 2) {
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
	animationTiming: '0.2s',
	animationEase: 'linear',
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
	animationTiming: PropTypes.string,
	animationEase: PropTypes.string,
};

export default Dragbar;
