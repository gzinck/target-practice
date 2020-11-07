const minLength = 0.1;
const variableLength = 0.2;
const margin = 80;

class Controller {
	constructor() {
		this.left = true;
		this.downDiameter = 150;
		this.upDiameter = 100;
	}

	next() {
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
