import { multiply } from './matrix';

test('multiplies a matrix and array', () => {
	const m = [
		[1, 0, 0, 4],
		[0, 1, 0, 3],
		[0, 0, 1, 2],
	];
	const arr = [5, 6, 7];
	expect(multiply(m, arr)).toEqual([9, 9, 9]);
});
