import { atom } from 'recoil';

const viconTransformState = atom({
	key: 'viconTransformState',
	default: [
		[1, 0, 0, 4],
		[0, 1, 0, 3],
		[0, 0, 1, 2],
	],
});

export default viconTransformState;
