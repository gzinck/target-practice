import { useEffect } from 'react';

// Make sure el is a ref!
export default function useEvent(eventName, cb, el = window) {
	useEffect(() => {
		if (el && eventName && cb) {
			el.addEventListener(eventName, cb);
			return () => el.removeEventListener(eventName, cb);
		}
	}, [eventName, cb, el]);
}
