import React from 'react';
import {
	Route,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Canvas from './components/Canvas';
import Menu from './components/menu/Menu';

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
					<Route path="/play/:controller">
						<Canvas />
					</Route>
					<Route path="/">
						<Menu />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
