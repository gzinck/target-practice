class Controller {
	constructor() {
		this.left = true;
	}

	next() {
		// Always reset the y position to the center
		this.y1 = window.innerHeight / 2;
		this.y2 = window.innerHeight / 2;

		// Swap sides
		this.left = !this.left;

		this.x1 = (this.left)
			? (window.innerWidth / 4)
			: ((window.innerWidth * 3) / 4);
		this.x2 = window.innerWidth / 2;

		return {
			x1: this.x1,
			x2: this.x2,
			y1: this.y1,
			y2: this.y2,
		};
	}
}

export default Controller;
