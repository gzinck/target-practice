import { atom } from 'recoil';

const viconCoordinatesState = atom({
	key: 'viconCoordinatesState',
	default: [0, 0, 0],
});

export default viconCoordinatesState;
