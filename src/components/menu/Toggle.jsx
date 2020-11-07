import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		backgroundColor: '#FFF',
		borderRadius: '50px',
		margin: '10px 0',
	},
	item: ({ numOpts }) => ({
		zIndex: 1,
		flexGrow: 1,
		textAlign: 'center',
		fontSize: '1em',
		padding: '10px',
		margin: 0,
		width: `${100 / numOpts}%`,
		boxSizing: 'border-box',
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		transition: 'all 0.2s',
		color: '#888',
		'&:hover, &:focus': {
			color: '#000',
		},
	}),
	active: () => ({
		color: '#FFF',
		cursor: 'default',
		'&:hover, &:focus': {
			color: '#FFF',
		},
	}),
	bg: ({ curr, numOpts }) => ({
		zIndex: 0,
		position: 'absolute',
		width: `${100 / numOpts}%`,
		left: `${(curr / numOpts) * 100}%`,
		backgroundColor: '#0091ff',
		height: '100%',
		borderRadius: '50px',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		transition: 'all 0.2s',
	}),
});

function Toggle(props) {
	const classes = useStyles({
		...props,
		numOpts: props.opts.length,
	});
	return (
		<div className={classes.root}>
			<div className={classes.bg} />
			{props.opts.map((opt, idx) => (
				<button
					type="button"
					key={opt}
					className={clsx(
						classes.item,
						(idx === props.curr) ? classes.active : '',
					)}
					onClick={() => props.setCurr(idx)}
				>
					{opt}
				</button>
			))}
		</div>
	);
}

Toggle.defaultProps = {
	opts: [],
	curr: 0,
	setCurr: () => null,
};

Toggle.propTypes = {
	opts: PropTypes.array,
	curr: PropTypes.number,
	setCurr: PropTypes.func,
};

export default Toggle;
