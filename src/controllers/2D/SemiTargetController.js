const margin = 80;

class Controller {
	constructor() {
		this.diameter = 200;
		this.mode = 0;
	}

	/**
	 * next gets the next (x, y, diameter) properties determined by
	 * the controller.
	 */
	next() {
		if (Math.random() > 0.8) {
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
