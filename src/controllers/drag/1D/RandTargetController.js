// const minLength = 0.1;
// const maxLength = 0.3;

class Controller {
	constructor() {
		this.left = true;
		this.downDiameter = 150;
		this.upDiameter = 100;
	}

	next() {
		// Always reset the y position to the center
		this.y1 = window.innerHeight / 2;
		this.y2 = window.innerHeight / 2;

		// Pick a start position, length, and direction.
		// If falls off the screen, reflect on the appropriate axis.
		// TODO: actually do this!
		this.x1 = (this.left)
			? (window.innerWidth / 4)
			: ((window.innerWidth * 3) / 4);
		this.x2 = window.innerWidth / 2;

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
