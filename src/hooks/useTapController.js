import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rand1D from '../controllers/tap/1D/RandTargetController';
import Fixed1D from '../controllers/tap/1D/FixedTargetController';
import Semi1D from '../controllers/tap/1D/SemiTargetController';
import Rand2D from '../controllers/tap/2D/RandTargetController';
import Fixed2D from '../controllers/tap/2D/FixedTargetController';
import Semi2D from '../controllers/tap/2D/SemiTargetController';
import {
	controller1DFixedName,
	controller1DRandName,
	controller1DSemiName,
	controller2DFixedName,
	controller2DRandName,
	controller2DSemiName,
} from '../routes';

export default function useController() {
	const { controller: controllerName } = useParams();
	const [controller, setController] = useState(null);

	useEffect(() => {
		switch (controllerName) {
		case controller1DRandName:
			setController(new Rand1D());
			break;
		case controller1DFixedName:
			setController(new Fixed1D());
			break;
		case controller1DSemiName:
			setController(new Semi1D());
			break;
		case controller2DRandName:
			setController(new Rand2D());
			break;
		case controller2DFixedName:
			setController(new Fixed2D());
			break;
		case controller2DSemiName:
			setController(new Semi2D());
			break;
		default:
			setController(null);
		}
	}, [controllerName]);

	return controller;
}
