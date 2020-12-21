import { selector } from 'recoil';
import viconCoordinatesState from '../atoms/viconCoordinatesState';
import viconTransformState from '../atoms/viconTransformState';
import { multiply } from '../../util/matrix';

const deviceCoordinatesState = selector({
	key: 'deviceCoordinatesState',
	get: ({ get }) => {
		const transform = get(viconTransformState);
		const coordinates = get(viconCoordinatesState);
		return multiply(transform, coordinates);
	},
});

export default deviceCoordinatesState;
