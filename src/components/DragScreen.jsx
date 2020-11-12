import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { menuRoute } from '../routes';
import ProgressBar from './ProgressBar';
import Dragbar from './Dragbar';
import useProgress from '../hooks/useProgress';
import useController from '../hooks/useDragController';
import useAnimationController from '../hooks/useAnimationController';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100vh',
	},
	link: {
		position: 'absolute',
		top: '10px',
		left: '10px',
		backgroundColor: '#ccc',
		textDecoration: 'none',
		color: '#FFF',
		transition: 'all 0.2s',
		boxSizing: 'border-box',
		display: 'block',
		padding: '20px 30px',
		borderRadius: '40px',
		fontSize: '1.2em',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		'&:hover, &:focus': {
			top: '12px',
			boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
			backgroundColor: '#0008ff',
		},
	},
});

function DragScreen() {
	const classes = useStyles();
	const [dragProps, setDragProps] = React.useState(null);

	const {
		progress, maxProgress, incrementProgress, resetProgress,
	} = useProgress();

	const controller = useController();
	const { timing, ease } = useAnimationController();

	// To go to the next circle
	const next = () => {
		if (controller !== null) {
			setDragProps(controller.next());
			incrementProgress();
		}
	};

	// When the controller changes, reset progress
	React.useEffect(() => {
		if (controller !== null) {
			setDragProps(controller.next());
			resetProgress();
		}
	}, [controller]);

	return (
		<div className={classes.root}>
			<Link
				to={menuRoute}
				className={classes.link}
			>
				Back to Menu
			</Link>
			<Dragbar
				{...dragProps}
				onComplete={next}
				animationTiming={timing}
				animationEase={ease}
			/>
			<ProgressBar
				current={progress}
				max={maxProgress}
			/>
		</div>
	);
}

export default DragScreen;
