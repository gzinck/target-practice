class Controller {
	/**
	 * @param randomness A float in range [0, 1] indicating the
	 * probability the next circle is placed randomly.
	 * @param diameter An int representing the pixel diameter
	 * of the target
	 */
	constructor(randomness, diameter) {
		this.diameter = diameter;
		this.left = true;
		this.randomness = randomness;
	}

	/**
	 * next gets the next (x, y, diameter) properties determined by
	 * the controller.
	 */
	next() {
		if (Math.random() < this.randomness) {
			// If this is a random one, go crazy!
			this.x = Math.random() * (window.innerWidth - this.diameter);
			this.y = (window.innerHeight - this.diameter) / 2;
		} else {
			// Otherwise, swap sides
			this.left = !this.left;

			const radius = this.diameter / 2;
			this.x = (this.left)
				? (window.innerWidth / 4 - radius)
				: ((window.innerWidth * 3) / 4 - radius);
			this.y = (window.innerHeight - this.diameter) / 2;
		}

		return {
			x: this.x,
			y: this.y,
			diameter: this.diameter,
		};
	}
}

export default Controller;
