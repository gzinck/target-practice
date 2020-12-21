import { useSetRecoilState } from 'recoil';
import viconTransformState from '../state/atoms/viconTransformState';
import viconCoordinatesState from '../state/atoms/viconCoordinatesState';

export default function useMessageHandler() {
	const setTransform = useSetRecoilState(viconTransformState);
	const setCoors = useSetRecoilState(viconCoordinatesState);

	return (e) => {
		const data = JSON.parse(e.data);
		switch (data.type) {
		case 'frameInfo':
			// Process the frame
			console.error(data);
			console.error('The coordinates are being set to dummy data');
			setCoors([0, 0, 0]);
			break;
		case 'transformationMatrix':
			console.error(data.result);
			setTransform(data.result);
			break;
		default:
		}
	};
}
