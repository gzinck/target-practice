import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Canvas from './components/Canvas';
import RandTargetController from './controllers/1D/RandTargetController';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100vh',
	},
});

function App() {
	const classes = useStyles();
	const [controller, setController] = React.useState(null);
	React.useEffect(() => setController(new RandTargetController()), []);
	return (
		<div className={classes.root}>
			<Canvas controller={controller} />
		</div>
	);
}

export default App;
