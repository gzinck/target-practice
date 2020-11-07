import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
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
		margin: '10px 0',
		borderRadius: '4px',
		fontSize: '1.2em',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		'&:hover, &:focus': {
			top: '2px',
			boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
			backgroundColor: '#0008ff',
		},
	},
	success: {
		backgroundColor: '#00a619',
		'&:hover, &:focus': {
			backgroundColor: '#007512',
		},
	},
});

function Link(props) {
	const classes = useStyles();
	return (
		<RouterLink
			to={props.to}
			className={clsx(
				classes.root,
				classes[props.variant],
			)}
		>
			{props.children}
		</RouterLink>
	);
}

Link.defaultProps = {
	to: '',
	variant: '',
	children: null,
};

Link.propTypes = {
	to: PropTypes.string,
	variant: PropTypes.string,
	children: PropTypes.node,
};

export default Link;
