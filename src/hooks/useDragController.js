import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Fixed1D from '../controllers/drag/1D/FixedTargetController';
import {
	controller1DFixedName,
} from '../routes';

export default function useController() {
	const { controller: controllerName } = useParams();
	const [controller, setController] = useState(null);

	useEffect(() => {
		switch (controllerName) {
		case controller1DFixedName:
			setController(new Fixed1D());
			break;
		default:
			setController(null);
		}
	}, [controllerName]);

	return controller;
}
