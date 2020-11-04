import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rand1D from '../controllers/1D/RandTargetController';
import { controller1DRandName } from '../routes';

export default function useController() {
	const { controller: controllerName } = useParams();
	const [controller, setController] = useState(null);

	useEffect(() => {
		switch (controllerName) {
		case controller1DRandName:
			setController(new Rand1D());
			break;
		default:
			setController(null);
		}
	}, [controllerName]);

	return controller;
}
