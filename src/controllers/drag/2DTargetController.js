const margin = 80;

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
		this.direction = 0;
		this.fixedOpt = 0;
		this.randomness = randomness;
		this.length = length;
	}

	next() {
		// Decide to do fixed moves or random
		if (Math.random() < this.randomness) {
			// Pick a start position
			this.x1 = Math.random() * (window.innerWidth - this.downDiameter)
				+ (this.downDiameter / 2);
			this.y1 = Math.random() * (window.innerHeight - this.downDiameter - 2 * margin)
				+ (this.downDiameter / 2) + margin;

			// Pick a direction
			this.direction = Math.random() * 2 * Math.PI;

			// Set the end position
			this.x2 = this.x1 + Math.sin(this.direction) * this.length;
			this.y2 = this.y1 + Math.cos(this.direction) * this.length;
		} else {
			// Switch direction
			this.fixedOpt = (this.fixedOpt + 1) % 4;

			switch (this.fixedOpt) {
			case 0:
				this.x1 = window.innerWidth / 4;
				this.y1 = window.innerHeight / 4;
				this.x2 = window.innerWidth / 4;
				this.y2 = this.y1 + this.length;
				break;
			case 1:
				this.x1 = (window.innerWidth * 3) / 4;
				this.y1 = window.innerHeight / 4;
				this.x2 = this.x1 + this.length;
				this.y2 = window.innerHeight / 4;
				break;
			case 2:
				this.x1 = (window.innerWidth * 3) / 4;
				this.y1 = (window.innerHeight * 3) / 4;
				this.x2 = (window.innerWidth * 3) / 4;
				this.y2 = this.y1 + this.length;
				break;
			default:
				this.x1 = window.innerWidth / 4;
				this.y1 = (window.innerHeight * 3) / 4;
				this.x2 = this.x1 + this.length;
				this.y2 = (window.innerHeight * 3) / 4;
				break;
			}
		}

		// If fell off left side of the screen, move the two points
		const leftSide = this.x2 - this.downDiameter / 2;
		if (leftSide < 0) {
			this.x1 -= leftSide;
			this.x2 -= leftSide;
		}

		// If fell off right side of the screen
		const rightSide = this.x2 + this.downDiameter / 2;
		if (rightSide > window.innerWidth) {
			this.x1 -= rightSide - window.innerWidth;
			this.x2 -= rightSide - window.innerWidth;
		}

		// If fell off the top side of the screen
		const topSide = this.y2 - this.downDiameter / 2 - margin;
		if (topSide < 0) {
			this.y1 -= topSide;
			this.y2 -= topSide;
		}

		// If fell off the bottom side of the screen
		const botSide = this.y2 + this.downDiameter / 2 + margin;
		if (botSide > window.innerHeight) {
			this.y1 -= botSide - window.innerHeight;
			this.y2 -= botSide - window.innerHeight;
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
