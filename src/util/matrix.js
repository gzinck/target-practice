const multiply = (matrix, array) => {
	// Append 1s to make array long enough
	// (i.e., convert array to homogenous coordinates)
	while (array.length < matrix[0].length) array.push(1);
	const result = [];

	for (let row = 0; row < matrix.length; row++) {
		result.push(0);
		for (let col = 0; col < matrix[row].length; col++) {
			result[row] += matrix[row][col] * array[col];
		}
	}

	return result;
};

export {
	multiply,
};
