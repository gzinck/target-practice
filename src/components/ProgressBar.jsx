import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: '20px',
	},
	progress: ({ current, max }) => ({
		transition: 'all 0.2s',
		height: '20px',
		margin: 0,
		width: `${Math.min(current / max, 1) * 100}%`,
		backgroundColor: '#4ad945',
	}),
});

function ProgressBar(props) {
	const classes = useStyles({ ...props });

	return (
		<div className={classes.root}>
			<div className={classes.progress} />
		</div>
	);
}

ProgressBar.defaultProps = {
	current: 0,
	max: 1,
};

ProgressBar.propTypes = {
	current: PropTypes.number,
	max: PropTypes.number,
};

export default ProgressBar;
