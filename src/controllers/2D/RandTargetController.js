const margin = 80;

class Controller {
	constructor() {
		this.diameter = 200;
	}

	/**
	 * next gets the next (x, y, diameter) properties determined by
	 * the controller.
	 */
	next() {
		this.x = Math.random() * (window.innerWidth - this.diameter);
		this.y = Math.random() * (window.innerHeight - this.diameter - 2 * margin) + margin;
		return {
			x: this.x,
			y: this.y,
			diameter: this.diameter,
		};
	}
}

export default Controller;
