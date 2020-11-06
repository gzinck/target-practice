import React from 'react';
import {
	Route,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Canvas from './components/Canvas';
import MainMenu from './components/menu/MainMenu';
import DoneMenu from './components/menu/DoneMenu';
import {
	doneRoute,
	tapRoute,
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
					<Route path={`${tapRoute}:controller`}>
						<Canvas />
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
