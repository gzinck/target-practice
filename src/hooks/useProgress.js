import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { doneRoute } from '../routes';

const maxProgress = 15;

export default function useProgress() {
	const history = useHistory();

	const [progress, setProgress] = useState(0);

	const incrementProgress = () => {
		if (progress < maxProgress - 1) {
			setProgress(progress + 1);
		} else {
			history.push(doneRoute);
		}
	};

	const resetProgress = () => setProgress(0);

	return {
		progress,
		maxProgress,
		incrementProgress,
		resetProgress,
	};
}
