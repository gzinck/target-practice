import React from 'react';
import {
	Route,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import TapScreen from './components/TapScreen';
import DragScreen from './components/DragScreen';
import MainMenu from './components/menu/MainMenu';
import DoneMenu from './components/menu/DoneMenu';
import {
	doneRoute,
	parameterizedDragRoute,
	parameterizedTapRoute,
} from './routes';

const useStyles = makeStyles({
	root: {
		width: '100%',
		minHeight: '100vh',
	},
});

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Router>
				<Switch>
					<Route path={parameterizedTapRoute}>
						<TapScreen />
					</Route>
					<Route path={parameterizedDragRoute}>
						<DragScreen />
					</Route>
					<Route path={doneRoute}>
						<DoneMenu />
					</Route>
					<Route path="/">
						<MainMenu />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
