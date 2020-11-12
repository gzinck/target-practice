import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		position: 'relative',
		overflowY: 'auto',
		boxSizing: 'border-box',
		width: '100%',
		height: '100vh',
	},
	success: {
		'& $menu': {
			backgroundColor: '#f7fff8',
		},
	},
	menu: {
		maxWidth: '400px',
		marginLeft: 'calc(50vw - min(100vw, 400px) / 2)',
		margin: '50px 0',
		borderRadius: '5px',
		padding: '30px 20px',
		boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		backgroundColor: '#EEE',
	},
});

function Menu(props) {
	const classes = useStyles({ ...props });

	return (
		<div
			className={clsx(
				classes.root,
				classes[props.variant],
			)}
		>
			<div className={classes.menu}>
				<h2>{props.title}</h2>
				{props.children}
			</div>
		</div>
	);
}

Menu.defaultProps = {
	title: 'Menu',
	children: null,
	variant: '',
};

Menu.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	variant: PropTypes.string,
};

export default Menu;
