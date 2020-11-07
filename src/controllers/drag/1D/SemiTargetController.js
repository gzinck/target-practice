const minLength = 0.1;
const variableLength = 0.2;

class Controller {
	constructor() {
		this.left = true;
		this.downDiameter = 150;
		this.upDiameter = 100;
		this.left = true;
	}

	next() {
		// Always reset the y position to the center
		this.y1 = window.innerHeight / 2;
		this.y2 = window.innerHeight / 2;

		// Decide whether to do fixed or random motion
		if (Math.random() < 0.8) {
			// Swap sides
			this.left = !this.left;

			this.x1 = (this.left)
				? (window.innerWidth / 4)
				: ((window.innerWidth * 3) / 4);
			this.x2 = window.innerWidth / 2;
		} else {
			// Pick a start position, length, and direction.
			// If falls off the screen, reflect on the appropriate axis.
			this.x1 = Math.random() * (window.innerWidth - this.downDiameter) + (this.downDiameter / 2);

			this.length = window.innerWidth * (minLength + Math.random() * variableLength);

			// Pick direction
			if (Math.random() < 0.5) {
				// Go right
				this.x2 = this.x1 + this.length;
			} else {
				// Go left
				this.x2 = this.x1 - this.length;
			}

			// If fell off screen, reflect
			if (this.x2 < this.downDiameter / 2 || this.x2 > window.innerWidth - this.downDiameter / 2) {
				this.x2 = this.x1 + (this.x1 - this.x2);
			}
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
