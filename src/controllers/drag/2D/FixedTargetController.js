class Controller {
	constructor() {
		this.direction = 0;
		this.downDiameter = 150;
		this.upDiameter = 100;
	}

	next() {
		// Switch direction
		this.direction = (this.direction + 1) % 4;

		switch (this.direction) {
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
