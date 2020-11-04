import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Circle from './Circle';
import useController from '../hooks/useController';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100vh',
	},
});

function Canvas() {
	const classes = useStyles();
	const [circProps, setCircProps] = React.useState(null);
	const controller = useController();

	const next = () => {
		if (controller !== null) {
			setCircProps(controller.next());
		}
	};
	React.useEffect(next, [controller]);

	return (
		<div className={classes.root}>
			<Circle
				{...circProps}
				onClick={next}
			/>
		</div>
	);
}

export default Canvas;
