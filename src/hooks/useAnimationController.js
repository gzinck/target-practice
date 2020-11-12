import { useParams } from 'react-router-dom';

export default function useAnimationController() {
	const { timing, ease } = useParams();

	return { timing, ease };
}
