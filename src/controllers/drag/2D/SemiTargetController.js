const minLength = 0.1;
const variableLength = 0.2;
const margin = 80;

class Controller {
	constructor() {
		this.left = true;
		this.downDiameter = 150;
		this.upDiameter = 100;
		this.direction = 0;
		this.fixedOpt = 0;
	}

	next() {
		// Decide to do fixed moves or random
		if (Math.random() < 0.8) {
			// Switch direction
			this.fixedOpt = (this.fixedOpt + 1) % 4;

			switch (this.fixedOpt) {
			case 0:
				this.x1 = window.innerWidth / 4;
				this.y1 = window.innerHeight / 4;
				this.x2 = window.innerWidth / 4;
				this.y2 = window.innerHeight / 2;
				break;
			case 1:
				this.x1 = (window.innerWidth * 3) / 4;
				this.y1 = window.innerHeight / 4;
				this.x2 = window.innerWidth / 2;
				this.y2 = window.innerHeight / 4;
				break;
			case 2:
				this.x1 = (window.innerWidth * 3) / 4;
				this.y1 = (window.innerHeight * 3) / 4;
				this.x2 = (window.innerWidth * 3) / 4;
				this.y2 = window.innerHeight / 2;
				break;
			default:
				this.x1 = window.innerWidth / 4;
				this.y1 = (window.innerHeight * 3) / 4;
				this.x2 = window.innerWidth / 2;
				this.y2 = (window.innerHeight * 3) / 4;
				break;
			}
		} else {
			// Pick a start position
			this.x1 = Math.random() * (window.innerWidth - this.downDiameter)
				+ (this.downDiameter / 2);
			this.y1 = Math.random() * (window.innerHeight - this.downDiameter - 2 * margin)
				+ (this.downDiameter / 2) + margin;

			// Pick a length and direction
			this.length = window.innerWidth * (minLength + Math.random() * variableLength);
			this.direction = Math.random() * 2 * Math.PI;

			// Set the end position
			this.x2 = this.x1 + Math.sin(this.direction) * this.length;
			this.y2 = this.y1 + Math.cos(this.direction) * this.length;

			// If x-position fell off screen, reflect
			if (
				(this.x2 < this.downDiameter / 2)
				|| (this.x2 > window.innerWidth - this.downDiameter / 2)
			) {
				this.x2 = this.x1 - Math.sin(this.direction) * this.length;
			}

			// If y-position fell off screen, reflect
			if (
				(this.y2 < this.downDiameter / 2 + margin)
				|| (this.y2 > window.innerHeight - this.downDiameter / 2 - margin)
			) {
				this.y2 = this.y1 - Math.cos(this.direction) * this.length;
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
