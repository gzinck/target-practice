const menuRoute = '/';
const doneRoute = '/done';
const calibrateRoute = '/calibrate';

const parameterizedTapRoute = '/tap/:controller/rand/:randomness/diam/:diameter/ease/:ease/time/:timing';
const parameterizedDragRoute = '/drag/:controller/rand/:randomness/diam/:diameter/ease/:ease/time/:timing/length/:length';

const getRouteFor = (interaction, controller, randomness, diameter, ease, timing, length) => `/${interaction}/${controller}/rand/${randomness}/diam/${diameter}/ease/${ease}/time/${timing}/length/${length}`;

const controller1D = '1D';
const controller2D = '2D';

export {
	controller1D,
	controller2D,
	doneRoute,
	menuRoute,

	calibrateRoute,
	parameterizedTapRoute,
	parameterizedDragRoute,
	getRouteFor,
};
