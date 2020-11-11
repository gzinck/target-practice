import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cont1D from '../controllers/tap/1DTargetController';
import Cont2D from '../controllers/tap/2DTargetController';
import {
	controller1D,
} from '../routes';

export default function useController() {
	const {
		controller: cont, randomness, diameter,
	} = useParams();
	const [controller, setController] = useState(null);

	useEffect(() => {
		if (cont === controller1D) {
			setController(new Cont1D(
				parseFloat(randomness),
				parseFloat(diameter),
			));
		} else {
			setController(new Cont2D(
				parseFloat(randomness),
				parseFloat(diameter),
			));
		}
	}, [cont, randomness, diameter]);

	return controller;
}
