import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import {
	controller1DRandName,
	playRoute,
} from '../../routes';

const useStyles = makeStyles({
	root: {
		maxWidth: '400px',
		minHeight: '600px',
		marginLeft: 'calc(50vw - min(100vw, 400px) / 2)',
		marginTop: '50px',
		marginBottom: '50px',
		borderRadius: '5px',
		padding: '30px 20px',
		boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		backgroundColor: '#EEE',
	},
	link: {
		position: 'relative',
		top: '0px',
		backgroundColor: '#0091ff',
		textDecoration: 'none',
		color: '#FFF',
		transition: 'all 0.2s',
		width: '100%',
		boxSizing: 'border-box',
		display: 'block',
		padding: '20px',
		borderRadius: '4px',
		fontSize: '1.2em',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		'&:hover, &:focus': {
			top: '2px',
			boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
			backgroundColor: '#0008ff',
		},
	},
});

function Menu() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h2>Target Practice</h2>
			<p>
				This research analyses how you move when hitting targets.
				Select one of the evaluation modes below.
			</p>
			<Link
				to={playRoute + controller1DRandName}
				className={classes.link}
			>
				1D Random Motion
			</Link>
		</div>
	);
}

export default Menu;
