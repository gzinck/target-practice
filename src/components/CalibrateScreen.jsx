import React from 'react';
import { useRecoilValue } from 'recoil';
import { makeStyles } from '@material-ui/styles';
import Circle from './Circle';
import Controller from '../controllers/tap/CalibrationController';
import viconCoordinatesState from '../state/atoms/viconCoordinatesState';
import viconSocketState from '../state/atoms/viconSocketState';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100vh',
	},
});

function CalibrateScreen() {
	const classes = useStyles();
	const currViconCoors = useRecoilValue(viconCoordinatesState);
	const socket = useRecoilValue(viconSocketState);

	const [circProps, setCircProps] = React.useState(null);
	const [progress, setProgress] = React.useState(0);
	const [viconCoors, setViconCoors] = React.useState([]);
	const [deviceCoors, setDeviceCoors] = React.useState([]);
	const [controller] = React.useState(new Controller(50));

	const next = () => {
		if (progress < 8) {
			setViconCoors([...viconCoors, currViconCoors]);
			setDeviceCoors([...deviceCoors, [
				circProps.x + circProps.diameter,
				circProps.y + circProps.diameter,
				0,
			]]);

			setCircProps(controller.next());
			setProgress(progress + 1);
		} else {
			console.error(deviceCoors, viconCoors);
			socket.send(JSON.stringify({
				source: deviceCoors,
				dest: viconCoors,
			}));
			console.error('Calibration should complete here');
		}
	};

	React.useEffect(() => setCircProps(controller.next()), []);
	document.body.onkeyup = (e) => {
		if (e.keyCode === 32) next();
	};

	return (
		<div className={classes.root}>
			<Circle
				{...circProps}
				onClick={next}
			/>
		</div>
	);
}

export default CalibrateScreen;
