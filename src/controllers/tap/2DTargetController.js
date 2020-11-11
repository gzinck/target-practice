const margin = 80;

class Controller {
	/**
	 * @param randomness A float in range [0, 1] indicating the
	 * probability the next circle is placed randomly.
	 * @param diameter An int representing the pixel diameter
	 * of the target
	 */
	constructor(randomness, diameter) {
		this.diameter = diameter;
		this.mode = 0;
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
			this.y = Math.random() * (window.innerHeight - this.diameter - 2 * margin) + margin;
		} else {
			// Otherwise, move to another corner
			this.mode = (this.mode + 1) % 4;
			const radius = this.diameter / 2;

			switch (this.mode) {
			case 0:
				this.x = window.innerWidth / 4 - radius;
				this.y = window.innerHeight / 4 - radius;
				break;
			case 1:
				this.x = window.innerWidth / 4 - radius;
				this.y = (window.innerHeight * 3) / 4 - radius;
				break;
			case 2:
				this.x = (window.innerWidth * 3) / 4 - radius;
				this.y = (window.innerHeight * 3) / 4 - radius;
				break;
			default:
				this.x = (window.innerWidth * 3) / 4 - radius;
				this.y = window.innerHeight / 4 - radius;
			}
		}

		return {
			x: this.x,
			y: this.y,
			diameter: this.diameter,
		};
	}
}

export default Controller;
