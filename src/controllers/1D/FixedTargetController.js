class Controller {
	constructor() {
		this.diameter = 200;
		this.left = true;
	}

	/**
	 * next gets the next (x, y, diameter) properties determined by
	 * the controller.
	 */
	next() {
		// Swap sides
		this.left = !this.left;

		const radius = this.diameter / 2;
		this.x = (this.left)
			? (window.innerWidth / 4 - radius)
			: ((window.innerWidth * 3) / 4 - radius);
		this.y = (window.innerHeight - this.diameter) / 2;

		return {
			x: this.x,
			y: this.y,
			diameter: this.diameter,
		};
	}
}

export default Controller;
