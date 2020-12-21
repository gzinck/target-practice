class Controller {
	/**
	 * Creates a new tap controller for calibrating the Vicon motion
	 * system.
	 * @param diameter An int representing the pixel diameter of the
	 * target
	 */
	constructor(diameter) {
		this.diameter = diameter;
		this.index = -1;
	}

	/**
	 * next gets the next (x, y, diameter) properties determined by
	 * the controller.
	 */
	next() {
		this.index++;
		this.x = ((window.innerWidth - this.diameter) * (this.index % 3)) / 2;
		this.y = ((window.innerHeight - this.diameter) * Math.floor(this.index / 3)) / 2;

		return {
			x: this.x,
			y: this.y,
			diameter: this.diameter,
		};
	}
}

export default Controller;
