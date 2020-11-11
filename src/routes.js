const menuRoute = '/';
const doneRoute = '/done';

const parameterizedTapRoute = '/tap/:controller/rand/:randomness/diam/:diameter';
const parameterizedDragRoute = '/drag/:controller/rand/:randomness/diam/:diameter/length/:length';

const getRouteFor = (interaction, controller, randomness, diameter, length) => `/${interaction}/${controller}/rand/${randomness}/diam/${diameter}/length/${length}`;

const controller1D = '1D';
const controller2D = '2D';

export {
	controller1D,
	controller2D,
	doneRoute,
	menuRoute,

	parameterizedTapRoute,
	parameterizedDragRoute,
	getRouteFor,
};
