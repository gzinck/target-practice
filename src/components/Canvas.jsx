import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { menuRoute } from '../routes';
import Circle from './Circle';
import useController from '../hooks/useController';

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
			<Link
				to={menuRoute}
				className={classes.link}
			>
				Back to Menu
			</Link>
			<Circle
				{...circProps}
				onClick={next}
			/>
		</div>
	);
}

export default Canvas;
