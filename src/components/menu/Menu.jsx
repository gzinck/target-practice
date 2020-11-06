import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		position: 'relative',
		paddingTop: '50px',
		boxSizing: 'border-box',
		width: '100%',
		minHeight: '100vh',
	},
	success: {
		'& $menu': {
			backgroundColor: '#f7fff8',
		},
		'& $link': {
			backgroundColor: '#00a619',
			'&:hover, &:focus': {
				backgroundColor: '#007512',
			},
		},
	},
	menu: {
		maxWidth: '400px',
		minHeight: '600px',
		marginLeft: 'calc(50vw - min(100vw, 400px) / 2)',
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
				{props.links.map((link) => (
					<Link
						key={link.name}
						to={link.route}
						className={classes.link}
					>
						{link.name}
					</Link>
				))}
			</div>
		</div>
	);
}

Menu.defaultProps = {
	title: 'Menu',
	links: [],
	children: null,
	variant: '',
};

Menu.propTypes = {
	title: PropTypes.string,
	links: PropTypes.array,
	children: PropTypes.node,
	variant: PropTypes.string,
};

export default Menu;
