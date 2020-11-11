class Controller {
	/**
	 * @param randomness A float in range [0, 1] indicating the
	 * probability the next circle is placed randomly.
	 * @param diameter An int representing the pixel diameter
	 * of the target
	 * @param length A number representing the length of the drag
	 * gestures in pixels.
	 */
	constructor(randomness, diameter, length) {
		this.left = true;
		this.downDiameter = diameter;
		this.upDiameter = diameter * 0.75;
		this.left = true;
		this.randomness = randomness;
		this.length = length;
	}

	next() {
		// Always reset the y position to the center
		this.y1 = window.innerHeight / 2;
		this.y2 = window.innerHeight / 2;

		// Decide whether to do fixed or random motion
		if (Math.random() < this.randomness) {
			// Pick a start position, length, and direction.
			// If falls off the screen, reflect on the appropriate axis.
			this.x1 = Math.random() * (window.innerWidth - this.downDiameter) + (this.downDiameter / 2);

			// Pick direction
			if (Math.random() < 0.5) {
				// Go right
				this.x2 = this.x1 + this.length;
			} else {
				// Go left
				this.x2 = this.x1 - this.length;
			}
		} else {
			// Do non-random motion
			this.left = !this.left;

			this.x1 = (this.left)
				? (window.innerWidth / 4)
				: ((window.innerWidth * 3) / 4);
			this.x2 = (this.left)
				? (this.x1 + this.length)
				: (this.x1 - this.length);
		}

		// If fell off left side of the screen, move the two points
		const leftSide = this.x2 - this.downDiameter / 2;
		if (leftSide < 0) {
			this.x1 -= leftSide;
			this.x2 -= leftSide;
		}

		// If fell off right side of the screen, move the two points
		const rightSide = this.x2 + this.downDiameter / 2;
		if (rightSide > window.innerWidth) {
			this.x1 -= rightSide - window.innerWidth;
			this.x2 -= rightSide - window.innerWidth;
		}

		return {
			x1: this.x1,
			x2: this.x2,
			y1: this.y1,
			y2: this.y2,
			downDiameter: this.downDiameter,
			upDiameter: this.upDiameter,
		};
	}
}

export default Controller;
