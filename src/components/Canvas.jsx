import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Circle from './Circle';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100vh',
	},
});

function Canvas(props) {
	const classes = useStyles();
	const [circProps, setCircProps] = React.useState(null);

	const next = () => {
		if (props.controller !== null) {
			setCircProps(props.controller.next());
		}
	};
	React.useEffect(next, [props.controller]);

	return (
		<div className={classes.root}>
			<Circle
				{...circProps}
				onClick={next}
			/>
		</div>
	);
}

Canvas.defaultProps = {
	controller: null,
};

Canvas.propTypes = {
	controller: PropTypes.object, // Should be a controller
};

export default Canvas;
